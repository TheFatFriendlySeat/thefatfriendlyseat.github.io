import React, { useEffect, useRef, useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";

import styles from "../styles/menu.module.scss";

const Menu: React.FC = () => {
    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        const menu = menuRef.current;
        menu?.classList.toggle(styles.is_open);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            !menuRef.current?.contains((event as any).target) &&
            !buttonRef.current?.contains((event as any).target) &&
            menuOpen
            ) {
                toggleMenu();
          }
        };

        if (menuOpen) {
            document.addEventListener('click', handleClickOutside, true);
        } else {
            document.removeEventListener('click', handleClickOutside, true);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
      }, [menuRef, buttonRef, menuOpen]);

    return <div>
        <ul className={styles.menu} ref={menuRef}>
            <li className={styles.menuItem}><a href="./">Home</a></li>
            <li className={styles.menuItem}><a href="./about">About</a></li>
            <li className={styles.menuItem}><a href="./involved">Get Involved</a></li>
            <li className={styles.menuItem}><a href="./privacy">Privacy Policy</a></li>
        </ul>
        <button ref={buttonRef} className={styles.hamburger} onClick={toggleMenu}>
            { !menuOpen && <GoThreeBars className={styles.menuIcon}/> }
            { menuOpen && <GoX className={styles.closeIcon}/> }
        </button>
    </div>
}

export default Menu;