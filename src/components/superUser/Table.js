import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Serial No</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Hospital Name</StyledTableCell>
            <StyledTableCell align="right">Total No of Patient</StyledTableCell>
            <StyledTableCell align="right">Neurology</StyledTableCell>
            <StyledTableCell align="right">Dermatology</StyledTableCell>
            <StyledTableCell align="right">Gynecology</StyledTableCell>
            <StyledTableCell align="right">Ophthalmology</StyledTableCell>
            <StyledTableCell align="right">Cardiology</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              1
            </StyledTableCell>

            <StyledTableCell align="right">
              {Date(new Date()).substring(0, 16)}
            </StyledTableCell>
            <StyledTableCell align="right">SIH Hospital</StyledTableCell>
            <StyledTableCell align="right">{props.total}</StyledTableCell>
            <StyledTableCell align="right">{props.Neurology}</StyledTableCell>
            <StyledTableCell align="right">{props.Dermatology}</StyledTableCell>
            <StyledTableCell align="right">{props.Gynecology}</StyledTableCell>
            <StyledTableCell align="right">
              {props.Ophthalmology}
            </StyledTableCell>
            <StyledTableCell align="right">{props.Cardiology}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
