"use strict";


$(document).ready(function () {
    getAttibutes($('#provider').val());
});

function getAttibutes(provider) {
        $.ajax({
            type: "get",
            dataType: "json",
            url: SITE_URL + "/imports/attributes",
            data: {
                provider: provider,
                _token: token,
            },
            success: function (data) {
                $('#note_txt_1').toggleClass('d-none', !data.documentation);
                $('#note_txt_2').toggleClass('d-none', !data.important_note);

                if (data.documentation) {
                    $('.url-note a').attr('href', data.documentation).text(data.documentation);
                }

                if (data.important_note) {
                    $('.important-note').text(data.important_note);
                }

                $('#api_url').toggleClass('d-none', $.isEmptyObject(data));
            },
        });
}

$(document).on("change", "#provider", function () {
    getAttibutes($(this).val());
});

$("#fileRequest").on("click", function() {
    window.location = SITE_URL.replace("/admin", "") + "/public/dist/downloads/import_actor.csv";
});
