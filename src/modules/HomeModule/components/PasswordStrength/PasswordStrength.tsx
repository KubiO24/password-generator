import React, { useState, useEffect } from "react";
import PasswordStrengthLevel from "./PasswordStrengthLevel";
import styles from "./PasswordStrength.module.scss";

interface IProps {
    passwordLength: number;
}

const PasswordStrength: React.FC<IProps> = ({ passwordLength }) => {
    const [level, setLevel] = useState(1);
    const [passwordSafety, setPasswordSafety] = useState("");

    useEffect(() => {
        if (passwordLength < 7) {
            setLevel(1);
            setPasswordSafety("Very low password strength");
        } else if (passwordLength < 9) {
            setLevel(2);
            setPasswordSafety("Low password strength");
        } else if (passwordLength < 11) {
            setLevel(3);
            setPasswordSafety("Average password strength");
        } else {
            setLevel(4);
            setPasswordSafety("High password strength");
        }
    }, [passwordLength]);

    return (
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <h2>Strength</h2>
                <span>{passwordSafety}</span>
            </div>

            <div className={styles.bottomContainer}>
                <PasswordStrengthLevel id={1} level={level} />
                <PasswordStrengthLevel id={2} level={level} />
                <PasswordStrengthLevel id={3} level={level} />
                <PasswordStrengthLevel id={4} level={level} />
            </div>
        </div>
    );
};

export default PasswordStrength;
