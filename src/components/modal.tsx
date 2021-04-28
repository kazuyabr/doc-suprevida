import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import Button from "./Button";

import styles from "../styles/components/Modal.module.css";

export function Modal(props) {
  function handleTeste() {
    console.log("teste");
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      maxWidth={"xs"}
      className={styles.modal}
      PaperProps={{
        style: { borderRadius: 24 },
      }}
    >
      <DialogContent className={styles.content}>
        <h1>Teste de Modal</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <br />
        <Button color="secondary" onClick={props.onClose}>
          Sair
        </Button>
      </DialogContent>
    </Dialog>
  );
}
