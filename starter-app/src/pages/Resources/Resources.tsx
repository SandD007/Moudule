import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Typography,
    Button
} from '@mui/material'
import * as userApi from "../../api/modules/resource"
import {IUser} from "../../interfaces/users";
import {useParams} from "react-router-dom";
import PositionedMenu from "../../components/Navigation/dashboard";
import { IResource } from "../../interfaces/resources";

const User: FC<any> = (): ReactElement => {
    const [user, setUser] = useState<IResource | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getUser = async () => {
                try {
                    setIsLoading(true)
                    const res = await userApi.getResourseById(User.name, id)
                    setUser(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getUser()
        }
    }, [id])

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card>
                            <Box
                                sx={{
                                    
                                    width: 300,
                                    height: 300,
                                    backgroundColor: `${user?.color}`
                                }}
                            />
                            <CardContent>
                                <Typography noWrap variant="body2" color="text.secondary">
                                    {user?.name} {user?.pantone_value}
                                </Typography>
                            </CardContent>
                            <Typography noWrap gutterBottom variant="h6" component="div"  align = "center">
                            </Typography>
                        </Card>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default User;