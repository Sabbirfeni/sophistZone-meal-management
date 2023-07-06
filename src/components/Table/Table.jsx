import React from "react";
import './table.scss';
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Table() {
  const columns = () => [
      { field: 'photoUrl', headerName: 'Avatar', width: 60 },
      { field: 'name', headerName: 'Name', width: 170 },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'role', headerName: 'Role', width: 80 },
      { field: 'active', headerName: 'Active', width: 60 },
      { field: '_id', headerName: 'Id', width: 100 },
    ]
  const users = [
    {
     photoUrl: '3423sdff',
     name: 'sabbir',
     email: 'contact.sabbirbhuiyan@gmail.com',
     role: 'basic',
     active: 'Active',
     _id: 3242
    }
  ]
  return (
    <>
      <Box>
        <Typography
          variant="h3"
          component='h3'
          sx={{ textAlign: 'left', mt: 3, mb: 3 }}
        >
        Manage Users
        </Typography>
        <DataGrid
        columns={columns}
        rows={users}
        getRowId={row => row._id}
        />
      </Box>
    </>
  );
}
