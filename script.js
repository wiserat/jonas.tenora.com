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


const SIRKA_HRACE = 16;
const VYSKA_HRACE = 64;
const POSUN_HRACE = 2;
const POLOMER_MICE = 16;
let hrac1,hrac2,mic;
let cnv,ctx,casovac;
function poNacteni() {
  cnv = document.getElementById("platno");
  ctx = cnv.getContext("2d");

  document.addEventListener('keydown',klavesaDolu);
  document.addEventListener('keyup',klavesaNahoru);
  
  novaHra();
}
function aktualizujStav() {
  document.getElementById("stav").innerText = hrac1.body + ":" + hrac2.body;
}
function novyMic() {
  mic.x = cnv.width / 2;
  mic.y = cnv.height / 2;
  while (true) {
    mic.vx = Math.random()*7-6;
    mic.vy = Math.random()*7-6;
    if (Math.abs(mic.vx)>3) break;
    if (Math.abs(mic.vx)<4) break;
  }
}  
function inicializujHrace(hrac, x, barva) {
  hrac.x = x;
  hrac.y = (cnv.height - VYSKA_HRACE) / 2;
  hrac.posun = 0;
  hrac.barva = barva;
  hrac.body = 0;
}  
function novaHra() {
  hrac1 = {};
  inicializujHrace(hrac1, 2*SIRKA_HRACE, "red");
  hrac2 = {};
  inicializujHrace(hrac2, cnv.width - 2*SIRKA_HRACE, "green");
  aktualizujStav();

  //mic
  mic = {};
  mic.barva = "blue";
  novyMic();

  clearInterval(casovac);
  casovac = setInterval(aktualizujHru, 10);
}
function nakresliHrace(hrac) {
  hrac.y += hrac.posun;

  ctx.beginPath();
  ctx.lineWidth = SIRKA_HRACE;
  ctx.strokeStyle = hrac.barva;
  ctx.moveTo(hrac.x, hrac.y);
  ctx.lineTo(hrac.x, hrac.y+VYSKA_HRACE);
  ctx.stroke();
}
function nakresliMic() {
  mic.x += mic.vx;
  mic.y += mic.vy;
  
  //kontrola odrazu od hracu a vodorovnych sten
  if (mic.x - POLOMER_MICE <= hrac1.x + SIRKA_HRACE/2 && mic.y >= hrac1.y && mic.y <= hrac1.y + VYSKA_HRACE) {
    mic.vx = -mic.vx;
  }
  if (mic.x + POLOMER_MICE >= hrac2.x - SIRKA_HRACE/2 && mic.y >= hrac2.y && mic.y <= hrac2.y + VYSKA_HRACE) {
    mic.vx = -mic.vx;
  }
  if (mic.y <= POLOMER_MICE || mic.y >= cnv.height - POLOMER_MICE) {
    mic.vy = -mic.vy;
  }
  //zapocitani bodu, aktualizujStav(), novyMic()
  if (mic.x < 0) {
    hrac2.body++;
    aktualizujStav();
    novyMic();
  }
  if (mic.x > cnv.width) {
    hrac1.body++;
    aktualizujStav();
    novyMic();
  }

  //nakresleni mice
  ctx.beginPath();
  ctx.fillStyle = mic.barva;
  ctx.arc(mic.x, mic.y, POLOMER_MICE, 0, 2*Math.PI);
  ctx.fill();  
}
function aktualizujHru() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  nakresliHrace(hrac1);
  nakresliHrace(hrac2);
  nakresliMic();
}
function klavesaZmena(event, posun) {
    if (event.key === "w") {
        hrac1.posun = -posun;
    }
    if (event.key === "s") {
        hrac1.posun = posun;
    }
    if (event.key === "ArrowUp") {
        hrac2.posun = -posun;
    }
    if (event.key === "ArrowDown") {
        hrac2.posun = posun;
    }
}
function klavesaDolu(event) {
  klavesaZmena(event, POSUN_HRACE);
}
function klavesaNahoru(event) {
  klavesaZmena(event, 0);
}
