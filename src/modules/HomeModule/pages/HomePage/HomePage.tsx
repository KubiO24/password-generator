import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import { Card } from "@/global-components";
import { CharacterLength } from "../../components/CharacterLength/CharacterLength";

export const HomePage: React.FC = () => {
    const [characterLength, setCharacterLength] = useState<number>(6);

    const characterLengthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterLength(parseInt(e.target.value));
    };

    return (
        <Card>
            <h1>Password Generator</h1>
            <CharacterLength characterLength={characterLength} characterLengthChange={characterLengthChangeHandler} />
            <div className={styles.card}>
                <p>See the README.md for more information on how to start your challenge.</p>
                <button
                    onClick={() => {
                        setCharacterLength((characterLength) => characterLength + 1);
                    }}
                >
                    count is {characterLength}
                </button>
            </div>
        </Card>
    );
};
