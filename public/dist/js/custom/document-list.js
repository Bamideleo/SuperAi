"use strict";
if ($('.main-body .page-wrapper').find('#'+listContaner+'').length) {
    // For export csv
    $(document).on("click", "#csv, #pdf", function(event) {
        event.preventDefault();
        window.location = SITE_URL + endRoute + this.id;
    });
}