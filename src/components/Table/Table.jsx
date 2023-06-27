import { useEffect } from "react";
import { Box, Typography } from '@mui/material';

const Users = ({ setSelectedLink, link }) => {

  useEffect(() => {
    setSelectedLink(link);
  }, []);

  return (
    <Box
    sx={{
      height: 400,
      width: '100%'
    }}
    >
      <Typography
      variant="h3"
      component='h3'
      sx={{ textAlign: 'left', mt: 3, mb: 3}}
      >
      Manage Users
      </Typography>
    </Box>
  )
}














//   const users = [
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Niloy', deposit: 2345, expense: 232, meal: 23, give: 23, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Niloy', deposit: 2345, expense: 232, meal: 23, give: 23, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
//     { name: 'Rashed', deposit: 2345, expense: 232, meal: 23, give: 0, get: 54 },
// ]
// const expense = [
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
//   { month: 'Jun', total: 4000, prevTotal: 299 },
// ]


// import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// export default function BasicTable({ tableName, data, columnNo, view = 'short' }) {
//     const tableHeaders = view === 'short' ? Object.keys(data[0]).slice(0, 4) : Object.keys(data[0]);
//     const tableData = view === 'short' ? data.slice(0, 4) : data;
//     return (
//         <>
//             <div className='flex flex-1 flex-col'>
//                 <h3 className='mb-2'>{tableName}</h3>
//                 <TableContainer component={Paper}>
//                     <Table  aria-label="simple table">
//                     <TableHead>
//                         <TableRow className='bg-gray-200'>
//                             {tableHeaders.map(header => <TableCell key={`${header}`}>{ header }</TableCell>)}
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {tableData.map((user) => (
//                         <TableRow
//                             key={user.name}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             {view === 'short' ? 
//                             Object.values(user).slice(0, 4).map((singleData, index) => <TableCell key={`${singleData+index}`} align="">{singleData}</TableCell>) : 
//                             Object.values(user).map((singleData, index) => <TableCell key={`${singleData+index}`} align="">{singleData}</TableCell>)}
//                         </TableRow>
//                         ))}
//                     </TableBody>
//                     </Table>
//                 </TableContainer>
//                 <button type='button'>View All</button>
//             </div>
//         </>
//     );
//   }