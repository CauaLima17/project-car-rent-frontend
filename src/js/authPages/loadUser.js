import fetchData from "../service/api.js";
import { createCarUserCard } from '../util/carsComponents.js'
import { decodeToken } from "../util/token.js";

const loadUserData = {
  decodedToken: decodeToken(),
  logoutElement: document.getElementById('logout'),
  usernameElement: document.getElementById('nome_do_usuario'),
  userEmailElement: document.getElementById('email_do_usuario'),
  userRentsContainer: document.getElementById('alugueis_do_usuario'),
  noCarsRentedTitle: document.getElementById('nenhum_carro_alugado'),

  loadData: () => {
    loadUserData.usernameElement.textContent = loadUserData.decodedToken.username
    loadUserData.userEmailElement.textContent = loadUserData.decodedToken.email

    loadUserData.loadRents()
    loadUserData.logout()
  },

  loadRents: async () => {
    const cars = await fetchData(`http://localhost:5000/carros/usuario/${loadUserData.decodedToken.id}`)
    if (cars.length === 0) {
      loadUserData.noCarsRentedTitle.classList.remove('hidden')
    } else {
      loadUserData.noCarsRentedTitle.classList.add('hidden')
      cars.map((car) => createCarUserCard(car, loadUserData.userRentsContainer))
      
    }
  },

  logout: () => {
    loadUserData.logoutElement.addEventListener('click', () => {
      localStorage.removeItem('userToken')
    })
  }
}

export default loadUserData