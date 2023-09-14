import './App.css';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard';
import Post from './pages/post';
import { useSelector } from 'react-redux';

const Private = () => {
  const user = useSelector(x => x.user.user)

  return <>{user ? <Outlet /> : <Navigate to='/login'/>}</>
}

const Restricted = () => {
  const user = useSelector(x => x.user.user)

  return <>{!user || user === null ? <Outlet /> : <Navigate to='/'/>}</>
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<Private/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route element={<Restricted/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        <Route path='/post' element={<Post/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
