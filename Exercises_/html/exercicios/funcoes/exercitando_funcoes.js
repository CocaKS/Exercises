let spaceship = prompt("Olá, qual o nome da sua nave?");

let velocity = 0;

let chosenOption;

function menuNave() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
                        "1- Acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair de programa")
    }

    return option
}

function speedUp(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
}

function slowDownSpeed(velocity) {
    let newVelocity = velocity - 5;
    if(newVelocity < 0) {
        newVelocity = 0;
    }
    return newVelocity;
}

function imprimiDados(spaceship, velocity) {
    alert("Nave: " + spaceship + "\nVelocidade: " + velocity);
}

do {
    chosenOption = menuNave()
    switch(chosenOption) {
        case "1":
            velocity = speedUp(velocity);
            break
        case "2":
            velocity = slowDownSpeed(velocity);
            break
        case "3":
            imprimiDados(spaceship, velocity);
            break
        default:
            alert("Encerrando programa de bordo");
    } 
} while(chosenOption != "4")

