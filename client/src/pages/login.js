import React, { useState } from 'react'
import Layout from '../components/layout'
import { onLogin } from '../api/auth'
import { useDispatch } from 'react-redux'
import { authenticateUser } from '../redux/slices/authSlice'

export default function Login() {
  const [value, setValue] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const onChange = (e) => {
    setValue({...value, [e.target.name]: e.target.value})
  }

  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await onLogin(value)
      dispatch(authenticateUser())
      localStorage.setItem('isAuth', 'true')
    } catch (error) {
      console.log(error.response.data.errors[0].msg)
      setError(error.response.data.errors[0].msg)
    }
  }
  return (
    <Layout>
      <form onSubmit={(e) => onSubmit(e)} className='container mt-3'>
        <h1>Login</h1>
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
        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </Layout>
  )
}
