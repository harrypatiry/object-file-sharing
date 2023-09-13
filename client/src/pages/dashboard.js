import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProtectedData, onLogout } from '../api/auth'
import Layout from '../components/layout'
import { logout } from '../redux/slices/userSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [protectedData, setProtectedData] = useState(null)

  const handleLogout = async (e) => {
    try {
      e.preventDefault()
      await onLogout()

      dispatch(logout())
      // localStorage.removeItem('user')
    } catch (error) {
      console.log(error.response)
    }
  }

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedData()

      setProtectedData(data.info)

      setLoading(false)
    } catch (error) {
      handleLogout()
      console.log(error)
    }
  }

  useEffect(() => {
    protectedInfo()
  }, [])

  return loading ? (
    <Layout>
      <h1>Loading...</h1>
    </Layout>
  ) : (
    <div>
      <Layout>
        <h1>Dashboard</h1>
        <h2>{protectedData}</h2>

        <button onClick={(e) => handleLogout(e)} className='btn btn-primary'>
          Logout
        </button>
      </Layout>
    </div>
  )
}

export default Dashboard
