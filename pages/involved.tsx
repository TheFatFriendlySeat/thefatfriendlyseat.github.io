import React from "react";

import Header from "../components/header";

import styles from "../styles/involved.module.scss"

const InvolvedPage: React.FC = () => {
    return <div>
        <Header />
        <article className={styles.involved}>
            <h3>
                How Can I Get Involved?
            </h3>
            <div className={styles.content}>
                <p>
                    When you subscribe to The Fat Friendly Seat (for free!) - you'll receive:
                </p>
                <ol>
                    <li>
                        Template emails that you can use to contact your local venues including a follow up email.
                    </li>
                    <li>
                        Weekly update emails with information about the campaign and its successes.
                    </li>
                    <li>
                        Access to the listing of venues and their accessibility information if provided. Eventually this will appear as a publicly accessible listing on this website, but websites take time to build!
                    </li>
                </ol>
                
                <p>
                    All we ask is that you take 5 minutes to email your local arts venues - theatres/cinemas/music venues using the template provided, copying in <a href="mailto: info@TheFatFriendlySeat.co.uk">Info@TheFatFriendlySeat.co.uk</a>. We'll update the listing with your venue, and the information that they provide.
                </p>
                <p>
                    The more venues we contact, the more venues we'll get responding, the more the bigger players will listen to us!  
                    You can unsubscribe from communication at any time by selecting the link in the email, or contacting us.
                </p>
            </div>

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
        </article>
        <article className={styles.involved}>
            <h3>I'm a venue how can I help</h3>
            <div className={styles.content}>
                <p>
                    Are you an arts venue, music venue or theatre? Or in fact anywhere a fat person might want to take a seat? Then this is the page for you. Below you can find the information we're looking to collate, as well as how you can make things more accessible for fat people.
                </p>
                <p>
                    The first step is to update your website with accessibility information:
                </p>
                <ol>
                    <li>The seat dimensions, width and depth.</li>
                    <li>Whether the seats have arm rests, and if they do, whether those arm rests move.</li>
                    <li>Which seats don't have neighboring seats.</li>
                    <li>Any seating which might be more accessible and information on how these can be booked.</li>
                </ol>
                
                <p>
                    If it's possible to provide images of seating options or update your booking systems to reflect fat accessible seats, then that would be an incredible step towards making all bodies safe in your venues.
                    Once you've added the information to your policy it would be great if you could contact us so we can update our records.
                </p>
                <p>
                    Secondly, take a look at how you can make your venue/business more accessible:
                </p>
                <ul>
                    <li>Can you provide wider seating options?</li>
                    <li>Can you remove or mark arm rests as moveable?</li>
                    <li>If your seating is free standing, can you have a variety available?</li>
                    <li>If you have booths, or seating without moveable arm rests - can you make this available on your seat selector or booking functionality?</li>
                    <li>Check your toilet cubicles - is there room between the door opening and the toilet? Is there plenty of room or do sanitary bins or toilet roll holders make the width unusable?</li>
                    <li>Think about movement around your business, are the walkways wide enough to accommodate people passing?</li>
                    <li>Make sure your staff are trained to spot where issues may arise - consider whether the table/seating offered is appropriate for your customers. Train them in how to respond to requests for more accessible seating solutions.</li>
                </ul>
                <p>
                    If you have any questions about making your venue more accessible, please contact us as <a href="mailto: info@thefatfriendlyseat.co.uk">Info@TheFatFriendlySeat.co.uk</a>.
                </p>

            </div>
        </article>
    </div>
};

export default InvolvedPage;