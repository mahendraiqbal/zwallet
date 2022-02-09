import axios from 'axios';

export const login = (body) => {
    const urlLogin = process.env.NEXT_PUBLIC_API_URL + '/auth/login'
    return axios.post(urlLogin, body)
}

export const register = (body) => {
    const urlRegister = process.env.NEXT_PUBLIC_API_URL + '/auth/register'
    return axios.post(urlRegister, body)
}