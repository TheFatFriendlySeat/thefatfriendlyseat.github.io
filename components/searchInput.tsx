import React from "react";

import styles from "../styles/components/searchInput.module.scss";

interface IProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchInput: React.FC<IProps> = (props: IProps) => {
    const [searchTerm, setSearchTerm] = React.useState("");

    const onChange = (e: React.ChangeEvent) => {
        setSearchTerm((e.target as HTMLInputElement).value);
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            props.onSearch(searchTerm);
        }
    };

    return <>
        <input className={styles.searchInput} type="text" autoComplete="on" placeholder={props.placeholder ?? "Venue or City"} onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} />
        <input className={styles.btn} type="button" value="Search" onClick={() => props.onSearch(searchTerm)}/>
    </>
}

export default SearchInput;