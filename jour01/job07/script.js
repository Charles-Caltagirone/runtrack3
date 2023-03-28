// console.log("Hello Javasript!");
let date = new Date("2023-03-27");

const options = {weekday: 'long', year: 'numeric', month:'long', day:'numeric'};
let dateStr = new Date(date).toLocaleDateString("fr-FR",options);

// console.log(date.toLocaleDateString("fr"));
// let date = date.toLocaleDateString("fr");


// let getDate = date.getDate();
let getDay = date.getDay();
// let getMonth = date.getMonth();
// let getYear= date.getFullYear();
 
let jourAn = new Date("2020-01-01").toLocaleDateString("fr-FR",options);
// let JourAnFR = JourAn.toLocaleDateString("fr");
let pacques = new Date("2020-04-13").toLocaleDateString("fr-FR",options);
let feteTravail = new Date("2020-05-01").toLocaleDateString("fr-FR",options);
let victoire1945 = new Date("2020-05-08").toLocaleDateString("fr-FR",options);
let acsension = new Date("2020-05-21").toLocaleDateString("fr-FR",options);
let pentecote = new Date("2020-06-01").toLocaleDateString("fr-FR",options);
let feteNationale = new Date("2020-07-14").toLocaleDateString("fr-FR",options);
let assomption = new Date("2020-08-15").toLocaleDateString("fr-FR",options);
let toussaint = new Date("2020-11-01").toLocaleDateString("fr-FR",options);
let armistice = new Date("2020-11-11").toLocaleDateString("fr-FR",options);
let noel = new Date("2020-12-25").toLocaleDateString("fr-FR",options);

let array = [jourAn,pacques,feteTravail,victoire1945,acsension,pentecote,feteNationale,assomption,toussaint,armistice,noel];

// console.log(array);

function jourtravaille(date){    
    // console.log(date);
    // console.log(JourAn);
if(dateStr == array.find(element => element == dateStr)){
   return console.log('Non, le '+ dateStr +' est un jour ferié');
}
else if(getDay == 6 || getDay == 0){
    return console.log('Non, ' + dateStr + ' est un week-end');
}else{
    return console.log('Oui, le ' + dateStr + ' est un jour travaillé');
}
}

// console.log(dateStr);
// console.log(getDay);
// jourtravaille(date);
jourtravaille(date);