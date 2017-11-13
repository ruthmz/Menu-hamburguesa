var boton = document.getElementById('btn');

//declaramos nuestra funcion con las intrucciones
function showMenu() {
    var menu = document.getElementById('opcs-menu');
    // para poder verificar si las clases se muestra o no, creamos una condicional
    if(menu.classList.contains('disabled-menu')){
        menu.classList.remove('disabled-menu');
        menu.classList.add('enabled-menu');
    } else {
        menu.classList.remove('enabled-menu');
        menu.classList.add('disabled-menu')
    }
}
boton.addEventListener('click', showMenu);
