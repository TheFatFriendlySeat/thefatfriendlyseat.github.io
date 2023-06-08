import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {
        const venues = await prisma.venues.findMany();
    
        return res.json(venues);
    }

    return res.status(405).json({ message: 'Method not allowed' });
}