import React from "react";

import Header from "../../components/header";

import styles from "../../styles/about.module.scss"
import { useRouter } from "next/router";
import { CityTown, Venue } from "@prisma/client";

type CityTownWithVenues = CityTown & { venues: Venue[] };

const CityPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const [city, setCity] = React.useState({} as CityTownWithVenues);

    React.useEffect(() => {
        const getCityData = async () => {
            const cityData: CityTownWithVenues = await fetch(`/api/city/${id}`).then(res => res.json());
            setCity(cityData as CityTownWithVenues);
        }
        
        if (id !== undefined) {
            getCityData().catch(err => console.log(err));
        }
    }, [id]);

    return <div>
        <Header />
        <article id={styles.about}>
            <div className={styles.content}>
                <h2>{city.name}</h2>
                <p>{city.countyName}</p>
            </div>
        </article>
    </div>
};

export default CityPage;