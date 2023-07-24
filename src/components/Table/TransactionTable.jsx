import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Link, useAsyncError } from 'react-router-dom';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import './table.scss';

export default function TransactionTable({ rows, columns }) {
    const totalUsers = [
        {
            id: 34653,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 34324653,
            date: '02-03-23',
            type: 'Expense',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 34532334299,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 345132334299,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 349,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 99,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 39,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 323,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 299,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 7659,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            belogns: 'Sabbir',
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            purpose: 'Meal Deposit'
        },
        {
            id: 446,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            belogns: 'Sabbir',
            purpose: 'Meal Deposit'
        },
        {
            id: 99772,
            date: '02-03-23',
            type: 'Deposit',
            amount: 230,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            belogns: 'Sabbir',
            purpose: 'Meal Deposit'
        }
    ]
    const totalColumns = [
        {
            title: 'Date',
            align: 'left'
        },
        {
            title: 'Amount',
            align: 'left'
        },
        {
            title: 'Belongs To',
            align: 'left'
        },
        {
            title: 'Purpose',
            align: 'left'
        },

    ]

    const shortTableColumns = totalColumns.slice(0, columns);
    const shortTableUserRows = totalUsers.slice(0, rows);
    const shortTableUsers = shortTableUserRows.map(user => {
        const sliced = Object.keys(user).slice(0, columns + 3).reduce((result, key) => {
            result[key] = user[key];
            return result;
        }, {});
        return sliced
    })
    const tableColumns = columns ? shortTableColumns : totalColumns;

    const users = rows ? shortTableUsers : totalUsers;
    console.log(users)
    return (
        <>
            <div className='flex flex-1 flex-col box-style p-0'>
              <div className='flex justify-between items-center p-3'>
                <h1 className='table-title'>Transactions</h1>
                <div>
                    {rows && <Link className='view-all-btn' to='/dashboard/transactions'>View All</Link>}
                    {!rows && <Link className='btn-style m-0 block' to='/dashboard/add-transaction'>New Transaction</Link>}
                </div>

              </div>
                
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-200'>
                            {tableColumns.map(column => <TableCell key={column.title} align={`${column.align}`}>{`${column.title}`}</TableCell>)}
                            <TableCell align='center'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell className='p-5'>{user.date}</TableCell>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center'}}>
                                        <span>{user.amount}/-</span>
                                        <span className={`${user.type === 'Expense' ? 'text-red-500' : 'text-green-600'}`}>&nbsp;{`(${user.type})`}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={user.photoUrl} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px', border: '2px solid gray', padding: '2px'} }/>
                                        <span>{user.belogns}</span>
                                    </div>
                                </TableCell>
                                {user.purpose && <TableCell>{user.purpose}</TableCell>}
                                <TableCell align='center'>
                                    <div className='flex justify-center'>
                                        <FaEdit className='fill-gray-300 m-1 text-lg cursor-pointer transition hover:fill-blue-500'/>
                                        <MdDelete className='fill-gray-300 m-1 text-xl cursor-pointer transition hover:fill-red-800'/>  
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
        </>
    );
  }





































// import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// export default function ShortTable({ tableName, data, columnNo, view = 'short' }) {
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