import React from "react";
import styles from "./CheckboxesContainer.module.scss";
import Checkbox from "../Checkbox/Checkbox";

type optionsType = {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
};

interface IProps {
    options: optionsType;
    optionsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxesContainer: React.FC<IProps> = ({ options, optionsChange }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <Checkbox name="uppercase" checked={options.uppercase} onChange={optionsChange}>
                    Include Uppercase Letter
                </Checkbox>
                <Checkbox name="lowercase" checked={options.lowercase} onChange={optionsChange}>
                    Include Lowercase Letter
                </Checkbox>
            </div>
            <div>
                <Checkbox name="numbers" checked={options.numbers} onChange={optionsChange}>
                    Include Numbers
                </Checkbox>
                <Checkbox name="symbols" checked={options.symbols} onChange={optionsChange}>
                    Include Symbols
                </Checkbox>
            </div>
        </div>
    );
};

export default CheckboxesContainer;
