import fetchData from "./api.js";

const auth = {
    login: async (userData) => {
        const data = fetchData('http://localhost:5000/auth/login', 'POST', userData)
        return data
    },
    register: async (userData) => {
        const data = fetchData('http://localhost:5000/usuarios', 'POST', userData)
        return data
    },
    validateToken: () => {
        const token = localStorage.getItem('userToken')

        if (!token) {
            window.location.href = '/'
        }
    }
}

export default auth