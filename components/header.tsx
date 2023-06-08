import React from "react";

import Menu from "./menu";
import Logo from "./logo";

import { BsInstagram } from "react-icons/bs";

import styles from "../styles/header.module.scss";

const Header: React.FC = () => {
    return <header id={styles.header}>
    <Logo />
    <Menu />
    <div className={styles.instagram}>
        <a href="https://www.instagram.com/thefatfriendlyseat" target="_blank" rel="noopener noreferrer">TheFatFriendlySeat <BsInstagram /></a>
    </div>
</header>
}

export default Header;