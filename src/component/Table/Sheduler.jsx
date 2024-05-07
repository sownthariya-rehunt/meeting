import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Modal, Button, Form, Row } from "react-bootstrap";
import axios from 'axios';

const columns = [
  { id: "userid", label: "userid", minWidth: 170 },
  { id: "Name", label: "Name of the Company", minWidth: 100 },
  {
    id: "action",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
  },
];

export default function Sheduler() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]); // State to hold fetched data

  useEffect(() => {
    axios.get('http://localhost:2500/getalladmin')
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          date: formatDate(item.date) // Format date
        }));
        setData(formattedData); // Store fetched and formatted data in state
        console.log('Data:', formattedData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const getStatusLabel = (action) => {
    switch (action) {
      case 0:
        return <div class="bg-warning text-center p-2">Pending</div>;
      case 1:
        return <div class="bg-success text-center p-2">Approved</div>;
      case 2:
        return <div class="bg-danger text-center p-2">Reject</div>;
      default:
        return "";
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => {
    alert("Thanks for booking. We will send you the update.");
    setShowModal(false);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="p-5">
      {/* Modal and other JSX code */}
      {/* Your existing JSX code */}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === "action"
                        ? getStatusLabel(row[column.id])
                        : column.id === "date" 
                          ? row[column.id] // Display formatted date
                          : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
