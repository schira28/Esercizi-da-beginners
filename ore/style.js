let hour = prompt("inserisci l'ora")
let min = prompt("inserisci i minuti")
let convertitor = (hour * 60 ) + min 
let sec = convertitor * 60
let milli = sec * 1000

console.log(`l'ora e i minuti sono stati convertiti in: ${milli} sec`) 