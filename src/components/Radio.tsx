import React, { InputHTMLAttributes } from "react";

import styles from "../styles/components/Radio.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

export const Radio: React.FC<InputProps> = (props) => (
  <div className={styles.radio}>
    <input {...props} type="radio" defaultChecked={props.checked}></input>
  </div>
);
