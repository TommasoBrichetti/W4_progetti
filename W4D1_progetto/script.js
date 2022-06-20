var dataOdierna = new Date();
document.write(dataOdierna +"<br>"); 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno","Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const giorni = ["Domenica","Lunedì","Martedì", "Mercoledì", "Giovedì", "Sabato"];

document.write(`${dataOdierna.getDate()} / ${dataOdierna.getMonth() + 1} / ${dataOdierna.getFullYear()}<br>`); //data europea
document.write(`${dataOdierna.getDate()} / ${months[dataOdierna.getMonth()]} / ${dataOdierna.getFullYear()}<br>`); //data europea con mese inglese
document.write(`${dataOdierna.getDate()} / ${mesi[dataOdierna.getMonth()]} / ${dataOdierna.getFullYear()}<br>`); //data europea con mese italiano

document.write(`${day[dataOdierna.getDay()]} / ${months[dataOdierna.getMonth()]} / ${dataOdierna.getFullYear()}<br>`);
document.write(`${giorni[dataOdierna.getDay()]} / ${mesi[dataOdierna.getMonth()]} / ${dataOdierna.getFullYear()}<br>`);

