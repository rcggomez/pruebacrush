/*funcion para que se  mueva el boton no*/
function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'; //sacar el tamaño de la ventana del navegador para no salirse de la pantalla
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModeSex = document.getElementsByClassName("mode_sex")[0];

btnNo.addEventListener('mouseenter',function(e) { moverPosicionRandom(e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirias que Sí, Tengamos familia te amo!!!  ❤️❤️❤️ ')
    
    divModeSex.style.display = 'block';
    const cancion = new Audio('img\\playa_2.mp3');
    cancion.play()
})