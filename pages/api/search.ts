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
            // filtering out any terms that are too short or are in the blacklsit
            const searchQueries = searchString.split(' ')
                .filter((term) => term.length > 0)
                .filter((term) => !wordsToFilterOut.includes(term))
                .map((term) => {
                return {
                    name: {
                        contains: term,
                    }
                }
            });

            // Make sure to search the original search string as well (this might include words in the blacklist)
            searchQueries.unshift({name: { contains: searchString}});

            try {
                // Search for venues first
                let venues: Venue[] = [];
                venues = await prisma.venue.findMany({
                    orderBy: {
                        name: 'asc',
                    },
                    include: {
                        cityTown: true,
                    },
                    where: {
                        OR: searchQueries
                    }
                });

                // search for city/towns
                    const cityTowns = await prisma.cityTown.findMany({
                        orderBy: {
                            name: 'asc',
                        },
                        include: {
                            venues: true,
                        },
                        where: {
                            OR: searchQueries
                        }
                    });

                    cityTowns.forEach(cityTown => {
                        for (const venue of cityTown.venues) {
                            if (venues.find(v => v.id === venue.id)) {
                                continue;
                            }

                            (venue as any).cityTown = {
                                cityTownId: cityTown.id,
                                name: cityTown.name,
                                countyName: cityTown.countyName,
                                createdAt: cityTown.createdAt,
                                updatedAt: cityTown.updatedAt,
                            };
                            venues.push(venue);
                        };
                    });

                
                res.status(200).json(venues);
            } catch (error: any) {
                res.status(500).json({ error: error.message });
            }
            break;
        }
    }
}