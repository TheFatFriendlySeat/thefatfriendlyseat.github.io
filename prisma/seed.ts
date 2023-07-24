// libraries
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export enum VenueStatus {
    REQUESTED = "REQUESTED",
    AKNOWLEDGED = "AKNOWLEDGED",
    CAMPAIGN_WIN = "CAMPAIGN_WIN",
    PROVIDED = "PROVIDED",
    WONT_PROVIDE = "WONT_PROVIDE",
}

async function main() {
    console.log(`Start seeding ...`);

    const venuesData = [
        {
            name: "Leeds Grand Theatre",
            website: "https://leedsheritagetheatres.com/",
            status: VenueStatus.PROVIDED,
            notes: `What are your seat measurements?
            Leeds Grand Theatre
            
            Stalls: Seat pad width: 48cm / Leg room: 80cm. All seats have arm-rests these can't be removed
            
            Dress Circle: Seat pad width: 44cm / Leg room: 63cm. All seats have arm-rests these can't be removed
            
            Upper Circle: Seat pad width: 42cm / Leg room: 68cm. All seats have arm-rests these can't be removed
            
            Balcony: Seat pad width: 43cm / Leg room: 71cm. All seats have arm-rests these can't be removed
            
            Upper Balcony: Seat pad width: 42cm / Leg room: 65cm. No arm rests
            
            Boxes have free-standing chairs so may be more spacious`,
            city: "Leeds",
            county: "West Yorkshire",
        },
        {
            name: "Alhambra Theatre",
            website: "https://www.bradford-theatres.co.uk/",
            status: VenueStatus.AKNOWLEDGED,
            notes: `Requested - Chased 24/04.
            Contact us form only, so sent IG message to see if I can make contact.
            05/06 - found an email address (Theatres.Administration@bradford.gov.uk) so emailed again.
            12/06 - email received confirming receipt, have offered measuring service.`,
            city: "Bradford",
            county: "West Yorkshire",
        },
        {
            name: "Stephen Joseph Theatre",
            website: "https://sjt.uk.com/",
            status: VenueStatus.CAMPAIGN_WIN,
            notes: `Seat dimensions

            The Round: Seat widths range from 42-44cm. All seats except the back row have armrests which cannot be moved. The backrow doesn't have any armrests - the seats are raised with a cushioned barrier you can lean forwards onto. The Round is auditorium with blue seats in the pictures.
            
            The McCarthy: Seat widths are 45cm and all seats have armrests which cannot be moved. The McCarthy is the auditorium with red seats in the pictures.
            
            Aisles and staircases are marked on our seating plans. If you have any questions please email our Box Office team who can advise on specific seats.`,
            city: "Scarborough",
            county: "North Yorkshire",
        }
    ];

    console.log(`- Venues`);
    for (let i = 0; i < venuesData.length; i++) {
        const venueData = venuesData[i];
        await prisma.venue.upsert({
            where: { id: i + 1 },
            update: {},
            create: {
                name: venueData.name,
                website: venueData.website,
                status: venueData.status,
                notes: venueData.notes,
                cityTown: {
                    connectOrCreate: {
                        where: { cityCounty: {
                            name: venueData.city,
                            countyName: venueData.county,
                        } },
                        create: {
                            name: venueData.city,
                            county: {
                                connectOrCreate: {
                                    where: { name: venueData.county },
                                    create: {
                                        name: venueData.county,
                                    },
                                }
                            }
                        }
                    }
                },
                county: {
                    connectOrCreate: {
                        where: { name: venueData.county },
                        create: {
                            name: venueData.county,
                        },
                    }
                },
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        console.log(`-- Seeded ${venueData.name}`);
    }
    console.log(`--------`);

    console.log(`Seeding finished.`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });