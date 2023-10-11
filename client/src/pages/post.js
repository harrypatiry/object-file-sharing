import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import onPost from '../api/post'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Post() {
    const user = useSelector(x => x.user.user)
    const [file, setFile] = useState()
    const [error, setError] = useState(false)
    const [id, setId] = useState(null)
    useEffect(() => {
        (async function getUserId() {
            const response = await axios.get(`http://localhost:8000/api/auth/me/${user}`)
            console.log(response.data.id)
            setId(response.data.id)
        })()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) {
            setError("You must be logged in to post.")
        } else {
            const formData = new FormData()
            formData.append("file", file)
            formData.append("user", user)
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
            <h2>{id}</h2>
            <input type='file' accept="image/*" filename={file} onChange={handleChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>Post</button>
      </form>
      <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
    </Layout>
    )
}
