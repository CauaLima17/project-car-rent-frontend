import auth from './service/auth.js';
import loadCarsMethods from './authPages/loadCars.js';
import handleAuthForm from './noAuthPages/form.js';

//auth.validateToken()

const verifyNavigate = () => {
    const currentLocation = window.location.pathname

    switch(currentLocation) {
        case '/home.html':
            loadCarsMethods.loadHighlightCars()
            break
        case '/ofertas.html':
            loadCarsMethods.loadHighlightCars()
            break
        default:
            handleAuthForm.init()
    }
}

verifyNavigate()