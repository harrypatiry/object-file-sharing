import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar';

const Private = () => {
  const isAuth = false 

  return <>{isAuth ? <Outlet /> : <Navigate to='/login'/>}</>
}

const Restricted = () => {
  const isAuth = false 

  return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard'/>}</>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
