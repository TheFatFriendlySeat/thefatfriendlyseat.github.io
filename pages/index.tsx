import React from "react";

import Header from "../components/header";

import styles from "../styles/index.module.scss"

const HomePage: React.FC = () => {
    return <div>
        <Header />
        <article id={styles.content}>
            <div id="mc_embed_signup" className={styles.mc_embed_signup}>
                <form action="https://hotmail.us12.list-manage.com/subscribe/post?u=54398dc7ffab9924fc728df1e&amp;id=83cdd63ce2&amp;f_id=00ca42e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate={true}>
                    <div id="mc_embed_signup_scroll" className="form-group">
                        <div className="mc-field-group">
                            <input type="email" placeholder="Email" name="EMAIL" className={`required email form-control mce_inline_error ${styles.emailForm}`} id="mce-EMAIL" required={true} aria-required="true" aria-invalid="true"/>
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                        </div>
                        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                            <input type="text" name="b_54398dc7ffab9924fc728df1e_83cdd63ce2" tabIndex={-1}/>
                        </div>
                        <div className="clear foot">
                        <input type="submit" value="Subscribe to get involved" name="subscribe" id="mc-embedded-subscribe" className={styles.btn}/>
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                        </div>
                    </div>
                </form>
            </div>
            <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
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
        </article>
    </div>
};

export default HomePage;