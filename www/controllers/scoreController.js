function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
}

function postScore(username, segundos) {
    minutes = fancyTimeFormat(segundos)
    score = "2000-01-01 00:" + minutes

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
            output = response.slice(-8)
            iframe_record = document.getElementById('iframe-record')
            recordDiv = iframe_record.contentWindow.document.querySelector('#record-value')
            recordDiv.innerHTML = output
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Manejar cualquier error que ocurra durante la solicitud AJAX
            console.error('Error:', textStatus, errorThrown);
        }
    });
}