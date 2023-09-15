import React, { useEffect, useState } from "react";
import lightstyles from "../styles/light.module.scss";
import darkstyles from "../styles/dark.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillGithub, AiOutlineFullscreen } from "react-icons/ai";

const ProjectCard = ({ project, darkTheme, setDarkTheme }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const styles = darkTheme ? darkstyles : lightstyles;

    const [isProjectHovered, setIsProjectHovered] = useState(false);

    return (
        <>
            <div className={styles.projectBox} key={project} data-aos="zoom-in-down"
                onMouseEnter={() => setIsProjectHovered(true)}
                onMouseLeave={() => setIsProjectHovered(false)}>
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
                    <div className={styles.overlay} onClick={() => setIsProjectHovered(true)}>
                        <div>
                            <AiOutlineFullscreen style={{ width: '50px', height: '50px', color: 'white' }} />
                        </div>
                        <div>
                            <h4 className={styles.text}>Click to see more details!</h4>
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}

export default ProjectCard;