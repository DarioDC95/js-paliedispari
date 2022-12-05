// Faccio la funzione per il numero casuale e la somma
function random_num(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

let somma;

function somma_num(num1, num2) {
    somma = num1 + num2;
    return somma;
};

// Scelgo se Pari o Dispari
let array = ["pari", "dispari"];
let choice = (prompt("Scegli Pari o Dispari?")).toLowerCase();
let index = 0;

// verifico che sia inserito un valore valido
while (index < array.length) {
    if (array.includes(choice)) {
        index = array.length
    }
    else {
        alert("inserisci un valore valido");
        choice = (prompt("Scegli Pari o Dispari?")).toLowerCase();
    }
};

console.log(choice);
// Inserisco il mio numero
let player_num = parseInt(prompt("Scengli un numero da 1 a 5"));
let beta = 0;

// verifico che sia inserito un valore valido
while (beta < 5) {
    if (player_num >= 1 && player_num <= 5) {
        beta = 5;
    }
    else {
        alert("inserisci un valore valido");
        player_num = parseInt(prompt("Scengli un numero da 1 a 5"));
    }
};

console.log(player_num);
// Definisco il numero casuale del computer
let computer_num = random_num(1, 5);

console.log(computer_num);
// Fare la somma
somma = somma_num(player_num, computer_num);

console.log(somma)
// Decidere chi ha vinto in base alla scelta effettuata tra Pari e Dispari

