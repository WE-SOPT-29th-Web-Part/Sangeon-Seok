import axios from 'axios'

export const client = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    // json-server 데이터 type이라고 함.
  },
})

export const imageClient = axios.create({
  baseURL: "http://localhost:5000/api/image",
  headers: {
    "Content-Type": "multipart/form-data",
  },
})