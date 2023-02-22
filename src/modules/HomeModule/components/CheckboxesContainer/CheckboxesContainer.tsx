import React from "react";
import styles from "./CheckboxesContainer.module.scss";
import Checkbox from "../Checkbox/Checkbox";

const CheckboxesContainer: React.FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <Checkbox>Include Uppercase Letter</Checkbox>
                <Checkbox>Include Lowercase Letter</Checkbox>
            </div>
            <div>
                <Checkbox>Include Numbers</Checkbox>
                <Checkbox>Include Symbols</Checkbox>
            </div>
        </div>
    );
};

export default CheckboxesContainer;
