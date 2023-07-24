import React from "react";

import Header from "../components/header";

import styles from "../styles/about.module.scss"
import { CityTown, Venue } from "@prisma/client";

type VenueWithCity = Venue & { cityTown: CityTown };

const VenuesPage: React.FC = () => {
    const [venues, setVenues] = React.useState([] as VenueWithCity[]);

    React.useEffect(() => {

        const getVenueData = async () => {
            const venueData: Venue[] = await fetch('/api/venues').then(res => res.json());

            setVenues(venueData as VenueWithCity[]);
        }
        
        // TODO: Add error handling
        getVenueData().catch(err => console.log(err));
    }, []);

    return <div>
        <Header />
        <article id={styles.about}>
            <div className={styles.content}>
                {venues.map((venue: VenueWithCity) => {
                    return <React.Fragment>
                            <h2>{venue.name}</h2>
                            <p>{venue.cityTown.name}</p>
                            <p>{venue.countyName}</p>
                            <p>{venue.website}</p>
                            <p>{venue.status}</p>
                            <p>{venue.notes}</p>
                        </React.Fragment>
                    })
                }
            </div>
        </article>
    </div>
};

export default VenuesPage;