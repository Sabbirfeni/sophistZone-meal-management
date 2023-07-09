import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useAsyncError } from 'react-router-dom';


export default function ShortTable() {
    const rows = [
        {
            id: 3453,
            photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            department: 'Philosophy',
            email: 'sabbir@gmail.com',
            number: 344
        },
        {
            id: 3432453,
            photoUrl: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
            name: 'raihan',
            department: 'Accounting',
            email: 'email@gmail.com',
            number: '322'
        },
        {
            id: 3453234299,
            photoUrl: 'https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8NzYwODI3NzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name: 'sabbir',
            department: 'Philosophy',
            email: 'sabbir@gmail.com',
            number: 344
        },
        {
            id: 2342343453,
            photoUrl: 'https://images.unsplash.com/photo-1514501259756-f4b6fbeffa67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            name: 'raihan',
            department: 'Accounting',
            email: 'email@gmail.com',
            number: '322'
        }
    ]
    const [ user, setUser ] = useState(null);
    const [ isModelOpen, setIsModelOpen ] = useState(false);
    const openModel = (id) => {
        const selectUser = rows.filter(user => user.id === id);
        setUser(selectUser[0]);
        setIsModelOpen(true);
    }
    return (
        <>
            <div className='flex flex-1 flex-col'>
                <h3 className='mb-2'>Users</h3>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-200'>
                            <TableCell align='left'>Name</TableCell>
                            {/* <TableCell align='left'>Department</TableCell> */}
                            <TableCell align='left'>Email</TableCell>
                            <TableCell align='left'>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.photoUrl}>
                                <TableCell>
                                    <div style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={row.photoUrl} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px', border: '2px solid gray', padding: '2px'} }/>
                                        <span>{row.name}</span>
                                    </div>
                                </TableCell>
                                {/* <TableCell>{row.department}</TableCell> */}
                                <TableCell>{row.email}</TableCell>
                                <TableCell><button onClick={() => openModel(row.id)} type='button'>View</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                <button type='button'>View All</button>
            </div>
            {isModelOpen && 
            <div className='model-container'>
                <div className='model'>
                    <div>
                        <img src={user.photoUrl} alt="" />
                    </div>
                    <div>{user.name}</div>
                </div>
            </div>
            }
            
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