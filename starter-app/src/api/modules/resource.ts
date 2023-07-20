import apiClient from "../client";

export const getResourseById = (string: string, id: string) => apiClient({
  path: ` ${string}/${id}`,
  method: 'GET'
})

export const getResoursec = (string: string) => apiClient({
  path: `${string}`,
  method: 'GET'
})