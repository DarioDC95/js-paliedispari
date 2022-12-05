// Identifico il bottone
let verifyButton = document.getElementById('verify');

// Identifico la formula per verificare la parola palindroma
function palindromaCheck(inp) {
    let wordString = [];
    for (i = 0; i < inp.length; i++) {
        wordString.push(inp[i]);
    }
    let stringWord = wordString.reverse();
    let stringWordOK = stringWord.join('');
    let answer = false;
    if (inp === stringWordOK) {
        answer = true
    }
    return answer;
}

// Prevedeo l'evento
verifyButton.addEventListener('click', function() {
    let input = document.getElementById("word").value;
    let answerOK = document.getElementById('answer');
    let result;

    // prevedo il non aver inserito nulla
    if (input == '') {
        alert('Cerca di inserire una parola palindroma');
    }

    // stampo a schermo la risposta
    else {
        result = palindromaCheck(input.toLowerCase());
        if (result) {
            answerOK.innerText = "La tua parola E\' Palindroma";
            answerOK.classList.remove('opacity-0');
        }
        else {
            answerOK.innerText = "La tua parola NON è Palindroma";
            answerOK.classList.remove('opacity-0');
        }
    };
});