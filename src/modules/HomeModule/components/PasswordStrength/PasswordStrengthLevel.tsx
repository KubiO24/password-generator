import React, { useState, useEffect } from "react";
import styles from "./PasswordStrengthLevel.module.scss";

interface IProps {
    id: number;
    level: number;
}

const PasswordStrengthLevel: React.FC<IProps> = ({ id, level }) => {
    const [color, setColor] = useState(styles.none);

    useEffect(() => {
        if (id > level) {
            setColor(styles.none);
            return;
        }

        if (level === 1 || level === 2) {
            setColor(styles.red);
        } else if (level === 3) {
            setColor(styles.yellow);
        } else if (level === 4) {
            setColor(styles.green);
        }
    }, [id, level]);

    return <div className={`${styles.level} ${color}`} />;
};

export default PasswordStrengthLevel;
