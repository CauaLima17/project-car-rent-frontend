import fetchData from "../service/api.js"
import { createCarBuyCard, createCarOverview } from '../util/carsComponents.js'

const loadCarsMethods = {
    catalog: document.getElementById('catalogo'),
    highlightOffers: document.getElementById('destaques'),
    carOverview: document.getElementById('detalhes-carro-container'),

    loadAllCars: async () => {
        const cars = await fetchData('http://localhost:5000/carros')
        cars.map((car) => createCarBuyCard(car, loadCarsMethods.catalog))
    },
    loadCarById: async (id) => {
        const car = await fetchData(`http://localhost:5000/carros/${id}`)
        car.map((details) => createCarOverview(details, loadCarsMethods.carOverview))
    },
    loadHighlightCars: async () => {
        const cars = await fetchData('http://localhost:5000/carros')
        const highLightCars = cars.slice(0, 3);
        highLightCars.map((car) => createCarBuyCard(car, loadCarsMethods.highlightOffers))
    }
}

export default loadCarsMethods;