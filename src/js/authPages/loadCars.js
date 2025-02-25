const loadCarsMethods = {
    loadAllCars: async () => {
        console.log('Carregando todos os carros')
    },
    loadCarById: async (id) => {
        console.log('Carregando carro com id: ' + id)
    },
    loadHighlightCars: async () => {
        console.log('Carregando carros destaque')
    }
}

export default loadCarsMethods;