import React, { useEffect, useState } from "react";
import styles from "../styles/light.module.scss";

const Preloader = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <div className={`${styles.preloader} ${isVisible ? styles.visible : styles.hidden}`}>
                    <div className={styles.textContainer}>
                        <span>Focus,</span>
                        <span>Learn,</span>
                        <span>Adapt.</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default Preloader