import React from "react";
import styles from "./CheckboxesContainer.module.scss";
import Checkbox from "../Checkbox/Checkbox";

interface IProps {
    includeObjectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxesContainer: React.FC<IProps> = ({ includeObjectChange }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <Checkbox onChange={includeObjectChange}>Include Uppercase Letter</Checkbox>
                <Checkbox onChange={includeObjectChange}>Include Lowercase Letter</Checkbox>
            </div>
            <div>
                <Checkbox onChange={includeObjectChange}>Include Numbers</Checkbox>
                <Checkbox onChange={includeObjectChange}>Include Symbols</Checkbox>
            </div>
        </div>
    );
};

export default CheckboxesContainer;
