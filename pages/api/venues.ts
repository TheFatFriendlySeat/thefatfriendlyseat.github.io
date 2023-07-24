import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    
    switch (method) {
        case 'GET': {
            try {
                const venues = await prisma.venue.findMany({
                    orderBy: {
                        name: 'asc',
                    },
                    include: {
                        cityTown: true,
                    }
                });
                res.status(200).json(venues);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
    }
}