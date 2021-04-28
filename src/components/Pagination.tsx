import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab/";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .Mui-selected": {
        height: "12px",
        margin: "26px 1px",
        padding: "0 4px",
        minWidth: "12px",
        borderRadius: "6px",
        fontSize: "0px",
        backgroundColor: "var(--green)!important",
      },
      "& .MuiPaginationItem-root": {
        height: "12px",
        margin: "26px 1px",
        padding: "0 4px",
        minWidth: "12px",
        borderRadius: "6px",
        fontSize: "0px",
        backgroundColor: "#DEF2F2",
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
      hidePrevButton
      hideNextButton
      color="primary"
      size="small"
    />
  );
}
