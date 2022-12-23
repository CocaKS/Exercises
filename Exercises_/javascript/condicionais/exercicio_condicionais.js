alert("Olá Piloto")

let nome = prompt("Qual seu nome?");
let velocity = 0;
let newVelocity = prompt("A que velocidade você gostaria de acelerar a nave?");
let confirmVelocity = confirm("Estamos indo para " + newVelocity + "km/s");

if(confirmVelocity) {
    velocity = newVelocity
} 

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if(velocity < 40) {
        alert("Você está devagar. Podemos aumentar mais a velocidade.")
} else if(velocity < 80) {
            alert("Parece uma boa velocidade para manter.")
} else if(velocity < 100) {
                alert("Velocidade alta. Considere diminuir.")
} else {
                alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: " + nome + "\nVelocidade atual: " + velocity + "Km/s");
           


















