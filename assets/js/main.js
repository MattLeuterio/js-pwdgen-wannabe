// Ottenere Nome, Cognome, Colore Preferito, anno di nascita dall'Utente
  
  var nome = prompt('Inserisci il tuo nome', 'Nome');
  var cognome = prompt('Inserisci il tuo cognome', 'Cognome');
  var colorepref = prompt('Inserisci il tuo colore preferito', 'Verde');
  var anno = prompt('Inserisci il tuo anno di nascita', '1991');
  // Assegna un numero Random per aumentare la sicurezza
  var randomNum = Math.floor((Math.random() * 1000) + 1); 

  console.log(nome, cognome, colorepref, anno);
  
// Ottenere orario dal sistema

// Generare password

document.getElementById('ut-nome').innerHTML = nome + ' ' + cognome;
document.getElementById('ut-colorepref').innerHTML = colorepref;
document.getElementById('ut-anno').innerHTML = anno;
document.getElementById('passgen').innerHTML = nome + cognome + colorepref + anno + randomNum;




// Trasforma il risultato tutto in LOWERCASE
var lowerCase = document.getElementById('passgen').innerHTML;
document.getElementById('passgen').innerHTML = lowerCase.toLowerCase();