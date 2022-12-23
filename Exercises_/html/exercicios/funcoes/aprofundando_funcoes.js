function slowDownVelocity(spaceshipVelocity, printer) { //printer = callback. Iso é uma função de alta classe. HOF.
    let deceleration = 20;

    while(spaceshipVelocity > 0) {
        printer(spaceshipVelocity);
        spaceshipVelocity -= deceleration;
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocityI = 150;

slowDownVelocity(spaceshipVelocityI, function(spaceshipVelocity) {
    console.log("velocidade atual:" + spaceshipVelocity + "km/s");
})

