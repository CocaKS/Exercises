//lista de casas com 4 infos: numero, bairro, cidade, e área da casa
//botao adicionar abaixo e deve adicionar numa lista logo abaixo do form.
//botao remover quando a info for listada e o elemento é removido da lista -------------- usar createElement, setAttribute, removeChild, parentNode
//criar o form, criuar a funcao que adiciona os elementos na lista, criar a funcao de remover, testar.

function saveRegister() {

    let numero = document.querySelector("input[name='numero_casa']").value
    let bairro = document.querySelector("input[name='bairro']").value
    let cidade = document.querySelector("input[name='cidade']").value
    let area = document.querySelector("input[name='area_casa']").value

    let newListValue = document.createElement("li")
    newListValue.innerText = "Número da casa: " + numero + ", Bairro: " + bairro + ", Cidade: " + cidade + ", área: " + area + " m² " //inner text é o que sera colocado dentro da tag em texto

    let removeButton = document.createElement("Button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("listar-casas").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("listar-casas").removeChild(liToRemove)
}
