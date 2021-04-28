import React from "react";

import styles from "../styles/components/Colors.module.css";

export function Color() {
  return (
    <img
      className={styles.imgColors}
      src="/img/colors.png"
      alt="Paleta de cor"
    />
  );
}

export function Efects() {
  return (
    <img
      className={styles.imgEfects}
      src="/img/img-efects.png"
      alt="Paleta de cor"
    />
  );
}
