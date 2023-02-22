import React, { useState } from "react";
import { Card } from "@/global-components";
import CharacterLength from "../../components/CharacterLength/CharacterLength";
import CheckboxesContainer from "../../components/CheckboxesContainer/CheckboxesContainer";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
    const [characterLength, setCharacterLength] = useState<number>(6);

    const characterLengthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterLength(parseInt(e.target.value));
    };

    return (
        <Card propsStyles={{ marginTop: "100px" }}>
            <h1>Password Generator</h1>
            <CharacterLength characterLength={characterLength} characterLengthChange={characterLengthChangeHandler} />
            <CheckboxesContainer />
            <div>
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
