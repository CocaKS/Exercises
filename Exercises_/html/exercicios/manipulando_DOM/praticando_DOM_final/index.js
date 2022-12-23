

function registrarImovel() {
    let tipo = document.querySelector("select[name='tipo']").value
    console.log(tipo)
    let area = document.querySelector("input[name='area']").value
    console.log(area)
    let alugado = document.querySelector("select[name='alugado']").value
    console.log(alugado)

    let newListValue = document.createElement("li")
    newListValue.innerText = "Tipo do imóvel: " + tipo + ". Área do imóvel: " + area + " m². O imóvel encontra-se: " + alugado + ". "

    let removeButton = document.createElement("Button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeImovel(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("listar-imoveis").appendChild(newListValue)
}

function removeImovel(button){
    let liToRemove = button.parentNode
    document.getElementById("listar-imoveis").removeChild(liToRemove)
}