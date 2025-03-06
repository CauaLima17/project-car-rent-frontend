import fetchData from "../service/api.js"
import { decodeToken } from "../util/token.js"

const handleCarForm = {
  order: {},
  carForm: document.getElementById('formulario_aluguel'),
  fields: document.querySelectorAll('#formulario_aluguel input, select'),
  formError: document.getElementById('formErr'),

  handleSubmit: async () => {
    const URLData = new URLSearchParams(window.location.search)
    handleCarForm.fields[0].value = URLData.get('car_name')

    handleCarForm.carForm.addEventListener('submit', (e) => {
      e.preventDefault()
      handleCarForm.fields.forEach((field) => {
        if (field.id != 'car_name') handleCarForm.order[field.id] = field.value
    })

      handleCarForm.order.car_id = URLData.get('id')
      handleCarForm.order.user_id = decodeToken().id

      fetchData('http://localhost:5000/pedidos', 'POST', JSON.stringify(handleCarForm.order))
      fetchData(`http://localhost:5000/carros/${handleCarForm.order.car_id}`, 'PATCH', JSON.stringify({ user_id: handleCarForm.order.user_id }))
    })
  }
}

export default handleCarForm