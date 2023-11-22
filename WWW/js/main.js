
let button2 = document.getElementById('boton-ocultar');


function hideImg(){
    let image = document.getElementById('logo');
    image.style = "display:none";
}
 
button2.onclick = hideImg;