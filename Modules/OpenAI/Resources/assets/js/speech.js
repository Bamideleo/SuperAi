"use strict";

$(document).ready(function () {
  var $fileInput = $('.file_input');
  var $durationInput = $('#duration');
  var $fileText = $('.file-msg');
  var $loader = $('.upload-loader');
  var $deleteButton = $('#deleteButton');
  var deleteClicked = false;

  function showDeleteButton() {
    $deleteButton.show();
  }
  function hideDeleteButton() {
    $deleteButton.hide();
  }
  $fileInput.on('change', function () {
    var filesCount = this.files.length;
    var self = this;

    if (filesCount === 1) {
      var file = self.files[0];
      var fileType = file.type;
      
      if (fileType.startsWith('audio/')) {
        $loader.removeClass('hidden');
        $fileText.addClass('hidden');

        setTimeout(function () {
            var fileName = file.name;
            var audio = new Audio();
            audio.src = URL.createObjectURL(file);

            audio.onloadedmetadata = function () {
                var duration = audio.duration;
                $fileText.text(fileName);
                $durationInput.val(duration.toFixed(2));
                showDeleteButton();
            };
            audio.onerror = function () {
                var duration = audio.duration;
                $fileText.text(fileName);
                $durationInput.val(duration.toFixed(2));
                showDeleteButton();
            };
            $loader.addClass('hidden');
            $fileText.removeClass('hidden');
            deleteClicked = false;
        }, 1000);

      } else {
        toastMixin.fire({
            title: jsLang('Please select a valid audio file.'),
            icon: 'error'
        });
        $fileInput.val(''); // Reset the input field
        $fileText.html('<div class="file-msg justify-center items-center flex gap-2.5 text-color-14 dark:text-white line-clamp-single"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99935 0.666016C6.36754 0.666016 6.66602 0.964492 6.66602 1.33268V5.33268H10.666C11.0342 5.33268 11.3327 5.63116 11.3327 5.99935C11.3327 6.36754 11.0342 6.66602 10.666 6.66602H6.66602V10.666C6.66602 11.0342 6.36754 11.3327 5.99935 11.3327C5.63116 11.3327 5.33268 11.0342 5.33268 10.666V6.66602H1.33268C0.964492 6.66602 0.666016 6.36754 0.666016 5.99935C0.666016 5.63116 0.964492 5.33268 1.33268 5.33268H5.33268V1.33268C5.33268 0.964492 5.63116 0.666016 5.99935 0.666016Z" fill="currentColor"/></svg><p>Click or drag audio file here</p></div>');
        $durationInput.val('');
        hideDeleteButton();
      }
    } else {
      $fileText.html('<div class="file-msg justify-center items-center flex gap-2.5 text-color-14 dark:text-white line-clamp-single"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99935 0.666016C6.36754 0.666016 6.66602 0.964492 6.66602 1.33268V5.33268H10.666C11.0342 5.33268 11.3327 5.63116 11.3327 5.99935C11.3327 6.36754 11.0342 6.66602 10.666 6.66602H6.66602V10.666C6.66602 11.0342 6.36754 11.3327 5.99935 11.3327C5.63116 11.3327 5.33268 11.0342 5.33268 10.666V6.66602H1.33268C0.964492 6.66602 0.666016 6.36754 0.666016 5.99935C0.666016 5.63116 0.964492 5.33268 1.33268 5.33268H5.33268V1.33268C5.33268 0.964492 5.63116 0.666016 5.99935 0.666016Z" fill="currentColor"/></svg><p>Click or drag audio file here</p></div>');
      $durationInput.val('');
      hideDeleteButton();
    }
  });
  $deleteButton.on('click', function (e) {
    e.preventDefault();
    $fileInput.val(null);
    $fileText.html('<div class="file-msg justify-center items-center flex gap-2.5 text-color-14 dark:text-white line-clamp-single"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99935 0.666016C6.36754 0.666016 6.66602 0.964492 6.66602 1.33268V5.33268H10.666C11.0342 5.33268 11.3327 5.63116 11.3327 5.99935C11.3327 6.36754 11.0342 6.66602 10.666 6.66602H6.66602V10.666C6.66602 11.0342 6.36754 11.3327 5.99935 11.3327C5.63116 11.3327 5.33268 11.0342 5.33268 10.666V6.66602H1.33268C0.964492 6.66602 0.666016 6.36754 0.666016 5.99935C0.666016 5.63116 0.964492 5.33268 1.33268 5.33268H5.33268V1.33268C5.33268 0.964492 5.63116 0.666016 5.99935 0.666016Z" fill="currentColor"/></svg><p>Click or drag audio file here</p></div>');
    $durationInput.val('');
    deleteClicked = true;
    hideDeleteButton();
  });
});
$(document).ready(function () {
  $("#text-generate").on("click", function () {
      if ($("#file_input")[0].files.length > 0) {
          $(".file-drop-area").removeClass("mb-5");
      } else {
          $(".file-drop-area").addClass("mb-5");
      }
  });
  $("#file_input").on("change", function () {
      if ($("#file_input")[0].files.length > 0) {
          $(".file-drop-area").removeClass("mb-5");
      }
  });
});

$(document).on('submit', '#speech-to-text-form', function (e) {

  let dataArray = $(this).serializeArray();

  var providerObject = dataArray.find(function(element) {
    return element.name === "provider";
  });

  function getValueByName(name) {
      var item = dataArray.find(function(element) {
          return element.name === name;
      });
      return item ? item.value : null;
  }

  var providerValue = providerObject ? providerObject.value : null;
  e.preventDefault();

  var html = '';
  var formData = new FormData();
  formData.append('provider', providerValue);

  $(`[name^="${providerValue}["]`).each(function () {
      var fieldName = $(this).attr("name");
      var fieldValue = $(this).val();
      
      if (fieldValue !== undefined && fieldValue !== null) {
        // Extract only the inner key (e.g., model, word_filter)
        var formattedName = fieldName.replace(`${providerValue}[`, "").replace("]", "");
        formData.append(formattedName, fieldValue);
    }
  });

  var fileInput = $("#file_input")[0].files[0];
  if (fileInput) {
      formData.append('file', fileInput);
  }

  formData.append('duration', $("#duration").val() || '');
  formData.append('dataType', 'json');
  formData.append('_token', CSRF_TOKEN);

  $.ajax({
      url: SITE_URL + "/" + PROMT_URL,
      type: "POST",
      data: formData,
      contentType: false,
      cache: false,
      processData:false,
      beforeSend: function (xhr) {
          $(".loader").removeClass('hidden');
          $("#text-generate").attr("disabled", "disabled");
          xhr.setRequestHeader("Authorization", "Bearer " + ACCESS_TOKEN);
      },
      
      success: function(response) {
          html = response.data.content;
          tinyMCE.activeEditor.setContent(html, { format: "raw" });

          var credit = $('.minute-credit-remaining');

          if (credit.length > 0) {
              var creditValue = parseFloat(credit.text());
              if (!isNaN(creditValue) && response.data.meta.minutes != null) {
                  var minutes = creditValue - response.data.meta.minutes;
                  if (minutes < 0) {
                      minutes = 0;
                  }

                  credit.text( minutes.toFixed(2));
              }
          }
      },

      complete: () => {
          $(".loader").addClass('hidden');
          $('#text-generate').removeAttr('disabled');
      },

      error: function(response) {
          $(".loader").addClass('hidden');
          var jsonData = JSON.parse(response.responseText);
          errorMessage(jsonData.error, 'text-generate');
       }
  });
});

$('.AdavanceOption').on('click', function() {
  if ($('#ProviderOptionDiv').attr('class') == 'hidden') {
      hideProviderOptions()
      $('.' + $('#provider option:selected').val() + '_div').removeClass('hidden');
      $('#ProviderOptionDiv').removeClass('hidden');
  } else {
      $('#ProviderOptionDiv').addClass('hidden');
  }
});


$('#provider').on('change', function() {
  hideProviderOptions();
  $('.' + $(this).val() + '_div').removeClass('hidden');
});


function hideProviderOptions() 
{
  $('.ProviderOptions').each(function() {
      $(this).addClass('hidden')
  });
}

$('#provider').on('change', function() {
  hideProviderOptions();
  $('.' + $(this).val() + '_div').removeClass('hidden');
});


