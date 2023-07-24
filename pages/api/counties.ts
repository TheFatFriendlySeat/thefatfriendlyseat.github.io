import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    
    switch (method) {
        case 'GET': {
            try {
                const county = await prisma.county.findMany({
                    orderBy: {
                        name: 'asc',
                    },
                });
                res.status(200).json(county);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
    }
}