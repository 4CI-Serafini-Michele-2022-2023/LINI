var defult = "url(img/defult.png)";
let array = ["url(img/1.gif)", "url(img/2.gif)", "url(img/3.gif)", "url(img/4.gif)", "url(img/5.gif)", "url(img/6.gif)"];
var giocatore1=0;
var giocatore2=0;
var nameGioc1=prompt("Inserisci il nome del primo giocatoere:");
var nameGioc2=prompt("Inserisci il nome del secondo giocatore:");
var tot=prompt("Inserisci il punteggio necessario per vincere:");


function playMusic() {
    var audio = new Audio('music.mp3');
    audio.play();
    audio.loop=true;
    document.getElementById("m").style.pointerEvents="none";
}


function two(){
    let container = document.createElement('div');
    container.style.width="1200px";
    container.style.height="600px";
    container.style.position="absolute";
    

    var dado1 = document.createElement('button');
    dado1.setAttribute("id","1");
    dado1.style.backgroundImage=defult;
    dado1.style.backgroundColor="#0C0C0F";
    dado1.setAttribute("onclick","tira1()");
    

    let dado2 = document.createElement('button');
    dado2.setAttribute("id","2");
    dado2.style.backgroundImage=defult;
    dado2.style.marginLeft="500px";
    dado2.setAttribute("onclick","tira2()");

    document.body.appendChild(container);
    container.appendChild(dado1);
    container.appendChild(dado2);
}


function tira1(){
    let randomIndex = Math.floor(Math.random() * array.length);
    let randomElement = array[randomIndex];
    document.getElementById("1").style.backgroundImage = randomElement;
    switch (randomElement) {
        case "url(img/1.gif)":
            giocatore1=giocatore1+1;
          break;
        case "url(img/2.gif)":
            giocatore1=giocatore1+2;
          break;
        case "url(img/3.gif)":
            giocatore1=giocatore1+3;
          break;
        case "url(img/4.gif)":
            giocatore1=giocatore1+4;
          break;
        case "url(img/5.gif)":
            giocatore1=giocatore1+5;
          break;
        case "url(img/6.gif)":
            giocatore1=giocatore1+6;
      }
      document.getElementById("gioc1").innerHTML = ("Punteggio di" + " " + nameGioc1+ ":" + " " + giocatore1);
      if(giocatore1>=tot){
        alert(nameGioc1 + " " + "HA VINTO UNA VERIFICA A SORPRESA DI INFORMATICA!");
      }
      
}

function tira2(){
    let randomIndex2 = Math.floor(Math.random() * array.length);
    let randomElement2 = array[randomIndex2];
    document.getElementById("2").style.backgroundImage = randomElement2;
    switch (randomElement2) {
      case "url(img/1.gif)":
          giocatore2=giocatore2+1;
        break;
      case "url(img/2.gif)":
          giocatore2=giocatore2+2;
        break;
      case "url(img/3.gif)":
          giocatore2=giocatore2+3;
        break;
      case "url(img/4.gif)":
          giocatore2=giocatore2+4;
        break;
      case "url(img/5.gif)":
          giocatore2=giocatore2+5;
        break;
      case "url(img/6.gif)":
          giocatore2=giocatore2+6;
  }
  document.getElementById("gioc2").innerHTML = ("Punteggio di" + " " + nameGioc2+ ":" + " " + giocatore2);
  if(giocatore2>=tot){
    alert(nameGioc2 + " " + "HA VINTO UNA VERIFICA A SORPRESA DI INFORMATICA!");
  }
}
