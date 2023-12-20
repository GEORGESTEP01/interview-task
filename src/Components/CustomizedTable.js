import React from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "./StyledComponents";

export default function CustomizedTable({ Columns, Data }) {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="customized table">
        <TableHead>
          <TableRow>
            {Columns &&
              Columns.length &&
              Columns.map((col) => (
                <StyledTableCell component="th" key={col.id}>
                  {col.title}
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Data &&
            Data.length &&
            Data.map((row) => (
              <StyledTableRow key={row.id}>
                {Columns &&
                  Columns.length &&
                  Columns.map((col) => (
                    <StyledTableCell key={col.id} component="td">
                      {row[col.accessor]}
                    </StyledTableCell>
                  ))}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
