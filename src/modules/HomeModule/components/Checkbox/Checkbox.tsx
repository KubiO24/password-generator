import React from "react";
import styles from "./Checkbox.module.scss";

interface Props {
    children: string;
}

const Checkbox: React.FC<Props> = ({ children }) => {
    const id = children.replace(/ /g, "_"); // replace spaces with underscores
    return (
        <div className={styles.checkboxLine}>
            <input type="checkbox" name="include" id={id} />
            <label htmlFor={id}>{children}</label>
        </div>
    );
};

export default Checkbox;
