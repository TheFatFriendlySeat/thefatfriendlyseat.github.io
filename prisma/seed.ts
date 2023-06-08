// libraries
import { PrismaClient } from "@prisma/client";
import { seedVenues } from "./seedData/testData";

const prisma = new PrismaClient();


async function main() {
    console.log(`Start seeding ...`);

    await seedVenues(prisma);

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