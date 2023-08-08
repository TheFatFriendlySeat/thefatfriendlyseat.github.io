import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { Venue } from "@prisma/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { method } = req;
    const searchString = req.query.q as string;
    
    switch (method) {
        case 'GET': {

            // We don't want to search theatres/theaters because that will return too many results
            // Incase someone searches something like "theatres in london", we don't want to includes venue names with "in" in them
            const wordsToFilterOut = [
                'theatre',
                'theater',
                'theatres',
                'theaters',
                'in',
                'and',
                'at',
                'on',
                'of',
                'the'
            ];

            // Splitting the search string into an array of search terms so we can search for each term individually
            // filtering out any terms that are too short or are in the blacklist
            const filteredSearchStrings = searchString.split(' ')
                .filter((term) => term.length > 0)
                .filter((term) => !wordsToFilterOut.includes(term));
                

            const venueSearchQueries = filteredSearchStrings.map((term) => {
                return {
                    name: {
                        contains: term,
                    }
                }
            });

            const cityTownSearchQueries = filteredSearchStrings.map((term) => {
                return {
                    cityTown: {
                        name: {
                            contains: term,
                        }
                    }
                }
            });

            try {
                // Search for venues first
                let venues: Venue[] = [];
                venues = await prisma.venue.findMany({
                    include: {
                        cityTown: true,
                    },
                    where: {
                        // Make sure to search the original search string as well (this might include words in the blacklist)
                        OR: [{name: { contains: searchString}}, ...venueSearchQueries, ...cityTownSearchQueries]
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