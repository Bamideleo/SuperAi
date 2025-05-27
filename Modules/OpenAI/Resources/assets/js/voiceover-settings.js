"use strict";

$(document).on("change", "#choose_engine", function () {
    $.ajax({
        url: SITE_URL + "/user/formfiled-voiceover",
        type: "get",
        dataType: "html",
        data: {
            provider: $(this).val(),
            _token: CSRF_TOKEN,
        },
        beforeSend: () => {
            $(".voiceover-input-loader").removeClass("hidden");
            $(".voiceover-appended-data").addClass("hidden");
        },
        success: function (response) {
            $(".voiceover-appended-data").html(response);
        },
        complete: () => {
            $(".voiceover-input-loader").addClass("hidden");
            $(".voiceover-appended-data").removeClass("hidden");
        }
    });
});
