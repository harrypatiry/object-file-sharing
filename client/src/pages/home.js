import React from 'react'
import Layout from '../components/layout'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector(x => x.user.user)
  
  return localStorage.getItem('user') ? (
    <Layout>
      <div>home</div>
      <h1>welcome <span>{user}</span></h1>
    </Layout>
  ) : (
    <Layout>
      <div>home</div>
      <h1>not logged in</h1>
    </Layout>
  )
}
