import React, { ButtonHTMLAttributes } from "react";
import { CircularProgress } from "@material-ui/core";

import styles from "../styles/components/ButtonIcon.module.css";

interface Props {
  color: "primary" | "secondary" | "disabled" | "secondaryDisable";
  width?: string;
  height?: string;
  progress?: "true" | "false";
  disabled2?: "true" | "false";
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button
    type="button"
    className={`${styles.button} ${styles[rest.color]} ${
      styles[rest.progress]
    }`}
    style={{ width: rest.width, height: rest.height }}
    {...rest}
  >
    {rest.progress === "true" ? (
      rest.color ? (
        <CircularProgress
          size="3rem"
          style={{
            width: "15px",
            height: "15px",
            color: "var(--green-light)",
          }}
        />
      ) : (
        <CircularProgress
          size="3rem"
          style={{ width: "15px", height: "15px", color: "#fff" }}
        />
      )
    ) : rest.color === "secondary" || rest.color === "secondaryDisable" ? (
      <img src="/icons/arrowRight.svg" alt="arrow" />
    ) : (
      <img src="/icons/arrowLeft.svg" alt="arrow" />
    )}
    {children}
  </button>
);

export default Button;
