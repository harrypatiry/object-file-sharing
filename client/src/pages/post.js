import React, { useState } from 'react'
import Layout from '../components/layout'
import onPost from '../api/post'
import axios from 'axios'

export default function Post() {
    const [file, setFile] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        await onPost(formData)

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
    </Layout>
    )
}
