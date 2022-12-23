let spaceship = prompt("Olá, qual o nome da sua nave?")

let count = 0;

let chosenOption = prompt("Deseja entrar na dobra espacial?\n1- Sim\n2- Não\nDigite 1 ou 2");

while(chosenOption == 1) {
    count += 1;
    console.log(count);
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não\nDigita 1 ou 2")
}

alert("Nome da nave: " + spaceship + "\nDobras espaciais realizadas: " + count + " dobras")