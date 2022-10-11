// Quanti giorni di assenza sono rimasti a Giuseppe sependo che il max è 60.

// const assenzaMax = 60;
// console.log(assenzaMax, typeof(assenzaMax));

// const assenzeFatte = prompt("Quante assenza hai gia fatto?")
// console.log(assenzeFatte, typeof(assenzeFatte));

// const assenzeFatteNum = parseInt(assenzeFatte);
// console.log(assenzeFatteNum, typeof(assenzeFatteNum));

// const assenzeRimanenti = assenzaMax - assenzeFatteNum;
// console.log(assenzeRimanenti, typeof(assenzeRimanenti));

// const result = "Assenze rimaste:"
// console.log(result, typeof(result));

// document.getElementById("restanti").innerHTML = result + `${assenzeRimanenti}`;




//assenze massime sono 60 
const assenzeMax = 60;
console.log(assenzeMax);

//chiedere ad utente assenze già fatte 
const assenzeFatte = parseInt(prompt("Quante assenze hai già fatto?"));
console.log(assenzeFatte, typeof (assenzeFatte));


//sapere quanti giorni di assenza sono ancora possibili all'utente
const assenzeRimaste = assenzeMax - assenzeFatte
console.log(assenzeRimaste);

let output = document.getElementById("restanti").innerHTML
console.log(output);

document.getElementById("restanti").innerHTML = output + `${assenzeRimaste}`; 
