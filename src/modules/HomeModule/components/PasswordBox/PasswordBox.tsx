import React, { useState, useEffect } from "react";
import styles from "./PasswordBox.module.scss";
import RefreshSvg from "@/assets/images/refresh.svg";

interface IProps {
    password: string;
    generatePassword: () => void;
}

const PasswordBox: React.FC<IProps> = ({ password, generatePassword }) => {
    const [animationRunning, setAnimationRunning] = useState(false);

    const buttonClickHandler = () => {
        setAnimationRunning(true);
        generatePassword();
    };

    useEffect(() => {
        if (!animationRunning) return;

        const animationEnd = setTimeout(() => {
            setAnimationRunning(false);
        }, 200);

        return () => {
            clearTimeout(animationEnd);
        };
    }, [animationRunning]);

    return (
        <div className={styles.passwordContainer}>
            <span>{password}</span>
            <img
                className={animationRunning ? styles.animationRunning : undefined}
                src={RefreshSvg}
                alt="refresh"
                onClick={buttonClickHandler}
            />
        </div>
    );
};

export default PasswordBox;
