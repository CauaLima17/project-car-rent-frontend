import fetchData from "../service/api.js"

function createCarCard(cars, container) {
    const carContainer = document.createElement('div')
        carContainer.classList.add('max-w-[420px]')
        carContainer.innerHTML = `
        <div class="w-full h-[320px] mb-4">
            <img class="w-full h-full object-cover rounded-lg" src="${cars.car_img}" alt="carro" />
        </div>
        <span class='flex justify-between items-center'>
            <h3 class="text-[24px] font-medium">${cars._model}</h3>
            <a class='duration-200 font-medium text-[24px] p-2 bg-green-600 rounded-md text-white hover:bg-green-800' href='/carro.html?id=${cars._id}'>Mais detalhes</a>
        </span>
    `
    container.appendChild(carContainer)
}

function createCarOverview(details) {
    const carDetails = document.createElement('div')
            carDetails.classList.add('grid', 'grid-cols-[2fr_1fr]', 'gap-10')
            carDetails.innerHTML = `
                <div class='duration-200 relative'>
                    <img class='h-[500px] w-full rounded-2xl object-cover' src='${details.car_img}'/>
                    <p class='absolute bg-black text-white px-4 py-2 top-5 right-0 text-[24px] rounded-l-2xl'>R$ ${details.category._daily_rate},00</p>
                </div>
                <div class='flex flex-col justify-between'>
                    <div>
                        <h1 class='font-bold text-[48px] mb-2'>${details._model}</h1>
                        <p class='font-medium text-gray-600 text-[16px]'>Categoria ${details.category._name}</p>
                    </div>

                    <div>
                        <h2 class='font-medium text-[24px] mb-2'>Descrição</h2>
                        <p class='text-[16px] text-gray-600'>${details.description}</p>
                    </div>

                    <a class='block self-start p-4 font-medium text-[24px] bg-green-600 text-white rounded-md' href='/form.html?id=${details._id}'>Quero alugar</a>
                </div>
            `
            loadCarsMethods.carOverview.appendChild(carDetails)
}

const loadCarsMethods = {
    catalog: document.getElementById('catalogo'),
    highlightOffers: document.getElementById('destaques'),
    carOverview: document.getElementById('detalhes-carro-container'),

    loadAllCars: async () => {
        const cars = await fetchData('http://localhost:5000/carros')
        console.log(cars)
    },
    loadCarById: async (id) => {
        const car = await fetchData(`http://localhost:5000/carros/${id}`)
        car.map((details) => createCarOverview(details))
    },
    loadHighlightCars: async () => {
        const cars = await fetchData('http://localhost:5000/carros')
        cars.map((car) => createCarCard(car, loadCarsMethods.highlightOffers))
    }
}

export default loadCarsMethods;