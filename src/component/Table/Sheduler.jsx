import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Modal, Button, Form, Row } from "react-bootstrap";


const columns = [
  { id: "s_no", label: "S_No", minWidth: 170 },
  { id: "name", label: "Name of the Company", minWidth: 100 },
  {
    id: "status",
    label: "status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const rows = [];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () =>
  {
    alert("thanks for booking we will send you the update ")
    setShowModal(false);
  } 

  return (
    <div className="p-5">
      <div className="text-center pt-5">
        <button className="bg-warning rounded-5 p-2" onClick={handleModalOpen}>Book a meeting hall</button>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
      
        <Modal.Header closeButton>
          <Modal.Title>Meeting scheduler</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
            <Form.Group controlId="formGridEmail">
                <Form.Label>UserID</Form.Label>
                <Form.Control type="text" value={columns.id} />
              </Form.Group>
              <Form.Group controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={columns.name} />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Purpose for Hall</Form.Label>
                <Form.Control type="text" placeholder="Meeting" />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Book Request
          </Button>
        </Modal.Footer>
      </Modal>

      <Paper
        sx={{
          width: "50%",
          overflow: "hidden",
          margin: "auto",
          paddingTop: "2%",
        }}
      >
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
