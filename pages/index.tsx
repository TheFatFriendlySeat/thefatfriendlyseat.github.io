import React from "react";

import Header from "../components/header";

import styles from "../styles/index.module.scss"
import MailSignup from "../components/mailSignup";
import SearchInput from "../components/searchInput";

const HomePage: React.FC = () => {
    return <div>
        <Header />
        <article id={styles.content}>
            <SearchInput onSearch={(query) => { window.location.href = `./search${query ? "?q=" + query : ""}` }}/>
            <div id={styles.mission}>
                <h3>Our mission is simple...</h3>
                <ul>
                    <li>
                        To give fat people the information they need to access the arts in ways that do not damage their bodies.
                    </li>
                    <hr />
                    <li>
                        To empower fat people to ask the venues they use to add fat accessibility information to their websites.
                    </li>
                    <hr />
                    <li>
                        To encourage venues to consider fat accessibility, and how they can accommodate fat bodies.
                    </li>
                </ul>
            </div>
            <p>
                Want to help us achieve our mission?
                <br/><br/>
                Have a look at the <a href="./involved">Get Involved Page</a> to see how you can help,
                <br/>
                Subscribe to the newsletter above or follow us on <a href="https://www.instagram.com/thefatfriendlyseat/" target="_blank" rel="noopener noreferrer">Instagram</a> to keep up to date with our progress.
            </p>
            <MailSignup />
        </article>
    </div>
};

export default HomePage;