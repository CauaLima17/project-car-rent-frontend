export function createCarBuyCard(cars, container) {
  const carContainer = document.createElement('div')
      carContainer.classList.add('max-w-[420px]', 'mb-4')
      carContainer.innerHTML = `
      <div class="relative w-full h-[320px] mb-4">
          <img class="w-full h-full object-cover rounded-lg" src="${cars.car_img}" alt="carro" />
          <p class='absolute bg-black text-white p-2 top-5 right-0 rounded-l-2xl'>R$ ${cars.category._daily_rate},00</p>
      </div>
      <span class='flex justify-between items-center'>
          <span>
              <h3 class="text-[24px] font-medium">${cars._model}</h3>
              <p class="font-medium text-gray-600">${cars.category._name}</p>
          </span>
          <a class='duration-200 font-medium text-[24px] p-2 bg-green-600 rounded-md text-white hover:bg-green-800' href='/carro.html?id=${cars._id}'>Mais detalhes</a>
      </span>
  `
  container.appendChild(carContainer)
}

export function createCarOverview(details, container) {
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
          container.appendChild(carDetails)
}

export function createCarUserCard(details, container) {
  const carDetails = document.createElement('div')
          carDetails.innerHTML = `
              <div class='duration-200 relative mb-4'>
                  <img class='h-[400px] w-full rounded-2xl object-cover' src='${details.car_img}'/>
                  <p class='absolute bg-black text-white px-4 py-2 top-5 right-0 text-[24px] rounded-l-2xl'>R$ ${details.category._daily_rate},00</p>
              </div>
              <div>
                  <div class='mb-4'>
                      <h1 class='font-bold text-[48px] mb-2'>${details._model}</h1>
                      <p class='font-medium text-gray-600 text-[16px]'>Categoria ${details.category._name}</p>
                  </div>

                  <div class='mb-10'>
                      <h2 class='font-medium text-[24px] mb-2'>Descrição</h2>
                      <p class='text-[16px] text-gray-600'>${details.description}</p>
                  </div>

                  <a class='duration-200 block p-4 font-medium text-[24px] bg-red-600 hover:bg-red-800 text-white rounded-md' href='/'>Cancelar</a>
              </div>
          `
          container.appendChild(carDetails)
}