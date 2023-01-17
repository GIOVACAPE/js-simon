/* STEP:
1)definire una funzione per generare un numero casuale
2)Generare 5 numeri casuali utilizzando la funzione appena definita
3)inserire in pagina i 5 numeri appena generati
4)definire yna funzione che gestisca il "GIOCO"
5)far partire un timer di 30 secondi e specificare cosa defe fare dopo
6) Al termine degli input  dell'utente, mostrare con un alert o in pagin il risultato-
*/

function getRandomNumber(min, max) {
    return Math.floor(math.random() * (max - min + 1)) + min;   
}

const numbers = [];

for (let i = 0; i < 5;  i++) {
    const randomNumber = getRandomNumber(1, 99);
    console.log(randomNumber);

    numbers.push(randomNumber);
    
}

console.log(numbers);

const numbersContainer = document.getElementById('numbers-container');
numbersContainer.innerHTML = numbers;