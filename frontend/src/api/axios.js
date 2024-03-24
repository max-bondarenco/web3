import axios from 'axios'

const baseURL = 'https://web-pz2.onrender.com/api'
const baseURLDev = 'http://localhost:1234/api'

export default axios.create({
    baseURL: baseURLDev,
})
