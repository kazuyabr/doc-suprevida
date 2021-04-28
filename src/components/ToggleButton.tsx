import React, { InputHTMLAttributes } from "react";

import styles from "../styles/components/ToggleButton.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Toggle: React.FC<InputProps> = (props) => (
  <label className={styles.switch}>
    <input type="checkbox" {...props}></input>
    <span className={styles.slider}></span>
  </label>
);
