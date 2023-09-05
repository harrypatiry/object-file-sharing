import React, { useState } from 'react'
import Layout from '../components/layout'
import { onRegistration } from '../api/auth'

export default function Register() {
  const [value, setValue] = useState({
    email: '',
    username: '',
    password: ''
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const onChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const {data} = await onRegistration(value)
      setError('')
      setSuccess(data.message)
      setValue({ email: '', username: '', password: '' })
    } catch (err) {
      console.error(err.response.data.errors[0].msg)
      setError(err.response.data.errors[0].msg)
      setSuccess('')
    }
  }
  return (
    <Layout>
      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
        <h1>Register</h1>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>Email: </label>
          <input
            onChange={(e) => onChange(e)}
            type='email'
            className='form-control'
            id='email'
            value={value.email}
            name='email'
            placeholder='example@email.com'
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Username: </label>
          <input
            onChange={(e) => onChange(e)}
            type='username'
            className='form-control'
            id='username'
            value={value.username}
            name='username'
            placeholder='username'
            required
          />
        </div>
        <div className='mb-3'>
          <label>Password: </label>
          <input 
            onChange={(e) => onChange(e)}
            type='password'
            value={value.password}
            className='form-control'
            id='password'
            name='password'
            placeholder='password'
            required
          />
        </div>
        <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>
        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </Layout>
  )
}
