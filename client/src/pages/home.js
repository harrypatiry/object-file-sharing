import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector(x => x.user.user)
  
  const getUser = () => {
    // axios.post('http://localhost:8000/api/auth/me')
    console.log(localStorage.getItem('user'))
  }
  return localStorage.getItem('user') ? (
    <Layout>
      <div>home</div>
      <h1>welcome <span>{user}</span></h1>
      <br></br>
      <button onClick={getUser}>get current user</button>
    </Layout>
  ) : (
    <Layout>
      <div>home</div>
      <h1>not logged in</h1>
      <br></br>
      <button onClick={getUser}>get current user</button>
    </Layout>
  )
}
