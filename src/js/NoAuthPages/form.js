import auth from "../service/auth.js";

const handleAuthForm = {
    loginForm: document.getElementById('login'),
    registerForm: document.getElementById('cadastro'),
    switchFormBTN: document.getElementById('switch-form'),

    handleLogin: async (e) => {
        e.preventDefault()
        const userData = {}
        const formMessage = document.getElementById('logFormErr')
        const fields = document.querySelectorAll('#login input')

        fields.forEach((field) => {
            userData[field.id] = field.value
        })

        const data = await auth.login(JSON.stringify(userData))

        if (data.token) {
            localStorage.setItem('userToken', data.token)
            window.location.href = '/home.html'
        } else {
            formMessage.textContent = data.error
        }
    },

    handleRegister: async (e) => {
        e.preventDefault()
        const userData = {}
        const formMessage = document.getElementById('cadFormErr')
        const fields = document.querySelectorAll('#cadastro input')
    
        fields.forEach((field) => {
            userData[field.id] = field.value
        })
    
        if (userData.password !== userData.retrypassword) {
            formMessage.classList.replace('text-green-400', 'text-red-400')
            formMessage.textContent = 'As senhas não coincidem'
            return
        }
    
        const data = await auth.register(JSON.stringify(userData))
    
        if (data.error) {
            formMessage.classList.replace('text-green-400', 'text-red-400')
            formMessage.textContent = data.error
        } else if (data.message) {
            formMessage.classList.replace('text-red-400', 'text-green-400')
            formMessage.textContent = data.message
        }
    },

    handleSwitchForm: (e) => {
        if (handleAuthForm.loginForm.classList.contains('hidden')) {
            handleAuthForm.switchFormBTN.textContent = 'Fazer Cadastro'
        } else {
            handleAuthForm.switchFormBTN.textContent = 'Fazer Login'
        }
    
        handleAuthForm.loginForm.classList.toggle('hidden')
        handleAuthForm.registerForm.classList.toggle('hidden')
    },

    init: () => {
        handleAuthForm.loginForm.addEventListener('submit', handleAuthForm.handleLogin)
        handleAuthForm.registerForm.addEventListener('submit', handleAuthForm.handleRegister)
        handleAuthForm.switchFormBTN.addEventListener('click', handleAuthForm.handleSwitchForm)
    }
}

export default handleAuthForm
