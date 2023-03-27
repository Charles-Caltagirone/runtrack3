// console.log("Hello Javasript!");

let currentDate = new Date("04 May 2020");

let getDate = currentDate.getDate();
let getDay = currentDate.getDay();
let getMonth = currentDate.getMonth();
let getYear = currentDate.getFullYear();

let JourAn = new Date("04 May 2020");
let Pacques = new Date("2020", "03", "13");
let FeteTravail = new Date("2020", "04", "01");
let Victoire1945 = new Date("2020", "04", "08");
let Acsension = new Date("2020", "04", "21");
let Pentecote = new Date("2020", "05", "01");
let FeteNationale = new Date("2020","06", "14");
let Assomption = new Date("2020", "07", "15");
let Toussaint = new Date("2020", "10", "01");
let Armistice = new Date("2020", "10", "11");
let Noel = new Date("2020", "11", "25");


function jourtravaille(date){
    
if(date == JourAn || date == FeteTravail){
    console.log(`Le ${getDate}  ${getMonth}  ${getYear} est un jour férié`);
}else if(getDay == 6 || getDay == 0){
    console.log(`Non, ${getDate}  ${getMonth}  ${getYear} est un week-end`);
}else{
    console.log(FeteTravail);
    console.log(date);
    console.log(`Oui, ${getDate}  ${getMonth}  ${getYear} est un jour travaillé`);
}
}

console.log(currentDate);
// console.log(getDay);
// console.log(getMonth);
// console.log(getYear);
// console.log(getDate);
// console.log(JourAn);

jourtravaille(currentDate);