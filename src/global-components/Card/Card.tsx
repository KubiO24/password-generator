import React from "react";
import styles from "./Card.module.scss";

interface Props {
    children: JSX.Element | JSX.Element[];
    propsStyles: React.CSSProperties;
}

export const Card: React.FC<Props> = ({ children, propsStyles }) => {
    return (
        <div className={styles.card} style={propsStyles}>
            {children}
        </div>
    );
};
