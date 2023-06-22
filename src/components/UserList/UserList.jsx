import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
    const users = [
        { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
        { name: 'Niloy', deposit: 2345, expense: 232, meal: 23, give: 23, get: 0 },
        { name: 'Rashed', deposit: 2345, expense: 232, meal: 23, give: 0, get: 54 },
    ]
    return (
        <>
            <div className='flex flex-1'>
            <h3>All User</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='bg-gray-200'>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Deposit</TableCell>
                        <TableCell align="center">Expense</TableCell>
                        <TableCell align='center'>Meal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                    <TableRow
                        key={user.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{user.name}</TableCell>
                        <TableCell align="center">{user.deposit}/-</TableCell>
                        <TableCell align="center">{user.expense}/-</TableCell>
                        <TableCell align='center'>{user.meal}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
           
        </>
    );
  }
