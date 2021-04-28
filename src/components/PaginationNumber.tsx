import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .Mui-selected": {
        fontSize: "1rem",
        fontWeight: 700,
        backgroundColor: "var(--green)!important",
        border: "1px solid var(--green)",
        color: "#FFF !important",
      },
      "& .MuiPaginationItem-root": {
        fontSize: "1rem",
        fontWeight: 700,
        backgroundColor: "#FFF",
        border: "1px solid var(--green)",
        color: "var(--green)",
      },
    },
  })
);

export default function BasicPagination(props) {
  const classes = useStyles();
  return (
    <Pagination
      count={props.count}
      className={classes.root}
      color="primary"
      size="small"
      variant="outlined"
      shape="rounded"
    />
  );
}
