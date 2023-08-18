import React from "react";

import styles from "../styles/components/mailSignup.module.scss";

const MailSignup: React.FC = () => {
    return <>
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
        </>
}

export default MailSignup;