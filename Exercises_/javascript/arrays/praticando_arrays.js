const hitchedSpaceships = [ //[nome da nave, tripulantes, engate concluido ou não.]
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let with9Plus = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9 //filtrando as naves de hitchedSpaceships com a posição 1 das arrays (tripulantes) e quais tem mais que 9.
}).map(spaceship => { //pega um callback e retorna a array que contem o resultado da filtragem acima, da maneira informada (spaceship[0] pegar o nome da nave, posição 0.)
    return spaceship[0]
})

console.log(with9Plus);

let firstPendentSpaceship = hitchedSpaceships.findIndex(spaceship => { //findIndex retorna o indice de um filtro ao invez do elemento do array
    return spaceship[2] == false
})

//console.log(firstPendentSpaceship);

let upperCasedSpaceships = hitchedSpaceships.map(spaceship => {
    let upcased = spaceship[0].toUpperCase();
    return upcased;
})

console.log(upperCasedSpaceships)

let message = "Spaceships with 9 or more tripulants: " + with9Plus.join(", ");
    message += "\nFirst ongoingHitch spaceship is on platform: " + (firstPendentSpaceship + 1);
    message += "\nUpper cased spaceships: " + upperCasedSpaceships.join (", ");

//alert(message);