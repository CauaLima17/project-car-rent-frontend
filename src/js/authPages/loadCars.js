import fetchData from "../service/api"

const loadCarsMethods = {
    catalog: document.getElementById('catalogo'),
    highlightOffers: document.getElementById('destaques'),

    loadAllCars: async () => {
        const cars = fetchData('http://localhost:5000/carros')
        console.log(cars)
    },
    loadCarById: async (id) => {
        console.log('Carregando carro com id: ' + id)
    },
    loadHighlightCars: async () => {
        console.log('Carregando carros destaque')
    }
}

export default loadCarsMethods;