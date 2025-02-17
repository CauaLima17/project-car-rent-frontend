import fetchData from "./api.js";

const auth = {
    login: async (userData) => {
        const data = fetchData('http://localhost:5000/auth/login', 'POST', userData)
        return data
    },
    cadastro: async (userData) => {
        const data = fetchData('http://localhost:5000/usuarios', 'POST', userData)
        return data
    }
}

export default auth