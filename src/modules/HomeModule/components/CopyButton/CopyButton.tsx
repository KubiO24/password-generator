import React from "react";
import styles from "./CopyButton.module.scss";
import CopySvg from "@/assets/images/copy.svg";

interface IProps {
    password: string;
}

const CopyButton: React.FC<IProps> = ({ password }) => {
    const buttonClickHandler = () => {
        navigator.clipboard.writeText(password);
    };

    return (
        <button className={styles.button} onClick={buttonClickHandler}>
            <img src={CopySvg} alt="copy" />
            Copy Password
        </button>
    );
};

export default CopyButton;
