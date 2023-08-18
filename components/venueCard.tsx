import React from "react";

import styles from "../styles/components/venueCard.module.scss";
import { CityTown, Venue } from "@prisma/client";

export type VenueWithCity = Venue & { cityTown: CityTown };

interface IProps {
    venue: VenueWithCity
}

const VenueCard: React.FC<IProps> = (props: IProps) => {
    const [expanded, setExpanded] = React.useState(false);

    const toggle = () => {
        setExpanded(!expanded);
    };

    const cardClassNames = [
        styles.card,
        expanded ? styles.expanded : ""
    ];

    return <div className={cardClassNames.join(" ")}>
        <div className={styles.header} onClick={toggle}>
            <h2>{props.venue.name} - {props.venue.cityTown.name}</h2>
            <h4>{props.venue.status}</h4>
        </div>
        <div className={styles.content} style={{ display: expanded ? "block" : "none", padding: "5px" }}>
            <p>{props.venue.cityTown.name} - {props.venue.countyName}</p>
            <p><a href={props.venue.website}>{props.venue.website}</a></p>
            <p>{props.venue.notes}</p>
        </div>
        <hr />
    </div>
}

export default VenueCard;