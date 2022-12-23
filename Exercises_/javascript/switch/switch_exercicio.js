let distanceYL = prompt("Qual a distância em anos luz?");

let parameter = prompt("Para qual unidade de medida você deseja converter?\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(Km)");


let chosenParameter

let distanceConverted



switch(parameter) {
    case "1":
        chosenParameter = "Parsec";
        distanceConverted = (distanceYL * 0,306601);
        break
    case "2":
        chosenParameter = "Unidade astronômica";
        distanceConverted = (distanceYL * 63241,1);
        break
    case "3":
        chosenParameter = "Quilômetros";
        distanceConverted = (distanceYL * (9,5*(Math.pow( 10 , 12))))
        break
    default:
        alert("Error");
}

alert("Distância em anos luz: " + distanceYL + "\nConversão desejada: " + chosenParameter + "\nDistância convertida: " + distanceConverted);