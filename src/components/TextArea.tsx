import React from "react";
import { TextareaHTMLAttributes } from "react";

import styles from "../styles/components/TextArea.module.css";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  disabled?: boolean;
}

const TextArea: React.FC<InputProps> = (props) => (
  <textarea {...props} className={styles.textArea} />
);
export default TextArea;
