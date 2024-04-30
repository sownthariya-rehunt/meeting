import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(s_no, name, date, purpose) {
  return { s_no, name, date, purpose };
}

const rows = [
  createData("1", "ssss", "23/5/24", "book"),
  createData("2", "jhgs", "23/5/24", "book"),
  createData("3", "sssfgs", "23/5/24", "book"),
];

export default function DenseTable() {
  const [status, setStatus] = React.useState({
    statusvalue:false,
    s_no:""
  });

  const statusv = (s_no) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      s_no: s_no,
      statusvalue:true
    }));

    console.log(status.s_no + status.statusvalue);
  };
  const statusn = (s_no) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      s_no: s_no,
      statusvalue:false
    }));

    console.log(status.s_no + status.statusvalue);
  };
 

  return (
    <div className='w-50 ms-auto mx-auto '>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>s.no</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Purpose</TableCell>
            <TableCell align="center" colSpan={2}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.s_no}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.purpose}</TableCell>
              <TableCell align="center">
                <Button
                  className='bg-primary text-white'
                  onClick={() => statusv(row.s_no)}
                >
                  Approve
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  className='bg-primary text-white'
                  onClick={() => statusn(row.s_no)}
                >
                  Decline
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   
  );
}
