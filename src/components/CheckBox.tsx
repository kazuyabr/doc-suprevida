import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Checkbox
        defaultChecked
        color="primary"
        // inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox
        disabled
        defaultChecked
        color="primary"
        // inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </>
  );
}
