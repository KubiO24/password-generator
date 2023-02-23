import React, { useState, useEffect } from "react";
import { Card } from "@/global-components";
import CharacterLength from "../../components/CharacterLength/CharacterLength";
import CheckboxesContainer from "../../components/CheckboxesContainer/CheckboxesContainer";
import PasswordBox from "../../components/PasswordBox/PasswordBox";
import CopyButton from "../../components/CopyButton/CopyButton";
// import styles from "./HomePage.module.scss";

type optionsType = {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
};

export const HomePage: React.FC = () => {
    const [password, setPassword] = useState<string>("");
    const [passwordLength, setPasswordLength] = useState<number>(6);
    const [options, setOptions] = useState<optionsType>({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });

    useEffect(() => {
        generatePassword();
    }, [passwordLength, options]);

    const generatePassword = () => {
        let newPassword = "";
        const charactersOptions: Record<string, string> = {
            lowercase: "abcdefghijklmnopqrstuvwxyz",
            uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            numbers: "01234566789",
            symbols: "!@#$%^&*",
        };

        const checkedOptions = Object.entries(options).filter(([key, value]) => value === true);
        const checkedValues = checkedOptions.map((obj) => obj[0]);

        for (let i = 0; i < passwordLength; i++) {
            const drawnOption = checkedValues[Math.floor(Math.random() * checkedValues.length)];
            const drawnCharacters = charactersOptions[drawnOption];
            const drawnCharacter = drawnCharacters[Math.floor(Math.random() * drawnCharacters.length)];

            newPassword += drawnCharacter;
        }
        setPassword(newPassword);
    };

    const passwordLengthChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordLength(parseInt(e.target.value));
    };

    const optionsChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkedOptions = Object.entries(options).filter(([key, value]) => value === true);
        if (checkedOptions.length == 1 && !e.target.checked) return;

        setOptions((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.checked,
        }));
    };

    return (
        <Card propsStyles={{ marginTop: "100px" }}>
            <h1>Password Generator</h1>

            <CharacterLength passwordLength={passwordLength} characterLengthChange={passwordLengthChangeHandler} />

            <CheckboxesContainer options={options} optionsChange={optionsChangeHandler} />

            <PasswordBox password={password} refreshPassword={generatePassword} />
            
            <CopyButton password={password} />
        </Card>
    );
};
