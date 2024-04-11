let userName = ""


document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el modal automáticamente al cargar la página
    $('#config').modal('show');

    document.querySelector('.saveUsername').addEventListener('click', function () {
        userName = document.querySelector('#username').value;
        document.querySelector('.username').innerText = userName;
        
    })
})

// Función para cargar una vista parcial
function loadPartialView() {
    fetch('views/user/login.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('app').innerHTML = data;
            excecuteScriptFromeHTML(data);
        })
        .catch(error => {
            console.error('Error al cargar la vista parcial: ', error);
        })
}
loadPartialView();

function loadPartialView() {
    fetch('views/home/cambios.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('info').innerHTML = data;
            excecuteScriptFromeHTML(data);
        })
        .catch(error => {
            console.error('Error al cargar la vista parcial: ', error);
        })
}
loadPartialView();