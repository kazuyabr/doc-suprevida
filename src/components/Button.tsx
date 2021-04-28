import React, { ButtonHTMLAttributes } from "react";
import { ArrowDropDown } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";

import styles from "../styles/components/Button.module.css";

interface Props {
  color: "primary" | "secondary" | "disabled";
  width?: string;
  height?: string;
  icon?: "true" | "false";
  loading?: "true" | "false";
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button
    type="button"
    className={`${styles.button} ${styles[rest.color]}`}
    style={{ width: rest.width, height: rest.height, minHeight: "2.0rem" }}
    {...rest}
  >
    {rest.loading === "true" && (
      <CircularProgress
        style={{ width: "15px", height: "15px", color: "#FFF" }}
      />
    )}
    {rest.icon === "true" && (
      <ArrowDropDown style={{ objectFit: "cover", marginLeft: "-0.44rem" }} />
    )}
    {rest.loading !== "true" && children}
  </button>
);

export default Button;
