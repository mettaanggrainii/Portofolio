import React, { useEffect, useState } from "react";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";


const WorkTimeline = ({ darkTheme }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const styles = darkTheme ? darkstyles : lightstyles;

    return (
        <>
            <div className={styles.timeline} data-aos="fade-down">
                <div className={styles.container + ' ' + styles.leftContainer}>
                    <div className={styles.content} data-aos="fade-down-left">
                        <h3>February 2023 - Present</h3>
                        <h1>Laboratory Assistant - Part Time</h1>
                        <h4>Bina Nusantara Management Laboratory</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Delivering engaging and interactive onsite instruction for 5 business school classes, up to 150+ students.</h4>
                            </li>
                            <li>
                                <h4>Operated IBM SPSS, Microsoft Office (Word, Excel, Powerpoint) and many essential teaching tools.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-up-right">
                        <h3>July 2023 - September 2023</h3>
                        <h1>Freshmen Leader</h1>
                        <h4>Bina Nusantara Student Development Center (SDC)</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Guided 50+ Binusian 2027 freshmen in their First Year Program to help them adapt in the campus environment.</h4>
                            </li>
                            <li>
                                <h4>Collaborated with more than another 85+ freshman leaders and served as the Master Of Ceremony (MC) during Lecturer Information.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-up-left">
                        <h3>June 2023 - July 2023</h3>
                        <h1>iOS Foundation Cohort 19</h1>
                        <h4>Apple Developer Academy - BINUS University</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Coordinated with many developers and designed the UI / UX of 'Ping Math' - a simple game that aims high schoolers to learn Mathematics in a fun way</h4>
                            </li>
                            <li>
                                <h4>Created a conceptual plan, starts from theme, interactions, and overall apperance of the application.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-up-right">
                        <h3>January 2023 - April 2023</h3>
                        <h1>Sales Agent for Product Content (February - April 2023)</h1>
                        <h1>Marketing and Project Handler (January - March 2023)</h1>
                        <h4>PT Digital Investa Indonesia</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Conducted online meetings to address diverse customer needs, and succesfully sold product content up to 50+ clients.</h4>
                            </li>
                            <li>
                                <h4>Contacted over 80 clients that who could become prospects to increase brand engagement through digital marketing</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.rightContainer}>
                    <div className={styles.content} data-aos="fade-up-left">
                        <h3>August 2022 - November 2022</h3>
                        <h1>Logistics Coordinator of Local Brand Festival</h1>
                        <h4>Bina Nusantara Business Creation Club</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Led and coordinated a logistics division consisting of 12 people to ensure the proper execution of their job descriptions.</h4>
                            </li>
                            <li>
                                <h4>Worked together and cooperated with 109 other committee members and achieved excellent results, and it turns out LBFest 2022 was better compared to previous periods</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.container + ' ' + styles.leftContainer}>
                    <div className={styles.content} data-aos="fade-down-right">
                        <h3>July 2021 - July 2023</h3>
                        <h1>Education Counselor - Part Time</h1>
                        <h4>Bina Nusantara Marketing Team</h4>
                        <hr></hr>
                        <ul>
                            <li>
                                <h4>Being part of marketing team and became the sales PIC for 20 high schools in Tangerang city.</h4>
                            </li>
                            <li>
                                <h4>Boosted team sales up to 103% compared (110 forms) to previous performance which had a total of 54 forms.</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkTimeline;