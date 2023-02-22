import React from "react";
import styles from "./Checkbox.module.scss";

interface IProps {
    children: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<IProps> = ({ children, name, checked, onChange }) => {
    return (
        <div className={styles.checkboxLine}>
            <input type="checkbox" name="include" id={name} onChange={onChange} checked={checked} />
            <label htmlFor={name}>{children}</label>
        </div>
    );
};

export default Checkbox;
