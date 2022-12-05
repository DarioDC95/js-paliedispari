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

// definisco i pulsanti e il bottone
let even_radio = document.getElementById("even");
let odd_radio = document.getElementById("odd");
let verifyButton = document.getElementById("verify");

// Prevedo l'evento
verifyButton.addEventListener('click', function(){
    let answerOK = document.getElementById('answer');

    // Inserisco il mio numero
    let player_num = parseInt(document.getElementById("mynumber").value);
    
    // verifico che sia inserito un valore valido
    if (player_num >= 1 && player_num <= 5) {

        // Definisco il numero casuale del computer
        let computer_num = random_num(1, 5);
        document.getElementById("computer").innerText = "Il computer ha estratto il n°" + " " +computer_num;
        document.getElementById("computer").classList.remove('opacity-0')
        
        // Fare la somma
        somma = somma_num(player_num, computer_num);
        console.log(somma);
        
        // Decidere chi ha vinto in base alla scelta effettuata tra Pari e Dispari
        if (even_radio.checked && somma % 2 === 0) {
            answerOK.innerText = "player won"
            answerOK.classList.remove('opacity-0');
        }
        else if (odd_radio.checked && somma % 2 === 0) {
            answerOK.innerText = "player lost"
            answerOK.classList.remove('opacity-0');
        }
        else if (even_radio.checked && somma % 2 != 0) {
            answerOK.innerText = "player lost"
            answerOK.classList.remove('opacity-0');
        }
        else {
            answerOK.innerText = "player won"
            answerOK.classList.remove('opacity-0');
        }
    }
    else {
        alert("inserisci un valore valido");
    }
    
})
