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

function getAllTimeRecord() {
    // Enviar la solicitud AJAX
    $.ajax({
        url: getAllTimeRecord_route,
        method: 'GET',
        contentType: 'application/json',
        success: function (response) {
            iframe_record = document.getElementById('iframe-record')
            recordDiv = iframe_record.contentWindow.document.querySelector('#record-value')
            recordDiv.innerHTML = response
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Manejar cualquier error que ocurra durante la solicitud AJAX
            console.error('Error:', textStatus, errorThrown);
        }
    });
}

function loadBasicInfo() {
    username = window.localStorage.getItem('username')
    iframe_player = document.getElementById('iframe-player')
    playerDiv = iframe_player.contentWindow.document.querySelector('#player-value')
    playerDiv.innerHTML = username

    getAllTimeRecord();
}