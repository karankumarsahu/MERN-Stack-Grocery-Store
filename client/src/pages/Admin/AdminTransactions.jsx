import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../../components/Admin Sidebar/Sidebar'

const AdminTransactions = () => {
  return (
    <>
    <Box sx={{ width: "100%", minHeight: "100vh" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 5fr",          gap: "2rem", }}>
        <Sidebar />
      </Box>
    </Box>
  </>
  )
}

export default AdminTransactions