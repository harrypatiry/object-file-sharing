import axios from 'axios';
axios.defaults.withCredentials = true;

export async function Registration(registrationData) {
    return await axios.post(
        'http://localhost:8000/api/register',
        registrationData
    )
}

export async function Login(loginData) {
    return await axios.post(
        'http://localhost:8000/api/login',
        loginData
    )
}

export async function Logout() {
    return await axios.post('http://localhost:8000/api/logout')
}

export async function ProtectedData() {
    return await axios.post('http://localhost:8000/api/protected')
}