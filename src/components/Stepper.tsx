import React, { useState } from "react";
import { ButtonHTMLAttributes } from "react";

import styles from "../styles/components/Stepper.module.css";

interface Props {
  value: number;
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

const Stepper: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [count, setCounter] = useState(rest.value);

  function coutAdd() {
    setCounter(count + 1);
  }

  function coutSub() {
    setCounter(count - 1);
  }

  return (
    <div className={styles.container}>
      <button {...rest} type="button" onClick={() => coutSub()}>
        <img src="/icons/icon-.svg" />
      </button>
      <span>{count}</span>
      <button {...rest} type="button" onClick={() => coutAdd()}>
        <img src="/icons/icon+.svg" />
      </button>
    </div>
  );
};

export default Stepper;
