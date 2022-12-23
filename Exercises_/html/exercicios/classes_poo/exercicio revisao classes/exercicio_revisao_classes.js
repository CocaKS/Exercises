







//TESTE TESTE TESTE TESTE -----------------------------------------------------------------------------

//esta ERRADO.







class Spaceship {
    static get decelerationRate() {
        return 0.17
    }
    constructor(name, crewQuantity, spaceshipType, spaceshipGuns, spaceshipSeats) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.spaceshipType = spaceshipType
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += (acceleration * (1 - Spaceship.decelerationRate))
    }
}


function spaceshipMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
    chosenOption = prompt("O que deseja fazer?" + 
                                "\n1- Acelerar a nave" + 
                                "\n2- Trocar a nave" + 
                                "\n3- Imprimir e sair")
    }
    return chosenOption
}


function spaceshipRegister() {
    let spaceshipName = prompt("Qual o nome da sua nave?")
    let crewQuantity = prompt("Quantos tripulantes há na sua nave?")
    let spaceshipType = prompt("Qual o tipo da sua nave?\n1- Batalha\n2- Transporte")
  
    if(Spaceship.spaceshipType == "1") {
        let spaceshipGuns = prompt("Quantas armas a nave tem disponíveis?")
        let spaceship = new Spaceship(spaceshipName, crewQuantity, spaceshipType, spaceshipGuns, "")
        return spaceship
    } else if(Spaceship.spaceshipType == "2") {
        let spaceshipSeats = prompt("Quantos assentos a sua nave possui?")
        let spaceship = new Spaceship(spaceshipName, crewQuantity, spaceshipType, "", spaceshipSeats)
        return spaceship
    }
    
}

let chosenOption

while(chosenOption != "4") {
    chosenOption = spaceshipMenu()
    switch(chosenOption) {
        case "1":
            let accelSpaceship = spaceshipRegister()
            let acceleration = prompt("Em quantos km/s deseja acelerar a nave?")
            accelSpaceship.speedUp(acceleration)
            break
        case "2":
            spaceshipRegister()
            break
        case "3":
            console.log("Nave: " + Spaceship.name + 
                        "\nQuantidade de tripulantes: " + Spaceship.crewQuantity + 
                        "\nVelocidade atual: " + Spaceship.currentVelocity + " km/s")
            break
    }
 }