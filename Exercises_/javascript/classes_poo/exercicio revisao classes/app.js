class App {
    constructor() {
        this.spaceship = null
    }

    start() {
        this.spaceshipRegister()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
    }

    spaceshipRegister() {
        let spaceshipName = prompt("Qual o nome da nave?")
        let crewQuantity = prompt("Qual a quantidade de tripulantes?")
        let spaceshipType = this.askForSpaceshipType()
        if(spaceshipType == "1") {
            let weaponsQuantity = prompt("Quantas armas a nave possui?")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let seatsQuantity = prompt("Quantos lugares a nave possui?")
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, seatsQuantity)
        }
    }
    askForSpaceshipType() {
        let chosenOption
        while(!["1", "2"].includes(chosenOption)) { //(o "!" é pra "enquanto nao inclui...") verificar se "chosen option" inclui 1 ou 2 em forma de string (usando propriedade includes do array)
            chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte") //enquanto não digitar 1 ou 2, continuara fazendo esta função (por causa do includes...)
        }
        return chosenOption
    }
    
    showInitialMenu() {
        const promptMessage =   "O que deseja fazer?\n" +
                                "1- Acelerar a nave\n" +
                                "2- Trocar a nave\n" +
                                "3- Imprimir e sair"
        let chosenOption = prompt(promptMessage)
        while(!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFeature(chosenOption) {
        switch(chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.spaceshipRegister()
                break
        }
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("Quanto gostaria de acelerar"))
        this.spaceship.speedUp(acceleration)
    }
    printAndExit() {
        let finalMessage =  "Nome:" + this.spaceship.name + "\n" +
                            "Quantidade de tripulantes: " + this.spaceship.crewQuantity + "\n" +
                            "Velocidade atual:" + this.spaceship.currentVelocity + "\n"
        alert(finalMessage)
    }
}
