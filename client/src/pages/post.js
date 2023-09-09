import React, { useState } from 'react'
import Layout from '../components/layout'
import onPost from '../api/post'
import axios from 'axios'

export default function Post() {
    const [error, setError] = useState(false)
    const [file, setFile] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     await onPost({data: data})
        //     // dispatch(authenticateUser())
        //     // localStorage.setItem('isAuth', 'true')
        //   } catch (error) {
        //     console.log(error.response.data.errors[0].msg)
        //     setError(error.response.data.errors[0].msg)
        //   }
        const formData = new FormData()
        formData.append("file", file)

        const result = await axios.post('http://localhost:8000/api/post/create', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data)
    }

    const handleChange = (e) => {
        console.log(typeof e.target.files[0])
        setFile(e.target.files[0])
    }

    return (
    <Layout>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className='container mt-3' >
        <div className='mb-3'>
            <input type='file' accept="image/*" filename={file} onChange={handleChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>Post</button>
      </form>
      <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
    </Layout>
    )
}
