import fetchData from "../service/api.js"

const loadCarsMethods = {
    catalog: document.getElementById('catalogo'),
    highlightOffers: document.getElementById('destaques'),

    loadAllCars: async () => {
        const cars = fetchData('http://localhost:5000/carros')
    },
    loadCarById: async (id) => {
        console.log('Carregando carro com id: ' + id)
    },
    loadHighlightCars: async () => {
        const cars = await fetchData('http://localhost:5000/carros')
        console.log(cars)
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div')
            div.classList.add('max-w-[420px]', 'max-h-[420px]')
            div.innerHTML = `
                <img class='w-full h-full object-cover rounded-lg' src='${cars[i].car_img}' alt='carro' />
                <h3 class='text-[24px] font-medium'>${cars[i]._brand}</h3>
            `

            console.log(cars)
            loadCarsMethods.highlightOffers.appendChild(div)
        }
    }
}

export default loadCarsMethods;