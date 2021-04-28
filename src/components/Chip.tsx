import React from "react";

import styles from "../styles/components/Chip.module.css";

interface Props {
  width?: string
  height?: string
}

export const ChipIcon: React.FC<Props> = ({ children, ...rest }) => (
  <div
    className={styles.chip}
    style={{ width: rest.width, height: rest.height }}
  >
    <img src="/icons/check.svg" />
    <span>{children}</span>
  </div>
)

export const Chip: React.FC<Props> = ({ children, ...rest }) => (
  <div
    className={styles.chipBorder}
    style={{ width: rest.width, height: rest.height }}
  >
    <span>{children}</span>
  </div>
)
