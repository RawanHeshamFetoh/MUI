import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const Card = ({ img, title, details, btn, direction }) => {
    return (
        <Stack direction={direction} alignItems={"center"} justifyContent={"space-between"} sx={{marginBottom:"30px"}}>
            <Box sx={{ width: "50%" }}>

                <img src={img} alt='img' style={{width:"100%"}} />
            </Box>
            <Box sx={{ width: "50%" , paddingLeft:"50px" , bgcolor:"#FAFAFA", alignSelf:"stretch" , display:"flex" , alignItems:"start" , justifyContent:"center" , flexDirection:"column"}}>
                <Box sx={{width:"75%"}}>
                <Typography variant='h4' sx={{textTransform:"uppercase",lineHeight:"1.5" , marginBottom:"40px"}}>
                    {title}
                </Typography>
                <Typography variant='body1' sx={{color:"GrayText",lineHeight:"1.7" , marginBottom:"40px" , fontSize:"14px" , textTransform:"capitalize"}} >
                    {details}
                </Typography>
                </Box>
                <Button sx={{ bgcolor: "black", color: "white" }}>{btn}</Button>
            </Box>
        </Stack>
    )
}

export default Card
