function loadPartialView(viewName, divClass = null) {
    $.ajax({
        url: './views/' + viewName + '.html',
        method: 'GET',
        success: function (data) {
            divClass.innerHTML = data;
        },
        error: function (xhr, status, error) {
            console.error('Error al cargar la vista parcial: ', error);
        }
    });
}