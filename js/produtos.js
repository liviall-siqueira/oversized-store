let botaoCompra = document.querySelectorAll('.btn-comprar')



botaoCompra.forEach((botao) => {
    botao.addEventListener('click', () => {
        window.location.href = "../html/cadastro.html"
    });
});