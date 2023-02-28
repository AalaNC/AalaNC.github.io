

document.getElementById('nombre').addEventListener('click', function(){
    let texto = mostrarNombre();
    document.getElementById('texto').innerHTML = texto;
    document.getElementById('contenedor').style.display = 'block';
});

function mostrarNombre(){
    return 'Mi Nombre es Maria Gonzalez Fernandez';
}

document.getElementById('email').addEventListener('click', function(){
    let texto = mostrarEmail();
    document.getElementById('texto').innerHTML = texto;
    document.getElementById('contenedor').style.display = 'block';
});

function mostrarEmail(){
    return 'Mi Email es mariagonzalezfernandez@gmail.com';
}

document.getElementById('fecha').addEventListener('click', function(){
    let texto = mostrarFecha();
    document.getElementById('texto').innerHTML = texto;
    document.getElementById('contenedor').style.display = 'block';
});

function mostrarFecha(){
    return 'Mi Fecha de Nacimiento es el 23/04/1990';
}

document.getElementById('telefono').addEventListener('click', function(){
    let texto = mostrarTelefono();
    document.getElementById('texto').innerHTML = texto;
    document.getElementById('contenedor').style.display = 'block';
});

function mostrarTelefono(){
    return 'Mi Numero de Telefono es 299900012';
}

document.getElementById('html').addEventListener('click', function(){
    let texto2 = mostrarHTML();
    document.getElementById('texto2').innerHTML = texto2;
    document.getElementById('contenedor2').style.display = 'block';
});

function mostrarHTML(){
    return 'Mi manejo en HTML es avanzado, de un 85% de 100, con practicas y proyectos realizados';
}

document.getElementById('css').addEventListener('click', function(){
    let texto2 = mostrarCSS();
    document.getElementById('texto2').innerHTML = texto2;
    document.getElementById('contenedor2').style.display = 'block';
});

function mostrarCSS(){
    return 'Mi manejo en CSS es avanzado, de un 90% de 100, con practicas y proyectos realizados';
}



