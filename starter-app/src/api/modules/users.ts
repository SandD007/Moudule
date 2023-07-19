import UserData from "../../components/Elements/userData";
import apiClient from "../client";

export const getById = (id: string) => apiClient({
  path: `users/${id}`,
  method: 'GET'
})

export const getByPage = (page: number) => apiClient({
  path: `users?page=${page}`,
  method: 'GET'
})

export const createUser = (data: UserData) => apiClient({
  path: `users`,
  method: 'POST',
  data:{
    data
  }
})
export const updateUser = (data: UserData, id: string) => apiClient({
  path: `users/${id}`,
  method: 'PUT',
  data:{
    data
  }
})

