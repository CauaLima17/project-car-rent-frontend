const handleCarForm = {
  carForm: document.getElementById('formulario_aluguel'),
  fields: document.querySelectorAll('#formulario_aluguel input, select'),

  handleSubmit: () => {
    handleCarForm.carForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const orders = {}
      fields.forEach((field) => {
        
      })
    })
  }
}

export default handleCarForm