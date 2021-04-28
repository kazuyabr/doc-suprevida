import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";

interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <BlackToolTip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value + "%"}
      arrow
    >
      {children}
    </BlackToolTip>
  );
}

export const BlackToolTip = withStyles(() => ({
  tooltip: {
    backgroundColor: "#0A1B1B",
    borderRadius: "16px",
    boxShadow: "0px 4px 8px rgba(0, 30, 30, 0.3)",
    width: "3.812rem",
    height: "2.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "#FDFEFE",
    fontWeight: 400,
    fontSize: "0.875rem",
  },
  arrow: {
    color: "#0A1B1B",
    marginBottom: "150px",
    "&:before": {
      marginTop: "-4px",
    },
  },
}))(Tooltip);

const CustomSlider = withStyles({
  root: {
    color: "var(--green)",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "var(--green)",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "0px 0px 0px 6px rgba(0, 164, 164, 0.15)",
    },
  },
  active: {},
  valueLabel: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function CustomizedSlider() {
  return (
    <div style={{ width: "278px" }}>
      <CustomSlider
        ValueLabelComponent={ValueLabelComponent}
        aria-label="custom thumb label"
        defaultValue={20}
      />
    </div>
  );
}
