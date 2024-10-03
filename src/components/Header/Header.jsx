import React from 'react'
import Box from '@mui/material/Box';
import './header.css'
import Typography from '@mui/material/Typography';
import {  Stack } from '@mui/material';
const Header = () => {
    return (
        <Box sx={{padding:"40px"}} >
                <Stack direction={"column"} className="headers" justifyContent="end" alignItems="center" sx={{position:'relative' , zIndex:"2"}} >
                    <Typography variant="h3" sx={{ textTransform: "uppercase" , marginBottom:"20px", color:"white"}}>
                        maxmize your space
                    </Typography>
                    <Typography variant="h5" sx={{ textTransform: "capitalize",marginBottom:"20px" , color:"white"}}>
                        make every square inch count with boom's generous storage components
                    </Typography>
                </Stack>
        </Box>
    )
}

export default Header
