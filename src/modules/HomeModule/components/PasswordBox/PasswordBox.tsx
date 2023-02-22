import React from "react";
import styles from "./PasswordBox.module.scss";
import Checkbox from "../Checkbox/Checkbox";

interface IProps {
    password: string;
}

const PasswordBox: React.FC<IProps> = ({ password }) => {
    return <div className={styles.passwordContainer}>{password}</div>;
};

export default PasswordBox;
