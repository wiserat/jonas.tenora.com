function vypocet() {
    let c1 = document.getElementById("cislo1").valueAsNumber;
    let c2 = document.getElementById("cislo2").valueAsNumber;
    let op = document.getElementById("operace").value;
    let zaokrouhlit = document.getElementById("zaokrouhlit").checked;
    console.log(zaokrouhlit);
    let vysl = "???";
     if (op == "scitani") {
       vysl = c1 + c2;
     }
     if (op == "odcitani") {
       vysl = c1 - c2;
     }
     
     if (op == "nasobeni") {
       vysl = c1 * c2;
     }
     if (op == "deleni") {
       vysl = c1 / c2;
     }
     if (zaokrouhlit) {
       vysl = vysl.toFixed(2);
     }
    document.getElementById("vystup").innerText = vysl;
   }




   const MESICE = ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince"];
const DNY = ["Neděle","Pondělí","Uterý","Středa","Čtvrtek","Pátek","Sobota"];

async function poNacteni() {
  ukazPocasi();
  ukazCitac();

  console.log(MESICE[11]);

  let d = new Date();
  console.log(d.getDate());
  console.log(d.getMonth()+1);
  console.log(d.getFullYear());
  //let m = d.getMonth()+1; //cislo mesice
  let m = MESICE[d.getMonth()]; //nazev mesice

  //volani vzdalene sluzby
  let url = "https://nodejs-3260.rostiapp.cz/date";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  console.log("### " + data.svatek);


  let s = "Dnes je " + DNY[d.getDay()].toLowerCase() + " " + d.getDate() + "." + m + " " + d.getFullYear() + " a svátek má " + data.svatek + ".";
  document.getElementById("datum").innerHTML = s;
}

async function ukazPocasi() {
  let url = "https://nodejs-3260.rostiapp.cz/weather?loc=Praha"; //s parametry
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  //TODO zpracování datového objektu; napr. pouziti data.svatek

  let s = "V Praze je <img src=\"" + data.icon + "\" height=\"24\">" + data.temp + " stupňů Celsia a slunce zapadá v " + data.sunset + ".";
  console.log(s);
  document.getElementById("pocasi").innerHTML = s;

  document.getElementById("obrazek_pocasi").src = data.icon;
} 

async function ukazCitac() {
  let url = "https://nodejs-3260.rostiapp.cz/demo/inc";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  
  document.getElementById("citac").innerHTML = data.counter;
} 

function citacStart() {
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "inline";
}

function citacStop() {
  document.getElementById("start").style.display = "inline";
  document.getElementById("stop").style.display = "none";
}