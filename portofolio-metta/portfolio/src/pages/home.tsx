import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import ProjectCard from "../components/projectcard";
import Timeline from "../components/worktimeline";
import IntroText from "../components/introtext";
import Aos from "aos";
import "aos/dist/aos.css";
import EduTimeline from "../components/edutimeline";
import WorkTimeline from "../components/worktimeline";
import Certificates from "../components/certificate";
import { AiFillInstagram, AiFillLinkedin, AiOutlineClose, AiOutlineCloseCircle, AiOutlineFullscreen, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { MdNavigateNext, MdNavigateBefore, MdEmail } from "react-icons/md";
import ParticleBackground from "../components/particles";
import AnimatedPage from "../components/transition";
import { Document, Page } from 'react-pdf';
import { useNavigate } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 700 });
    }, []);

    const [activeSection, setActiveSection] = useState('home');
    const portfolioRef = useRef(null); // Create a ref for the portfolio section
    // Add refs for other sections if needed

    const scrollToSection = (sectionRef) => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const savedTheme = localStorage.getItem('darkTheme');
    const [darkTheme, setDarkTheme] = useState(savedTheme === 'dark');

    const [userDataGithub, setUserDataGithub] = useState([]);
    const [repoData, setRepoData] = useState([]);

    const [mode, setMode] = useState("");

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', event => {
                const colorScheme = event.matches ? "dark" : "light";
                console.log(colorScheme); // "dark" or "light"
                setMode(colorScheme);
            });
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode("dark");
        }
        else {
            setMode("light");
        }

    }, []);

    console.log(mode);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/wilbertcoandsss')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUserDataGithub(data);
    //         });

    //     fetch('https://api.github.com/users/wilbertcoandsss/repos')
    //         .then(res => res.json())
    //         .then(data => {
    //             setRepoData(data);
    //         });
    // }, []);

    useEffect(() => {
        localStorage.setItem('darkTheme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

    const styles = darkTheme ? darkstyles : lightstyles;

    useEffect(() => {
        localStorage.setItem('darkTheme', darkTheme ? 'dark' : 'light');
    }, [darkTheme]);

    if (darkTheme) {
        document.querySelector("body")?.setAttribute('data-theme', 'dark');
    }
    else {
        document.querySelector("body")?.setAttribute('data-theme', 'light');
    }

    const projects = [
        {
            name: "Marketing Team of BINUS University",
            description: "Sell Registration Forms to new Students that wants to continue their studies in BINUS University",
            genres: ['marketing', 'education counselor', 'communication'],
            pdf: "Portofolio1.pdf"
        },
        {
            name: "Business Statistics II and Managing Business Information (LAB)",
            description: "Provide and teaching materials to various business students and accompany them during learning process in class.",
            genres: ['teaching', 'lab-assistant', 'public speaking'],
            pdf: "Portofolio2.pdf"
        },
        {
            name: "PingMath",
            description: "An interactive swift-based application to teaching Math in unique way, in order of responbility tasks of iOS Foundation Program by Apple Developer Academy.",
            genres: ['swift', 'design', 'figma'],
            pdf: "Portofolio3.pdf"
        },
        {
            name: "Mentor Scholarship",
            description: "Becoming a mentor who responsibles of my mentees. Held an online or offline meetings, and facilitate my mentees in teaching and learning process.",
            genres: ['public speaking', 'mentoring', 'scholarship'],
            pdf: "Portofolio4.pdf"
        },
        {
            name: "Local Brand Festival 2022",
            description: "Became the logistics coordinator to manage and prepare for the biggest business event in BINUS Univerisity.",
            genres: ['festival', 'teamwork', 'communication'],
            pdf: "Portofolio5.pdf"
        },
        {
            name: "Marketing Team for PT Digital Investa",
            description: "Sell the company's products to clients directly and provide consulting related to brand needs.",
            genres: ['marketing', 'sales agent', 'business'],
            pdf: "Portofolio6.pdf"
        },
        {
            name: "Dashboard Google Data Studio",
            description: "Being an team leader who coordinated 7 team members to creating dashboards, starts fro data collection , design, and analyzing the company data.",
            genres: ['analyze', 'google data studio', 'project planning'],
            pdf: "Portofolio8.pdf"
        },
        // {
        //     name: "Spoon and Fork Goods",
        //     description: "Leading an Instagram takeover for micro, small, and medium enterprises (MSMEs) called Spoon and Fork that offers various type of merchandise..",
        //     genres: ['project planning', 'social medias specialist', 'content planning'],
        //     pdf: "Portofolio9.pdf"
        // },
    ];

    const [isProjectHovered, setIsProjectHovered] = useState(false);
    const imageFilenames = [
        'aslab1.jpg',
        // 'aslab2.jpg',
        'BCLD.jpg',
        'dicoding.jpg',
        'Shopee.jpg'
    ];

    const [selectedProject, setSelectedProject] = useState("");
    const [isFullScreen, setIsFullscreen] = useState(false);
    const [clickedFilename, setClickedFilename] = useState("");

    const navigate = useNavigate();

    return (
        <div data-aos="fade-down" data-aos-duration="2000">
            <div>
                <AnimatedPage>
                    <ParticleBackground darkTheme={darkTheme} />

                    {/* {isProjectHovered && (
                        <>
                            <div className={`${styles.overlayFullscreen} ${styles.hideOverflow}`} data-aos="fade-up">
                                <div>
                                    <AiOutlineCloseCircle className={styles.closeBtn} onClick={() => setIsProjectHovered(!isProjectHovered)} />
                                    <h1>{selectedProject}</h1>
                                </div>
                                <div style={{ width: '65%', height: '18%', display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
                                    <iframe
                                        src={`/portfolio/${selectedProject}`}
                                        // frameBorder="0"
                                        // scrolling="auto"
                                        height="60%"
                                        width="100%"
                                    ></iframe>
                                    <h1>SUICI</h1>
                                </div>
                            </div >
                        </>
                    )} */}

                    <div >
                        <div className={styles.mainContainer}>
                            <div className={styles.main}>
                                {/* Intro Section */}
                                <section id='home'>
                                    {/* <Navbar darkTheme={darkTheme} se    tDarkTheme={setDarkTheme} /> */}
                                    <div className={styles.profileIntro}>
                                        <div>
                                            <h1>Metta Anggraini</h1>
                                            <h2 style={{ fontSize: '35px' }}>International Business Management Students</h2>
                                            {/* <IntroText /> */}
                                            <h4 style={{ fontSize: '25px' }}>(Extra) ordinary students.</h4>
                                            <div className={styles.socMedContainer}>
                                                <a href="https://www.instagram.com/mettaanggraini_/" target="blank">
                                                    <AiFillInstagram />
                                                </a>
                                                <a href="https://www.linkedin.com/in/metta-anggraini/" target="blank">
                                                    <AiFillLinkedin />
                                                </a>
                                                <a href="mailto:mettaanggraini61@gmail.com?subject=Email%20Subject&body=Email%20Body" target="blank">
                                                    <MdEmail />
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <img className={styles.profilePic} src="/pp.jpeg"></img>
                                        </div>
                                    </div>
                                </section>
                                {/* Educiation Timeline */}
                                <br></br>
                                <section id='resume'>
                                    <div className={styles.resume}>
                                        <h1>Experiences</h1>
                                        <br></br>
                                        <h1>Work and Organizational Experience</h1>
                                        <hr></hr>
                                        <br></br>
                                        <WorkTimeline darkTheme={darkTheme} />
                                        <h1>Education</h1>
                                        <hr></hr>
                                        <br></br>
                                        <EduTimeline darkTheme={darkTheme} />
                                    </div>
                                </section>
                                {/* Portfolio Coding Section */}
                                <section id='portfolio'>
                                    <div className={styles.porto}>
                                        <h1 style={{ fontSize: '40px' }}>My Recent Works</h1>
                                        <hr></hr>
                                        <div className={styles.projectContainer}>
                                            {projects.map((project, index) => (
                                                // <ProjectCard project={project} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                                                <div className={styles.projectBox} data-aos="zoom-in-down"
                                                >
                                                    <>
                                                        <br />
                                                        <h1>{project.name}</h1>
                                                        <h4>{project.description}</h4>
                                                        <div className={styles.rowContainerPorto}>
                                                            {project.genres.map((genre, genreIndex) => (
                                                                <div className={styles.genreBox2} key={genreIndex}>
                                                                    {genre}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <a className={styles.overlay} href={`/portfolio/${project.pdf}`} target="blank">
                                                            <div>
                                                                <AiOutlineFullscreen style={{ width: '50px', height: '50px', color: 'white' }} />
                                                            </div>
                                                            <div>
                                                                <h4 className={styles.text}>Click to see more details!</h4>
                                                            </div>
                                                        </a>
                                                    </>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <br></br>
                                <br></br>


                            </div >
                        </div >
                    </div>
                </AnimatedPage >
            </div >
        </div >
    )
}

export default Home