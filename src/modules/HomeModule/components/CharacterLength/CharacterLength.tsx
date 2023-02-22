import React from "react";
import styles from "./CharacterLength.module.scss";

interface IProps {
    passwordLength: number;
    characterLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CharacterLength: React.FC<IProps> = ({ passwordLength, characterLengthChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.label_container}>
                <h2>Character Length</h2>
                <h2 className={styles.character_count_label}>{passwordLength}</h2>
            </div>
            <input
                type="range"
                name="characterLength"
                id="characterLength"
                min={4}
                max={16}
                value={passwordLength}
                onChange={characterLengthChange}
            />
        </div>
    );
};

export default CharacterLength;
