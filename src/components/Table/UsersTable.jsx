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


export default function UsersTable({ rows, columns }) {
    const totalUsers = [
        {
            id: 34653,
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 34324653,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'raihan',
            email: 'email@gmail.com',
            department: 'Accounting',
            number: '322',
        },
        {
            id: 34532334299,
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 345132334299,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 349,
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 99,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 39,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 323,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 299,
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 7659,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 446,
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        },
        {
            id: 99772,
            photoUrl: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            email: 'sabbir@gmail.com',
            department: 'Philosophy',
            number: 344,
        }
    ]
    const totalColumns = [
        {
            title: 'Name',
            align: 'left'
        },
        {
            title: 'Email',
            align: 'left'
        },
        {
            title: 'Department',
            align: 'left'
        },
        {
            title: 'Number',
            align: 'left'
        },

    ]

    const shortTableColumns = totalColumns.slice(0, columns);
    const shortTableUserRows = totalUsers.slice(0, rows);
    const shortTableUsers = shortTableUserRows.map(user => {
        const sliced = Object.keys(user).slice(0, columns + 2).reduce((result, key) => {
            result[key] = user[key];
            return result;
        }, {});
        return sliced
    })
    const tableColumns = columns ? shortTableColumns : totalColumns;
    const users = rows ? shortTableUsers : totalUsers;
 
    
    return (
        <>
            <div className='flex flex-1 flex-col div-shadow'>
            <div className='flex justify-between align-center p-3'>
                <h3>Users</h3>
                <div>
                    {rows && <Link className='view-all-btn' to='/dashboard/users'>View All</Link>}
                    {!rows && <Link className='btn-style m-0' to='/dashboard/add-user'>Add New User</Link>}
                </div>

              </div>
                
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-200'>
                            {tableColumns.map(column => <TableCell key={column.title} align={`${column.align}`}>{`${column.title}`}</TableCell>)}
                            <TableCell align='center'>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={user.photoUrl} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px', border: '2px solid gray', padding: '2px'} }/>
                                        <span>{user.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                {user.department && <TableCell>{user.department}</TableCell>}
                                {user.number && <TableCell>{user.number}</TableCell>}
                                <TableCell align='center'><Link to={`/dashboard/users/${user.id}`}>View</Link></TableCell>
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