import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function main(){
    const prisma = new PrismaClient();
//This deletes any current lines in the db product table
    await prisma.product.deleteMany;
//This takes the sample data and adds it to the product db table
    await prisma.product.createMany({data: sampleData.products});

    console.log('Database seeded successfully!!')

}

main();