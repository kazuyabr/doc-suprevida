import React, { InputHTMLAttributes } from "react";

import styles from "../styles/components/InputIcon.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const InputIcon: React.FC<InputProps> = (props) => (
  <div className={styles.container} style={{ width: "100%" }}>
    <img src="/icons/email.svg" />
    <input
      type="text"
      {...props}
      className={styles.input}
      style={{ border: "none", width: "90%" }}
    />
  </div>
);
