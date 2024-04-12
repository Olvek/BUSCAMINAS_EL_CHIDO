function postScore(username, score) {
    formData = {
        Score1: score,
        Name: username
    }

    // Enviar la solicitud AJAX
    $.ajax({
        url: postScore_route,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function (response) {

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Manejar cualquier error que ocurra durante la solicitud AJAX
            console.error('Error:', textStatus, errorThrown);
        }
    });
}

function postScore(formData) {
    // Enviar la solicitud AJAX
    $.ajax({
        url: getAllTimeRecord_route,
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            alert(response)
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Manejar cualquier error que ocurra durante la solicitud AJAX
            console.error('Error:', textStatus, errorThrown);
        }
    });
}