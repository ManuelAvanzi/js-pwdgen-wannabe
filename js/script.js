// ---------------PASSWORD GENERATOR--------

//  1--- creo 4 variabili vuote :
//              nome
//              cognome
//              colore
//              password

//  2---- creo una variabile conentente il numero 21
//             const num=21;

//  3--- per ogni varibile chiedo al utente di inserire un dato tramite il la funzione prompt();
      // per ogni dato inserito aggiorno la variabile password 
         //   password=password+ contentuto delle variabile nome;
         //   password=password+ contentuto delle variabile cognome;
         //   password=password+ contentuto delle variabile colore;

// 4--- aggiungo a password il contenuto di num
        // password+=num;

    
// stampo il valore tramite innerHTML o textContent;


const passContainer=document.getElementById("passContainer");

//DICHIARO LE VARIABILI
let nome;
let cognome;
let colore;
let password="";
const NUM="21";


nome=prompt("ciao come ti chiami ?");
// aggiorno password e stampo in console cosi da controllare che vada tutto bene.
password=password+nome;
console.log(password);

cognome=prompt(`bene ${nome} , qual'è il tuo cognome ?`);
password=password+cognome;
console.log(password);

colore=prompt("ahhh come il famoso dittatore ... e qual' il tuo colore preferito ?");
password=password+colore;
console.log(password);

// aggiungo la costante 21
password=password+NUM;
console.log(password);

passContainer.innerHTML=`bene bene ecco la tua password:  ${password}`;
