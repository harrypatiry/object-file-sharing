import { React, useEffect, useState } from 'react'
import Layout from '../components/layout'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Home() {
  const user = useSelector(x => x.user.user)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    (async function getPosts() {
        const response = await axios.get('http://localhost:8000/api/post/get-posts')
        // console.log(response.data.posts[0])
        setPosts(response.data.posts)
      })()
    }, [])
    console.log(posts[1])

    const listItems = posts.map((post, index) => 
        <li key={index}>
          {post.id}
          {post.title}
          {post.description}
          {post.file_url}
        </li>
      )
  
  return localStorage.getItem('user') ? (
    <Layout>
      <div>home</div>
      <h1>welcome <span>{user}</span></h1>
      <ul>{listItems}</ul>
    </Layout>
  ) : (
    <Layout>
      <div>home</div>
      <h1>not logged in</h1>
    </Layout>
  )
}
