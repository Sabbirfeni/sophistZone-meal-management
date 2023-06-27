import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ShortTable({ tableName, data, columnNo, view = 'short' }) {
    const tableHeaders = view === 'short' ? Object.keys(data[0]).slice(0, 4) : Object.keys(data[0]);
    const tableData = view === 'short' ? data.slice(0, 4) : data;
    return (
        <>
            <div className='flex flex-1 flex-col'>
                <h3 className='mb-2'>{tableName}</h3>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-200'>
                            {tableHeaders.map(header => <TableCell key={`${header}`}>{ header }</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((user) => (
                        <TableRow
                            key={user.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {view === 'short' ? 
                            Object.values(user).slice(0, 4).map((singleData, index) => <TableCell key={`${singleData+index}`} align="">{singleData}</TableCell>) : 
                            Object.values(user).map((singleData, index) => <TableCell key={`${singleData+index}`} align="">{singleData}</TableCell>)}
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