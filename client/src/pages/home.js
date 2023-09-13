import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/slices/userSlice'

export default function Home() {
  const user = useSelector(selectUser)
  const getUser = () => {
    axios.post('http://localhost:8000/api/auth/me')
  }
  return user ? (
    <Layout>
      <div>home</div>
      <h1>welcome <span>{user.name}</span></h1>
      <br></br>
      <button onClick={getUser}>get current user</button>
    </Layout>
  ) : (
    <Layout>
      <div>home</div>
      <br></br>
      <button onClick={getUser}>get current user</button>
    </Layout>
  )
}
