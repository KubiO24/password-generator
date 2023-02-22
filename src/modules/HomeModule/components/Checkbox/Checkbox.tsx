import React from "react";
import styles from "./Checkbox.module.scss";

interface IProps {
    children: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({ children, onChange }) => {
    const id = children.replace(/ /g, "_"); // replace spaces with underscores
    return (
        <div className={styles.checkboxLine}>
            <input type="checkbox" name="include" id={id} onChange={onChange} />
            <label htmlFor={id}>{children}</label>
        </div>
    );
};

export default Checkbox;
