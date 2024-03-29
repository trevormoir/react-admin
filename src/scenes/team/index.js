import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SecurityIcon from '@mui/icons-material/Security';
import Header from '../../components/Header';

export default function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone Number", flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {field: "access", headerName: "Access Level", flex: 1, renderCell: ({row: {access}}) => {
            return (
                <Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" backgroundColor={
                    access === "admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderReadius="4px">
                    {access === "admin" && <AdminPanelSettingsIcon />}
                    {access === "manager" && <SecurityIcon />}
                    {access === "user" && <LockOpenIcon />}
                    <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                        {access}
                    </Typography>
                </Box>
            )
        }}
    ]

  return (
    <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team Memebers" />
        <Box m="40px 0 0 0" height="75vh" 
            sx={{" & .MuiDataGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none"
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none"
            },
            "& .MuiDataGrid-visualScroller": {
                backgroundColor: colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer": {
                bottomBorder: "none",
                backgroundColor: colors.blueAccent[700]
            },
            }}
        >
            <DataGrid 
                rows={mockDataTeam}
                columns={columns}
            />
        </Box>
    </Box>
  )
}
