import React from "react";
import styles from "./CharacterLength.module.scss";

interface IProps {
    characterLength: number;
    characterLengthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CharacterLength: React.FC<IProps> = ({ characterLength, characterLengthChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.label_container}>
                <h2>Character Length</h2>
                <h2 className={styles.character_count_label}>{characterLength}</h2>
            </div>
            <input
                type="range"
                name="characterLength"
                id="characterLength"
                min={4}
                max={16}
                value={characterLength}
                onChange={characterLengthChange}
            />
        </div>
    );
};
