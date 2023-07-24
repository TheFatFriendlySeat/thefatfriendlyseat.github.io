import React from "react";

import Header from "../components/header";

import styles from "../styles/about.module.scss"
import { CityTown, Venue } from "@prisma/client";

type VenueWithCity = Venue & { cityTown: CityTown };

const SearchPage: React.FC = () => {
    // const [venues, setVenues] = React.useState([] as VenueWithCity[]);

    // React.useEffect(() => {

    //     const getVenueData = async () => {
    //         const venueData: Venue[] = await fetch('/api/venues').then(res => res.json());

    //         setVenues(venueData as VenueWithCity[]);
    //     }
        
    //     // TODO: Add error handling
    //     getVenueData().catch(err => console.log(err));
    // }, []);

    return <div>
        <Header />
        <article id={styles.about}>
            <input type="text" />
            <input type="button" value="Search" />
            <div className={styles.content}>
                content
            </div>
        </article>
    </div>
};

export default SearchPage;