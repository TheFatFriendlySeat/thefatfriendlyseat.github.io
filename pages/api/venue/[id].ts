import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const method = req.method;
    const { id } = req.query;

    switch (method) {
        case 'GET': {
            try {
                const venue = await prisma.venue.findUnique({
                    where: {
                        id: Number(id),
                    },
                    include: {
                        cityTown: true,
                    }
                });
                res.status(200).json(venue);
            }
            catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
    }
}