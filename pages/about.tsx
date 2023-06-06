import React from "react";

import Header from "../components/header";

import styles from "../styles/about.module.scss"

const AboutPage: React.FC = () => {
    return <div>
        <Header />
        <article id={styles.about}>
            <div className={styles.content}>
                <img src="./jenny_avatar.jpeg" />
                <p>
                    I would love to say that the idea behind 'The Fat Friendly Seat' and the campaign were solely my brainchild. In reality though I've been to see Sofie Hagen (Comedian and Author of Happy Fat) on numerous occasions and I saw that for a previous tour they had demanded fat access information was added to the accessibility information for the booked venues. That filled me with such joy, they couldn't make the seats accessible, but they empowered fat people to make a decision on their own accessibility requirements.
                </p>
                <p>
                    I figured someone had to pick up the baton and carry on the good work, so I mulled it over for a number of months until I went to the O2 Arena on two consecutive nights. That weekend I discovered that not all seats are made equal and that the ones on the upper sections were significantly smaller, so much smaller that I had bruises on my thighs for weeks post the concert.  I figured that whatever your view on fat bodies, the very least we deserve is the information to be able to make informed choices about accessing arts venues.
                </p>
                <p>
                    In reality we deserve accessible seating in all arts venues, but knowledge is at least power, and I accept them ripping out their seats seems unlikely. However most venues do have alternative options and they just aren't advertised.
                </p>
                <p>
                    That's why I'm seeking to ask arts venues (as well as other venues!) to do the bare minimum - give us the seat widths, tell us if the arm rests move and tell us what else is on offer if the seating isn't accessible. To me this isn't a big task (although I've been waiting on the O2 to respond to me on this for months!).
                </p>
                <p>
                    You can find my personal page over on <a href="https://www.instagram.com/jennys_fat_and_happy_life/" target="_blank" rel="noopener noreferrer">Instagram</a>.
                    And if you want to buy me a cup of coffee (in reality this will go towards the upkeep of this site), you can do so here:
                </p>

                <iframe id='kofiframe' src='https://ko-fi.com/thefatfriendlyseat/?hidefeed=true&widget=true&embed=true&preview=true' width='300' height='680' title='thefatfriendlyseat'></iframe>
            </div>
        </article>
    </div>
};

export default AboutPage;