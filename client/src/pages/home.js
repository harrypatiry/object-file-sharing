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

    const listItems = posts.map((post) => 
      <div key={post.id} className="col-sm-6 mb-3 mb-sm-0">
        <div className='card'>
          <div className="card-body">
            <img src={post.file_url} className="card-img-top" style={{overflow: "auto", maxHeight: "150px"}}/>
            <h5 className="card-title">{post.title}</h5>
            <p className='card-text'>{post.description}</p>
          </div>
        </div>
      </div>
    )
  return localStorage.getItem('user') ? (
    <Layout>
      <div>home</div>
      <h1>welcome <span>{user}</span></h1>
          <div className="row">{listItems}</div>
    </Layout>
  ) : (
    <Layout>
      <div>home</div>
      <h1>not logged in</h1>
    </Layout>
  )
}
