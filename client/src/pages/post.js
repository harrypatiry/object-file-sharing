import React, { useState } from 'react'
import Layout from '../components/layout'
import onPost from '../api/post'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Post() {
    const [file, setFile] = useState()
    const [error, setError] = useState(false)
    const {isAuth} = useSelector(state => state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!isAuth) {
            setError("You must be logged in to post.")
        } else {
            const formData = new FormData()
            formData.append("file", file)
            await onPost(formData)
        }
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
