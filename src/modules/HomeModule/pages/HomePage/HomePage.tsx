import React, { useState } from "react";
import { Card } from "@/global-components";
import CharacterLength from "../../components/CharacterLength/CharacterLength";
import CheckboxesContainer from "../../components/CheckboxesContainer/CheckboxesContainer";
import styles from "./HomePage.module.scss";

type includeObjectType = {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
};

export const HomePage: React.FC = () => {
    const [characterLength, setCharacterLength] = useState<number>(6);
    const [includeObject, setIncludeObject] = useState<includeObjectType>({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const characterLengthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(includeObject);
        setCharacterLength(parseInt(e.target.value));
    };

    const includeObjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let parameterToChange = "";
        switch (e.target.id) {
            case "Include_Uppercase_Letter":
                parameterToChange = "uppercase";
                break;

            case "Include_Lowercase_Letter":
                parameterToChange = "lowercase";
                break;

            case "Include_Numbers":
                parameterToChange = "numbers";
                break;

            case "Include_Symbols":
                parameterToChange = "symbols";
                break;
        }

        setIncludeObject((prevState) => ({
            ...prevState,
            [parameterToChange]: e.target.checked,
        }));
    };

    return (
        <Card propsStyles={{ marginTop: "100px" }}>
            <h1>Password Generator</h1>
            <CharacterLength characterLength={characterLength} characterLengthChange={characterLengthChangeHandler} />
            <CheckboxesContainer includeObjectChange={includeObjectChangeHandler} />
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
