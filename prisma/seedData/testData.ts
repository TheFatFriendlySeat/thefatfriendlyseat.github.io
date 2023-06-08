import { Prisma, PrismaClient, Venues } from '@prisma/client';

const data: Prisma.VenuesCreateInput[] = [
    {
        id: "1",
        name: 'Test Venue 1',
        address: 'Test Address 1',
    },
    {
        id: "2",
        name: 'Test Venue 2',
    },
];

export const seedVenues = async (prisma: PrismaClient) => {
    const venuesArr: Venues[] = [];
    
    for (const venue of data) {
        const venueData = await prisma.venues.upsert({
            where: {
                id: venue.id,
            },
            create: venue,
            update: venue,
        });

        venuesArr.push(venueData);
        console.log(`Created venue with id: ${venueData.id}`);
    }

    return venuesArr;
}