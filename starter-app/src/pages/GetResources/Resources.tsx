import React, {ReactElement, FC, useEffect, useState} from "react";
import {Box, CircularProgress, Container, Grid, Pagination} from '@mui/material'
import * as userApi from "../../api/modules/resource"
import {IUser} from "../../interfaces/users";
import User from "../Resources/HomeResources";
import { IResource } from "../../interfaces/resources";

const Home: FC<any> = (): ReactElement => {
  const [users, setUsers] = useState<IResource[] | null>(null)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
      const getUser = async () => {
          try {
              setIsLoading(true)
              const res = await userApi.getResoursec(User.name)
              setUsers(res.data)
              setTotalPages(res.total_pages)
          } catch (e) {
              if (e instanceof Error) {
                  console.error(e.message)
              }
          }
          setIsLoading(false)
      }
      getUser()
  }, [currentPage])
  

return (
    <Container>
        <Grid container spacing={1} justifyContent="center" my={4}>
            {isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    {users?.map((item) => (
                        <Grid key={item.id} item lg={2} md={3} xs={6}>
                            <User {...item} />
                        </Grid>
                    ))}
                </>
            )}
        </Grid>
    </Container>
);
};

export default Home;


