/* STEP:
1)definire una funzione per generare un numero casuale
2)Generare 5 numeri casuali utilizzando la funzione appena definita
3)inserire in pagina i 5 numeri appena generati
4)definire yna funzione che gestisca il "GIOCO"
5)far partire un timer di 30 secondi e specificare cosa defe fare dopo
6) Al termine degli input  dell'utente, mostrare con un alert o in pagin il risultato-
*/

var numeriDaIndovinare = [];

while (numeriDaIndovinare.length < 5) {
  var numeroRandom = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
  if (!numeriDaIndovinare.includes(numeroRandom)) {
    numeriDaIndovinare.push(numeroRandom);
  }
}

console.log(numeriDaIndovinare);


alert('Miraccomando ricordati questi numeri! \nHai 30 secondi:' + '\n' + numeriDaIndovinare);


setTimeout(richiesta, 5000 );


var numeriUtente =[];

function richiesta() {
  for (var i = 0; i < 5; i++) {
    var chiediNumero = parseInt(prompt('Inserisci un numero!'));
    if (!numeriUtente.includes(chiediNumero) && numeriDaIndovinare.includes(chiediNumero)) {
      numeriUtente.push(chiediNumero);
    }
  }
  console.log(numeriUtente);

  if (numeriUtente.length == 0) {
    console.log('sei scarsissimo, non ne hai azzeccato mezzo')
  } else if (numeriUtente.length == 1) {
    console.log(' Hai indovinato un solo numero ed è: ' + numeriUtente)
  } else if (numeriUtente.length == 5) {
    console.log('Grandissimo, li hai indovinati tutti! Come hai detto tu erano: ' + numeriUtente)
  } else {
    console.log('Hai indovinato ' + numeriUtente.length + ' numeri e sono: ' + numeriUtente);
  }
};
