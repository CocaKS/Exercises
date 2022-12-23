alert("Bem-Vindo ao cadastro de usuários, respondam conforme a pergunta:");

let nomeMaior = prompt("Qual o nome da pessoa mais velha?");

let idadeMaior = prompt("Qual a idade da pessoa mais velha?");

let nomeMenor = prompt("Qual o nome da pessoa mais nova?");

let idadeMenor = prompt("Qual a idade da pessoa mais nova?");

let idadeDif = (idadeMaior - idadeMenor);

alert(
    "Pessoa mais velha: "+ nomeMaior + "\nIdade" + idadeMaior +
    "\n\nPessoa mais nova: " + nomeMenor + "\nIdade: " + idadeMenor +
    "\n\nDiferença de idade: " + idadeDif + " anos"//  "\n" serve para pular a linha.
    );