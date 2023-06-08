// libraries
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

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