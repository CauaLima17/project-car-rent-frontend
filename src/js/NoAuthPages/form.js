import auth from "../Service/auth.js";

const loginForm = document.getElementById('login')
loginForm.addEventListener('submit', async (e) => {
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
        console.log(data)
        window.location.href = './home.html'
    } else {
        formMessage.textContent = data.error
    }
})

const registerForm = document.getElementById('cadastro')
registerForm.addEventListener('submit', async (e) => {
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
})

const switchFormBTN = document.getElementById('switch-form')
switchFormBTN.addEventListener('click', () => {
    if (loginForm.classList.contains('hidden')) {
        switchFormBTN.textContent = 'Fazer Cadastro'
    } else {
        switchFormBTN.textContent = 'Fazer Login'
    }

    loginForm.classList.toggle('hidden')
    registerForm.classList.toggle('hidden')
})