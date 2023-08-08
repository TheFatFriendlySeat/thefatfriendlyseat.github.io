// libraries
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type RawVenueData = {
    Name: string,
    Website: string,
    City: string,
    County: string,
    ['New Status Field']: string,
    Notes: string
}

const getData = async (): Promise<RawVenueData[]> => {
    const csv = require('csv-parser');
    const { readdir } = require('fs/promises');
    const { createReadStream } = require('fs');
    const path = require('path');

    const dataDirecrory: string = path.join(__dirname, '../data');

    const getLatestFile = async () => {
        try {
            const files = await readdir(dataDirecrory);
            files.sort((a: string, b: string) => {
                const [yearA, monthA, dayA] = a.split('.')[0].split('-');
                const [yearB, monthB, dayB] = b.split('.')[0].split('-');
    
                return (new Date(parseInt(yearA), parseInt(monthA), parseInt(dayA)) as any) - (new Date(parseInt(yearB), parseInt(monthB), parseInt(dayB)) as any);
            });

            return files[files.length - 1];
        }
        catch (err) {
            console.log("Error reading directory");
            console.log(err);
        }
    }

    const getFileData = (dataDir: string, fileName: string): Promise<RawVenueData[]> => {
        const results: any[] = [];
        
        return new Promise((resolve, reject) => {
            createReadStream(`${dataDir}/${fileName}`)
                .pipe(csv())
                .on('data', (data: any) => results.push(data))
                .on('end', () => {
                   resolve(results);
                })
                .on('error', (err: any) => {
                    reject(err);
                })
            });
    }

    const fileToRead = await getLatestFile();

    console.log(`Found file: ${fileToRead}`);

    if (!fileToRead) {
        return Promise.reject("No file to read");
    }

    return getFileData(dataDirecrory, fileToRead);
}

const main = async () => {
    console.log(`Loading data...`);
    const venuesData = await getData();
    console.log(`--------`);

    console.log(`Start seeding ...`);

    console.log(`- Venues`);
    for (let i = 0; i < venuesData.length; i++) {
        const venueData = venuesData[i];

        if (venueData.Name === '') {
            continue;
        }

        await prisma.venue.upsert({
            where: { id: i + 1 },
            update: {},
            create: {
                name: venueData.Name,
                website: venueData.Website,
                status: venueData['New Status Field'],
                notes: venueData.Notes,
                cityTown: {
                    connectOrCreate: {
                        where: { cityCounty: {
                            name: venueData.City,
                            countyName: venueData.County,
                        } },
                        create: {
                            name: venueData.City,
                            county: {
                                connectOrCreate: {
                                    where: { name: venueData.County },
                                    create: {
                                        name: venueData.County,
                                    },
                                }
                            }
                        }
                    }
                },
                county: {
                    connectOrCreate: {
                        where: { name: venueData.County },
                        create: {
                            name: venueData.County,
                        },
                    }
                },
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        console.log(`-- Seeded ${venueData.Name}`);
    }
    console.log(`--------`);

    console.log(`Seeding finished. Seeded ${venuesData.length} venues.`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });