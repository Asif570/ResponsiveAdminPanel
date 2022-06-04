import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(Product, TrackingId, Date, Status) {
  return { Product, TrackingId, Date, Status };
}
const myStutasStyle = (Status) => {
  if (Status === "Approved") {
    return {
      background: "#ffca072f",

      color: "#ffca07",
    };
  } else if (Status === "Deliveried") {
    return {
      background: "rgb(145  254  169 /47%)",

      color: "#00c853",
    };
  } else {
    return {
      background: "#ffadad8f",

      color: "red",
    };
  }
};
const rows = [
  createData("Oppo A13 Phone 2022", "2585231582", "02 Jan 2022", "Approved"),
  createData("Oppo s1 Phone 2021", "4144754541", "05 Jan 2022", "Deliveried"),
  createData("Oppo C13 Phone 2022", "254987561", "06 March 2022", "Approved"),
  createData("Oppo AS Pro Phone 2022", "851485625", "20 June", "Pandding"),
];

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Rcent Orders</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Products</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Product}
                </TableCell>
                <TableCell align="left">{row.TrackingId}</TableCell>
                <TableCell align="left">{row.Date}</TableCell>
                <TableCell align="left">
                  {" "}
                  <span className="Status" style={myStutasStyle(row.Status)}>
                    {row.Status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
