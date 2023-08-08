import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    
    switch (method) {
        case 'GET': {
            try {
                const cityTowns = await prisma.cityTown.findMany({
                    orderBy: {
                        name: 'asc',
                    },
                    include: {
                        venues: true,
                    }
                });
                res.status(200).json(cityTowns);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
    }
}