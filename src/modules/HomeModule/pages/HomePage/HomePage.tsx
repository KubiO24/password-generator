import React, { useState } from "react";
import styles from "./HomePage.module.scss";
import { Card } from "@/global-components";

export const HomePage: React.FC = () => {
    const [characterLength, setCharacterLength] = useState<number>(6);

    return (
        <Card>
            <h1>Helo</h1>
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
