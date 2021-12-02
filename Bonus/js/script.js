// compongo una password di sei caratteri estrando a sorte tra i caratteri inseriti dal utente 
// cosi da creare una password che sia memorizzabile come un colore 
// stampo a video il colore e la password 

const unvalidChar=['g','h','i','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];

const button=document.getElementById("restart").addEventListener("click",function(){

const box=document.getElementById("box");


let firstName=prompt("Inserisci il tuo nome");
let lastName=prompt("Inseirsci il tuo cognome");
let Year=prompt("Inserisci l'anno di nascita");

let grezza=firstName+lastName+Year;   // password grezza 

let passwordEx=[];



//copio la password nel array 
for(let i=0;i<grezza.length;i++){
    passwordEx[i]=grezza[i];
}



 // ELABORO LA PASSWORD GREZZA PER SOSTITUIRE I CARATTERI NON VALIDI
for(let i=0;i<passwordEx.length;i++){
    for(let x=0;x<unvalidChar.length;x++){
       if(passwordEx[i]==unvalidChar[x]){
           // se è tra quelli non validi brutalmente lo sostituisco con A
           passwordEx[i]="A";
       }
    }
}


let colorPass="#";
for(let i=0;i<6;i++){
    //estraggo sei volte un carattere per comporre il colore 
      colorPass=colorPass+passwordEx[Math.floor(Math.random()*passwordEx.length)];
}

box.style.backgroundColor=colorPass.toUpperCase();
document.getElementById("pass").textContent=colorPass;
console.log(`la passColor generata dal tuo nome , il tuo cognome e il tuo anno di nascita è ${colorPass}`);

});