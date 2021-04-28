import React from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";

import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: 8,
      position: "relative",
      backgroundColor: "#F8F8F8",
      border: "1px solid #C8D6D6",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: ["Open Sans"].join(","),
      "&:focus": {
        borderRadius: 8,
        borderColor: "#00A4A4",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  })
);

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <NativeSelect
        id="demo-customized-select-native"
        value={age}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <option value="">None</option>
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </div>
  );
}
