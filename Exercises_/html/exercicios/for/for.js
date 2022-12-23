let spaceship = prompt("Qual o nome da sua nave?");

let charToReplace = prompt("Qual letra deseja substituir?");

let replacementChar = prompt("Por qual letra deseja substituir a letra mencionada anteriormente?");

let newSpaceship = "";
    

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == charToReplace) {
        newSpaceship += replacementChar;
    }   else {
        newSpaceship += spaceship[i];
    }
}

alert("Novo nome da nave: " + newSpaceship);


// Elemental
// e
// h

// i = 0          E       e       newSpaceship = E
// i = 1          l       e       newSpaceship = El
// i = 2          e       e       newSpaceship = Elh

// ....

// i = 8          l       e       newSpaceship = Elhmhntal