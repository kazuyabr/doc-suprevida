import React from "react";
import { InputHTMLAttributes } from "react";

import styles from "../styles/components/Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input: React.FC<InputProps> = (props) => (
  <input
    type="text"
    {...props}
    className={styles.input}
    style={{ width: props.width }}
  />
);
