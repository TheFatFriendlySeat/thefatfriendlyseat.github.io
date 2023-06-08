import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const venue = await prisma.venues.findFirst({
            where: {
                id: req.query.id as string,
            }
        });

        if (venue) {
            return res.json(venue);
        }

        return res.status(404).json({ message: 'Venue not found' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
}