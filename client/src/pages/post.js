import React, { useState } from 'react'
import Layout from '../components/layout'
import axios from 'axios'

export default function Post() {
    const [data, setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/post/create', {data: data})
        //https://javascript.plainenglish.io/object-literals-using-object-property-shorthand-6360825c60ef
    }

    const handleChange = (e) => {
        console.log(typeof e.target.value)
        setData(e.target.value)
    }

    return (
    <Layout>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className='container mt-3' >
        <div className='mb-3'>
            <input type='file' accept='.txt' onChange={handleChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>Post</button>
      </form>
    </Layout>
    )
}
