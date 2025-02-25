import auth from './service/auth.js';
import loadCarsMethods from './authPages/loadCars.js';

auth.validateToken()

const verifyNavigate = () => {
    const currentLocation = window.location.href

    switch(currentLocation) {
        case 'home.html':
            loadCarsMethods.loadAllCars()
            break
        case 'ofertas.html':
            loadCarsMethods.loadHighlightCars()
            break
    }
}

verifyNavigate()