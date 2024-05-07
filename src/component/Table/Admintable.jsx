import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminTable() {
  const [data, setData] = useState([]); // State to hold fetched data
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
  const [filterType, setFilterType] = useState('all'); // State to hold current filter type
  const [status,setStatus] = useState([])

  useEffect(() => {
    axios.get('http://localhost:2500/getalladmin')
      .then(response => {
        const formattedData = response.data.map(item => ({
          ...item,
          date: formatDate(item.date) // Format date
        }));
        setData(formattedData); // Store fetched and formatted data in state
        setFilteredData(formattedData); // Initialize filtered data with all data
        console.log('Data:', formattedData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const statusv = (userid) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      userid: userid,
      action :1
    }));

    console.log(status.userid + status.action);
  };
  const statusn = (userid) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      userid: userid,
      action :2
    }));

    console.log(status.userid + status.action);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  // Function to filter data based on status
  const filterData = (type) => {
    let filtered = [];
    switch (type) {
      case 'all':
        filtered = data;
        break;
      case 'pending':
        filtered = data.filter(item => item.action === 0);
        break;
      case 'reject':
        filtered = data.filter(item => item.action === 2);
        break;
      default:
        filtered = data;
    }
    setFilteredData(filtered);
    setFilterType(type);
  };

  return (
    <div className='w-50 ms-auto mx-auto p-5 '>
      <h1>Room Booking request</h1>
      <div>
        <Button
          className='bg-primary text-white fw-bold p-1 m-2'
          onClick={() => filterData('all')}
        >
          All
        </Button>
        <Button
          className='bg-warning text-white p-1 m-2'
          onClick={() => filterData('pending')}
        >
          Pending
        </Button>
        <Button
          className='bg-danger text-white p-1 m-2'
          onClick={() => filterData('reject')}
        >
          Reject
        </Button>
      </div>
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
            {filteredData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userid}
                </TableCell>
                <TableCell align="right">{row.Name}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.purpose}</TableCell>
                <TableCell align="center">
                  {filterType !== 'reject' && (
                    <Button
                      className='bg-primary text-white'
                      onClick={() => statusv(row.userid) }
                    >
                      Approve
                    </Button>
                  )}
                </TableCell>
                <TableCell align="center">
                  {filterType !== 'reject' && (
                    <Button
                      className='bg-primary text-white'
                      onClick={() => statusn(row.userid)}
                    >
                      Decline
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
