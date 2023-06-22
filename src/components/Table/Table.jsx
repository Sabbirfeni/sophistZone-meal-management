import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function BasicTable({ tableName, data, columnNo, view }) {
    const tableHeaders = view === 'short' ? Object.keys(data[0]).slice(0, 4) : Object.keys(data[0]);
    const userData = view === 'short' ? data.map(user => Object.values(user).slice(0, 4)) : data.map(user => Object.values(user))
    return (
        <>
            <div className='flex flex-1 flex-col'>
                <h3 className='mb-2'>{tableName}</h3>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-200'>
                            {tableHeaders.map(header => <TableCell key={`${header}`} >{header}</TableCell>)}
                            {/* <TableCell>Name</TableCell>
                            <TableCell align="center">Deposit</TableCell>
                            <TableCell align="center">Expense</TableCell>
                            <TableCell align='center'>Meal</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(0, 4).map((user) => (
                        <TableRow
                            key={user.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {Object.values(user).slice(0, 4).map((data, index) => <TableCell key={`${data+index}`} align="">{data}</TableCell>)}
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <button type='button'>View All</button>
            </div>
        </>
    );
  }

