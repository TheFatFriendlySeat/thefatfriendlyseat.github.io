import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation"

import Header from "../components/header";

import VenueCard, { VenueWithCity } from "../components/venueCard";

import styles from "../styles/search.module.scss"
import SearchInput from "../components/searchInput";

const SearchPage: React.FC = () => {
    const [venueData, setVenueData] = React.useState([] as VenueWithCity[]);
    const [searching, setSearching] = React.useState(false);
    const [hasSearched, setHasSearched] = React.useState(false);

    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.has("q")) {
            const searchTerm = searchParams.get("q") || "";

            onSearch(searchTerm);
        }
    }, [searchParams]);

    const onSearch = (searchTerm: string) => {
        setSearching(true);
        const searchVenue = async () => {
            const venueData: VenueWithCity[] = await fetch(`api/search?q=${searchTerm.toLowerCase()}`).then(res => res.json());
            setVenueData(venueData);
            setHasSearched(true);
            setSearching(false);
        }
        searchVenue().catch(err => console.log(err));
    };

    return <div>
        <Header />
        <article id={styles.search}>
            <SearchInput placeholder={searchParams.get("q") || undefined} onSearch={(query) => window.location.replace(`./search?q=${query}`)}/>
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