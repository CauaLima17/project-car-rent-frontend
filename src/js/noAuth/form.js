import auth from "../service/auth.js";

const loginForm = document.getElementById('login')
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userData = {}
    
    const fields = document.querySelectorAll('#login input')
    fields.forEach((field) => {
        userData[field.id] = field.value
    })

    const data = await auth.login(JSON.stringify(userData))
    console.log(data)
    if (data.token) {
        localStorage.setItem('userToken', data.token)
    } else {
        const formErr = document.getElementById('logFormErr')
        formErr.textContent = data.error
    }
})

const registerForm = document.getElementById('cadastro')
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userData = {}

    const fields = document.querySelectorAll('#cadastro input')
    fields.forEach((field) => {
        userData[field.id] = field.value
    })

    const data = await auth.cadastro(JSON.stringify(userData))
    if (data.error) {
        const formErr = document.getElementById('formErr')
        formErr.textContent = data.error
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