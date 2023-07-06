import React from "react";
import './table.scss';
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Table() {
  const columns = () => {
    
  }
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
        columns={}
        rows={}
        />
      </Box>
    </>
  );
}
