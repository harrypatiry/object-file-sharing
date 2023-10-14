import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import onPost from '../api/post'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Post() {
    const user = useSelector(x => x.user.user)
    const [file, setFile] = useState()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [id, setId] = useState(null)
    const [text, setText] = useState({ 
        title: "",
        description: "" 
    })
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
            formData.append("id", id)
            formData.append("title", text.title)
            formData.append("description", text.description)
            try{
                const {data} = await onPost(formData)
                setSuccess(data.message)
            } catch(err) {
                console.error(err.response.data.errors[0].msg)
                setError(err.response.data.errors[0].msg)
                setSuccess('')
            }
        }
    }

    const handleChange = (e) => {
        console.log(typeof e.target.files[0])
        setFile(e.target.files[0])
    }
    
    const handleTextChange = (e) => {
        setText({...text, [e.target.name]: e.target.value})
    }

    return success ? (
        <Layout>
            <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>
        </Layout>
    ) : (
    <Layout>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className='container mt-3' >
        <div className='mb-3'>
            <input required type='file' accept="image/*" filename={file} onChange={handleChange}/><br />
            <label>title</label><br/>
            <input required type='text' value={text.title} name='title' onChange={handleTextChange}/><br />
            <label>description:</label><br/>
            <textarea type='text' value={text.description} name='description' onChange={handleTextChange}></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>Post</button>
      </form>
      <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
    </Layout>
    )
}
