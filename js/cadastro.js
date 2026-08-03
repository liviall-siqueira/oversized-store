import { buscarCep } from "../js/viacep.js";

let form = document.querySelector('.form-cadastro')
let formCep = document.querySelector('#cep')

formCep.addEventListener('blur', async() => {
    if(!formCep.value) return

    try {
        let endereco = await buscarCep(formCep.value)
        document.querySelector('#rua').value = endereco.logradouro
        document.querySelector('#bairro').value = endereco.bairro
        document.querySelector('#cidade').value= endereco.localidade
        document.querySelector('#estado').value = endereco.uf
    } catch(error) {
        console.error(error.message)
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    alert('Cadastro realizado com sucesso!')
    window.location.href = "../html/inicio.html"
})
