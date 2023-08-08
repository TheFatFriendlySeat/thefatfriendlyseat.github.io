import React from "react";

import Header from "../components/header";

import styles from "../styles/about.module.scss"
import { Venue } from "@prisma/client";
import VenueCard, { VenueWithCity } from "../components/venueCard";

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
                    return <VenueCard key={venue.id} venue={venue} />
                    })
                }
            </div>
        </article>
    </div>
};

export default VenuesPage;