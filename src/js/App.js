import auth from './service/auth.js';
import loadCarsMethods from './AuthPages/loadCars.js';
import handleAuthForm from './noAuthPages/form.js';
import loadUserData from './AuthPages/loadUser.js';
import handleCarForm from './AuthPages/carForm.js'

auth.validateToken()

const verifyNavigate = () => {
    const currentLocation = window.location.pathname

    switch(currentLocation) {
        case '/home.html':
            loadCarsMethods.loadHighlightCars()
            break
        case '/ofertas.html':
            loadCarsMethods.loadAllCars()
            loadCarsMethods.loadHighlightCars()
            break
        case '/carro.html':
            const id  = new URLSearchParams(window.location.search).get('id')
            loadCarsMethods.loadCarById(id)
            break
        case '/perfil.html':
            loadUserData.loadData()
            break
        case '/form.html':
            handleCarForm.handleSubmit()
            break
        default:
            handleAuthForm.init()
    }
}

verifyNavigate()