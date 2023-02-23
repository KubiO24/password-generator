import React from "react";
import styles from "./PasswordBox.module.scss";
import RefreshSvg from "@/assets/images/refresh.svg";

interface IProps {
    password: string;
    refreshPassword: React.MouseEventHandler<HTMLImageElement>;
}

const PasswordBox: React.FC<IProps> = ({ password, refreshPassword }) => {
    return (
        <div className={styles.passwordContainer}>
            <span>{password}</span>
            <img src={RefreshSvg} alt="asd" onClick={refreshPassword} />
        </div>
    );
};

export default PasswordBox;
