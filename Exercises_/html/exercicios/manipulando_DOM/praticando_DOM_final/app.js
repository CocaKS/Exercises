class App {
    addImovel() {
        event.preventDefault() //evitar que a pagina recarregue ao dar submit
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        let imovel = new Imovel(kind, area, rented)
        this.addOnImovelList(imovel)
        this.cleanForm()
    }

    addOnImovelList(imovel) {
        let newListValue = document.createElement("li")
        let imovelInfo = " Tipo do imóvel: " + imovel.kind + ".    (Área do imóvel: " + imovel.area + " m²) "

        if(imovel.rented) {
            let rentedMark = this.createRentedMark()
            newListValue.appendChild(rentedMark)
          }
          newListValue.innerHTML += imovelInfo
          let buttonToRemove = this.createRemoveButton()
          newListValue.appendChild(buttonToRemove)
          document.getElementById("imoveis").appendChild(newListValue)
        }

        createRentedMark() {
            let rentedMark = document.createElement("span")
            rentedMark.style.color = "white"
            rentedMark.style.backgroundColor = "red"
            rentedMark.innerText = "ALUGADO"
            return rentedMark
          }

        
        createRemoveButton() {
            let buttonToRemove = document.createElement("button")
            buttonToRemove.setAttribute("onclick", "app.remove()")
            buttonToRemove.innerText = "Remover"
            return buttonToRemove
        }

        cleanForm() {
            document.querySelector("input[name='area']").value = ""
            document.querySelector("input[name='rented']").checked = false
        }

        remove() {
            let liToRemove = event.target.parentNode
            document.getElementById("imoveis").removeChild(liToRemove)
        }
    }
