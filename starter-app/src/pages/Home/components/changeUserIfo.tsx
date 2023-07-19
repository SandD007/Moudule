import React, { useContext } from 'react'
import { Box, Card, Container } from "@mui/material";


const UserPage=()=>{ 
const data = localStorage.getItem('UserData');

return (
  <Container 
  maxWidth="xl"
  sx={{flexGrow: 1,}}>
    <Box
    sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    }>
    <h1>"Congratulations you did it!"</h1>
    </Box>
    <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      }
       }>
    <h2>{data}</h2>
    </Box>
    </Container>
)
}

export default UserPage