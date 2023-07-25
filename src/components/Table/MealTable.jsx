import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import { Link, useAsyncError } from 'react-router-dom';
import './table.scss';

export default function MealTable({ rows, columns }) {
    const totalMeal = [
        {
            id: 34653,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 300000 }, { id: 346553, name: 'Rakib', meal: 5000000 }, { id: 346583, name: 'Hasan', meal: 20000 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 34324653,
            date: '05-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 5345 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 34532334299,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 345132334299,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 349,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 99,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 39,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 323,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        },
        {
            id: 299,
            date: '02-03-23',
            mealData: [ { id: 34653, name: 'sabbir', meal: 2 }, { id: 346553, name: 'Rakib', meal: 2 }, { id: 346583, name: 'Hasan', meal: 2 }, { id: 3455653, name: 'Shihab', meal: 2 }, ],
        }
    ]
    const totalUser = [
        
        {
            id: 346583,
            title: 'Hasan',
            align: 'left'
        },
        {
            id: 3455653,
            title: 'Shihab',
            align: 'left'
        },
        {
            id: 346553,
            title: 'Rakib',
            align: 'left'
        },
        {
            id: 34653,
            title: 'Sabbir',
            align: 'left'
        },
        

    ]

    // const shortTableMealColumns = totalUser.slice(0, columns);
    // const shortTableMealRows = totalMeal.slice(0, rows);
    // const shortTableMeals = shortTableMealRows.map(user => {
    //     const sliced = Object.keys(user).slice(0, columns + 3).reduce((result, key) => {
    //         result[key] = user[key];
    //         return result;
    //     }, {});
    //     return sliced
    // })
    // const tableColumns = columns ? shortTableMealColumns : totalUser;

    // const tableMealRows = rows ? shortTableMeals : totalMeal;

    return (
        <>
            <div className='flex flex-1 flex-col  box-style p-0'>
              <div className='flex justify-between items-center p-3'>
                <h3 className={rows ? 'text-sm table-title' : 'table-title'}>Meal</h3>
                <div>
                    {rows && <Link className='view-all-btn' to='/dashboard/transactions'>View All</Link>}
                    {!rows && <Link className='btn-style m-0 flex items-center hover:text-white' to='/dashboard/add-meal'> <AiOutlinePlusSquare className='text-lg mr-1'/> New Meals</Link>}
                </div>

              </div>
                
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-200'>
                            <TableCell>Date</TableCell>
                            {totalUser.map(column => <TableCell key={column.title} align={`${column.align}`}>{`${column.title}`}</TableCell>)}
                            <TableCell align='center'>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totalMeal.map(meal => (
                            <TableRow key={meal.id}>
                                <TableCell className='p-5'>{meal.date}</TableCell>
                                
                                {totalUser.map(user => {
                                     const matchingMeals = meal.mealData.filter(mealObj => user.id === mealObj.id);

                                     return matchingMeals.map(mealObj => {
                                        return (
                                            <TableCell key={mealObj.id}>
                                                <span>{mealObj.meal}</span>
                                            </TableCell>
                                        )
                                     })
                                    // meal.mealData.map(mealObj => {
                                    //     if(user.id === mealObj.id) {
                                    //         return (
                                    //             <TableCell key={mealObj.id}>
                                    //                 <span>{mealObj.meal}</span>
                                    //             </TableCell>
                                    //         )
                                    //     }
                                    // })
                                    // const matchingColumn = meal.mealData.find(mealObj => user.id === mealObj.id);
                                    // if(matchingColumn) {
                                        
                                    // }
                                    // meal.mealData.forEach(mealObj => {
                                    //     if(mealObj.id === user.id) {
                                    //         console.log(user.title + '=' + mealObj.meal)
                                            
                                    //     }
                                    // })
                                    
                                })}
                                {/* <TableCell>
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
                                {user.purpose && <TableCell>{user.purpose}</TableCell>} */}
                                <TableCell align='center'>
                                    <div className='flex justify-center'>
                                        <FaEdit className='fill-gray-300 m-1 text-lg cursor-pointer transition hover:fill-orange-400'/>
                                        <MdDelete className='fill-gray-300 m-1 text-xl cursor-pointer transition hover:fill-red-500'/>  
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