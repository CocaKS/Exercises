let spaceshipName = prompt("Qual é o nome da nave?");

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i--) {//pega o length total e subtrai 1, ou seja vai de traz pra frente, além de atribuir (i--), diminuindo e indo de traz pra frente.
    if(spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

console.log(invertedName)
alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: "  + invertedName)

// S u p e r n o v a   9 caracs
// 0 1 2 3 4 5 6 7 8

