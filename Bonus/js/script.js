// compongo una password di sei caratteri estrando a sorte tra i caratteri inseriti dal utente 
// cosi da creare una password che sia memorizzabile come un colore 
// stampo a video il colore e la password 

const validCharSet=['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
const illegalCharSet=['g','h','i','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
const box=document.getElementById("box");



const button=document.getElementById("restart").addEventListener("click",function(){


 
let firstName=prompt("Inserisci il tuo nome");
let lastName=prompt("Inseirsci il tuo cognome");
let year=prompt("Inserisci l'anno di nascita");


  // controllo che l'età sia un numero plausibile
while(parseInt(year)>2020 || parseInt(year)<1800){
    year=prompt("sei sicuro ?? inserisci una data valida");
}

let grezza=firstName+lastName+year;   // password grezza 
let passwordEx=[];



//copio la password nel array 
for(let i=0;i<grezza.length;i++){
    passwordEx[i]=grezza[i];
}



                  
 // ELABORO LA PASSWORD GREZZA PER SOSTITUIRE I CARATTERI NON VALIDI

for(let i=0;i<passwordEx.length;i++){
    for(let x=0;x<illegalCharSet.length;x++){

         //se un valore non è un carattere valido in esadecimale lo sostituisco con un valido 
         // estratto casualmente dalla lista dei caratteri validi 
         
       if(passwordEx[i]==illegalCharSet[x]){
           passwordEx[i]=validCharSet[Math.floor(Math.random()*validCharSet.length)];;
       }
    }
}


let colorPass="#";
for(let i=0;i<6;i++){
    //estraggo sei volte un carattere per comporre il colore 
      colorPass=colorPass+passwordEx[Math.floor(Math.random()*passwordEx.length)];
}

box.style.backgroundColor=colorPass.toUpperCase();
document.getElementById("pass").textContent=colorPass.toUpperCase();
console.log(`la passColor generata dal tuo nome , il tuo cognome e il tuo anno di nascita è ${colorPass}`);

});