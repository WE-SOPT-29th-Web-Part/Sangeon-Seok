import axios from 'axios'

export const client = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
    // json-server 데이터 type이라고 함.
  },
})