import axios from 'axios';
axios.defaults.withCredentials = true;

export async function onRegistration(registrationData) {
    return await axios.post(
        'http://localhost:8000/api/auth/register',
        registrationData
    )
}

export async function onLogout() {
    return await axios.get('http://localhost:8000/api/auth/logout')
}

export async function fetchProtectedData() {
    return await axios.get('http://localhost:8000/api/auth/protected')
}