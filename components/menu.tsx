import React, { useRef, useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";

import styles from "../styles/menu.module.scss";

const Menu: React.FC = () => {
    const menuRef = useRef<HTMLUListElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        const menu = menuRef.current;
        menu?.classList.toggle(styles.is_open);
    }

    return <div>
        <ul className={styles.menu} ref={menuRef}>
            <li className={styles.menuItem}><a href="./">Home</a></li>
            <li className={styles.menuItem}><a href="./about">About</a></li>
            <li className={styles.menuItem}><a href="./involved">Get Involved</a></li>
            <li className={styles.menuItem}><a href="./privacy">Privacy Policy</a></li>
        </ul>
        <button className={styles.hamburger} onClick={toggleMenu}>
            { !menuOpen && <GoThreeBars className={styles.menuIcon}/> }
            { menuOpen && <GoX className={styles.closeIcon}/> }
        </button>
    </div>
}

export default Menu;