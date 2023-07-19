import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button, Card, Container } from '@mui/material';
import UserData from '../Elements/userData';
import { useState, useEffect, useContext } from 'react';
import * as userApi from "../../api/modules/users"
import { useNavigate } from 'react-router-dom';



    const ComposedTextField =() => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [user, setUser] = useState<UserData| null>(null)
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    let data = ""

    
    useEffect(() => {
        setUser({name,job})
    }, [name,job])

    
    function Submit () {
        const GetUser = async () => {
            if(user != null && user.job != "" && user.name != "")
            {
                try {
                    setIsLoading(true)
                    const res = await userApi.createUser(user)
                    data = ("id: "+`${res?.id}` + "; "+ " createdAt: " +` ${res?.createdAt}`)
                    localStorage.setItem('UserData', JSON.stringify(data));
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
                navigate('/userInfo')
            }   
        }
        GetUser()
    }
    
    
  return (
      <Container 
      maxWidth="sm"
      sx={{

        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }

      }>
            <Card 
            sx={{width:"100%"}}>
                <Box
                    component="form"
                    sx={{
                        margin: "2rem",
                        marginBottom: "0",
                        justifyContent: "center",
                        '& > :not(style)': { m: 1 },
                        }}
                    noValidate
                    autoComplete="off"
                    >
                    <FormControl id = "name"
                    sx ={{ width: "100%"}}>
                        <InputLabel htmlFor="component-outlined">Name</InputLabel>
                        <OutlinedInput
                        id="component-outlined"
                        value={name}
                        onChange={a => setName(a.target.value)}
                        label="Name"
                        />
                    </FormControl>
                </Box>
                <Box
                    component="form"
                    sx={{
                        margin: "2rem",
                        marginTop: "0",
                        justifyContent: "center",
                        '& > :not(style)': { m: 1 },
                        }}
                    noValidate
                    autoComplete="off"
                    >
                    <FormControl id = "job"
                    sx ={{ width: "100%"}}>
                        <InputLabel htmlFor="component-outlined">Job</InputLabel>
                        <OutlinedInput
                        id="component-outlined"
                        value={job}
                        onChange={a => setJob(a.target.value)}
                        label="Name"

                        />
                        <Button 
                            onClick={Submit}
                                sx={{
                                    marginTop: "2rem",
                                    marginLeft: "25%",
                                    width: "50%",
                                    height: "auto",
                                    backgroundColor: "secondary.main",
                                        '&:hover': {
                                    background: "#2b6963",
                                    },
                                        paddingTop: "1rem",
                                        paddingBottom: "1rem",
                                        color: "#ffff",
                                    }}
                                    >
                            Create
                        </Button>
                    </FormControl>
                </Box>
            </Card>
          </Container>
  );
}
export default ComposedTextField

