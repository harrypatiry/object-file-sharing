import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'

export default function Home() {
  const getUser = () => {
    axios.post('http://localhost:8000/api/auth/me')
  }
  return (
    <Layout>
      <div>home</div>
      <button onClick={getUser}>get current user</button>
    </Layout>
  )
}
