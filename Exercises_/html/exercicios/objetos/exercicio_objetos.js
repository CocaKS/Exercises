let spaceship = {
    velocity : 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration;
    }
}

function spaceshipRegister() {
    spaceship.name = prompt("Qual o nome da sua nave?");
    spaceship.type = prompt("Qual o tipo da sua nave?");
    spaceship.maxVelocity = Number(prompt("Qual a velocidade máxima da nave? (km/s)")) //em Number, estou dizendo que este valor será um número, e não uma string
}

function speedSecurity() {
    if(spaceship.velocity > spaceship.maxVelocity) {
        spaceship.velocity = spaceship.maxVelocity - 1;
    }
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration);
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nVelocidade atual: " + spaceship.velocity + " km/s" + 
              "\nVelocidade máxima da nave: " + spaceship.maxVelocity + " km/s")
        speedSecurity();
        alert("Procedimento de segurança ativado, nave reduzinho para velocidade segura:" + 
              "\nVelocidade atual: " + spaceship.velocity + " km/s" + 
              "\nVelocidade máxima da nave: " + spaceship.maxVelocity + " km/s")
    }
}

function stop() {
    alert("Nave: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + " km/s" + 
          "\nVelocidade Máxima da nave: " + spaceship.maxVelocity + " km/s")
}

function spaceshipMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja?:\n1- Acelerar?\n2- Parar\n(Informe 1 ou 2)")
        switch(chosenOption) {
            case "1":
                acelerate();
                break;
            case "2":
                stop();
                break
            default:
                alert("Opção inválida") 
        }
    } while (chosenOption != "2")
}

spaceshipRegister();
spaceshipMenu();