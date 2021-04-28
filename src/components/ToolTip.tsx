import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

export const BlackToolTip = withStyles(() => ({
  tooltip: {
    backgroundColor: "#0A1B1B",
    borderRadius: "16px",
    boxShadow: "0px 8px 16px rgba(0, 30, 30, 0.3)",

    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 18,
    paddingLeft: 18,
    maxWidth: 251,

    color: "#FDFEFE",
    fontSize: "11px",
    lineHeight: "18px",
  },
  arrow: {
    color: "#0A1B1B",
  },
}))(Tooltip);
