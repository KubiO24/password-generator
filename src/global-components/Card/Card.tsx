import React from "react";
import styles from "./Card.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Card: React.FC<Props> = ({ children }) => {
    return <div className={styles.card}>{children}</div>;
};
