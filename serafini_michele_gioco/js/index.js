function sium(){
let container = document.createElement('div');
    container.style.width="1200px";
    container.style.height="600px";
    container.style.position="absolute";
    
    var b = document.createElement('button');
    b.setAttribute("id","1");
    b.style.backgroundImage="url(img/btn.jpg)";
    b.style.backgroundRepeat="no-repeat";
    b.style.backgroundSize="cover";
    b.style.position="absolute";
    b.style.width="300px";
    b.style.height="75px";
    b.style.left="90%";
    b.style.top="100%";

    b.setAttribute("onclick","cambia()");

    document.body.appendChild(container);
    container.appendChild(b);
}

function cambia(){
    window.location.href = "gioco.html";
  }