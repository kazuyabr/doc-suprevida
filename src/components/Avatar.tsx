import React from "react";

import styles from "../styles/components/Avatar.module.css";

// online = marcação de online (true ou false)
// img = caminho da imagem
// size= tamanho do componente (md ou lg)

interface Props {
  online: boolean;
  size?: "md" | "lg";
  img?: string;
}

export const Avatar: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <div className={`${styles.avatar} ${styles[rest.size]}`}>
      {rest.online && <div className={styles.online} />}
      {children}
    </div>
  );
};

export const AvatarIcon: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <div className={`${styles.avatarIcon} ${styles[rest.size]}`}>
      {rest.online && <div className={styles.online} />}
      <img src={`${rest.img}`} alt="Avatar" />
    </div>
  );
};
