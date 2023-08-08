import React from "react";

import Header from "../components/header";

import VenueCard, { VenueWithCity } from "../components/venueCard";

import styles from "../styles/search.module.scss"


const SearchPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [venueData, setVenueData] = React.useState([] as VenueWithCity[]);
    const [searching, setSearching] = React.useState(false);
    const [hasSearched, setHasSearched] = React.useState(false);

    const onChange = (e: React.ChangeEvent) => {
        setSearchTerm((e.target as HTMLInputElement).value);
    };

    const onClick = () => {
        setSearching(true);
        const searchVenue = async () => {
            const venueData: VenueWithCity[] = await fetch(`api/search?q=${searchTerm.toLowerCase()}`).then(res => res.json());
            setVenueData(venueData);
            setHasSearched(true);
            setSearching(false);
        }
        searchVenue().catch(err => console.log(err));
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    return <div>
        <Header />
        <article id={styles.search}>
            <input className={styles.searchInput} type="text" autoComplete="on" placeholder="Venue or City" onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} />
            <input className={styles.btn} type="button" value="Search" onClick={() => onClick()}/>
            <div className={styles.content}>
                {searching && <p>Searching...</p>}
                {!searching && hasSearched && venueData.length === 0 && <><p>No results found.</p><p>Find out how to get a venue added <a href="./involved">here</a></p></>}
                {venueData.map((venue) => {
                    return <VenueCard key={venue.id} venue={venue} />
                    })
                }
            </div>
        </article>
    </div>
};

export default SearchPage;