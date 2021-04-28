import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const AntTabs = withStyles({
  root: {
    color: "var(--text)",
  },
  indicator: {
    height: "3px",
    backgroundColor: "var(--green)",
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontSize: "1rem",
      fontWeight: 600,
      marginRight: theme.spacing(4),
      fontFamily: ["Open Sans"].join(","),
      "&:hover": {
        color: "var(--green)",
        opacity: 1,
      },
      "&$selected": {
        color: "var(--green)",
        fontWeight: 600,
      },
      "&:focus": {
        color: "var(--green)",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <AntTabs value={value} onChange={handleChange}>
        <AntTab label="Label 1" />
        <AntTab label="Label 2" />
        <AntTab label="Label 3" />
      </AntTabs>
    </div>
  );
}
