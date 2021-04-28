import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputAdornment from "@material-ui/core/InputAdornment";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        borderRadius: 16,
      },
    },
  })
);

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "2.5rem",
    marginTop: "8px",
    background: "#F8F8F8",
    borderRadius: "8px",
    outline: "none",
    "& ::-webkit-input-placeholder": {
      color: "grey",
    },
    fontFamily: ["Open Sans"].join(","),
    fontWeight: 400,
    "& $notchedOutline": {
      borderColor: "#C8D6D6",
      outline: "none",
    },
    "&:hover $notchedOutline": {
      borderColor: "#C8D6D6",
      outline: "none",
    },
    "&$focused $notchedOutline": {
      borderColor: "#C8D6D6",
      outline: "none",
    },
  },
  focused: {
    outline: "none",
    border: "none",
  },
  notchedOutline: {},
}));

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export default function InputAdornments() {
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      <OutlinedInput
        style={{ borderRadius: 8, outline: "none" }}
        classes={outlinedInputClasses}
        id="standard-adornment-password"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        placeholder="Digite sua senha"
        onChange={handleChange("password")}
        startAdornment={
          <InputAdornment position="start">
            <img src="/icons/lock.svg" alt="arrow" style={{ width: 20 }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              size="small"
              color="primary"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              style={{ marginRight: "-3px" }}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
}
