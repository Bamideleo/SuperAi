'use strict';

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

$(document).on("submit", "#openai-form", function (e) {
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
 
    let contentSlug = "";
    var currentUrl = window.location.href.indexOf("content/edit") > -1;
    if (currentUrl) {
        (parts = window.location.href.split("/")),
            (contentSlug = parts[parts.length - 1]);
    }

    e.preventDefault();
    var gethtml = tinyMCE.activeEditor.getContent();

    var formData = {};
    $(".dynamic-input").each(function (column) {
        formData[this.name] = $(this).val();
    });

    var url =  SITE_URL + "/" + 'user/generate';
    var newUrl =  SITE_URL + "/" + 'user/process';
    var questions = JSON.stringify(formData)
    var variant = getValueByName(`${providerValue}[variant]`);
    var language = getValueByName(`${providerValue}[language]`);
    var model = getValueByName(`${providerValue}[model]`);

    $.ajax({
        url: url,
        type: "POST",
        beforeSend: function (xhr) {
            $(".loader").removeClass('hidden');
            $('#magic-submit-button').prop('disabled', true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
        },
        data: {
            questions: questions,
            prompt: filterXSS($("#promt").val()),
            useCase: $(".use-cases").val(),
            language: language,
            variant: variant,
            model: model,
            tone: getValueByName(`${providerValue}[tone]`),
            creativity_level: getValueByName(`${providerValue}[creativity_level]`),
            provider: $("#provider").val(),
            previousContent: gethtml,
            contentSlug: contentSlug,
            dataType: 'json',
            _token: CSRF_TOKEN
        },
        success: function(response) {
            if (response.status = 'success') {
                var url = newUrl + "?questions=" + encodeURIComponent(questions) +"&provider=" + $("#provider").val() +"&useCase=" + $(".use-cases").val() +"&language=" + language +"&variant=" + variant +"&model=" + model +"&tone=" + $("#tone").val() + "&creativity_level=" + $("#creativity_level").val() + "&template_id=" + decodeURIComponent(response.data.templateId);
                const eventSource = new EventSource(url, {withCredentials: true});

                eventSource.onmessage = function (e) {
                    if (e.data === '[DONE]') {
                        eventSource.close();
                        toastMixin.fire({
                            title: jsLang('Document generated successfully.'),
                            icon: 'success'
                        });
                        $(".loader").addClass('hidden');
                        $("#magic-submit-button").removeAttr("disabled");
                
                        // Final forced update just in case
                        updateEditorThrottled();
                
                    } else if (e.data === '[ERROR]') {
                        eventSource.close();
                        errorMessage(e.data, 'magic-submit-button');
                
                    } else {
                        const stream = e.data;
                
                        if (stream && stream !== '[DONE]') {
                            gethtml += stream;
                            updateEditorThrottled(); // Replace debounce with throttled update
                        }
                    }
                };
                eventSource.addEventListener("error", (e) => {
                    eventSource.close();
                    errorMessage(e.data, 'magic-submit-button');
                });
            }

        },
        error: function (response) {
            var jsonData = JSON.parse(response.responseText);
            var message = jsonData.error ? jsonData.error : jsonData.message;
            errorMessage(message, 'magic-submit-button');
        }
    });

    function convertMarkdownToHTML(text) {
        return text
            // Convert ## headings to <h1> tags
            .replace(/^## (.*)$/gm, '<h1>$1</h1>')
            // Convert **bold** text into <strong> tags
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    }

    let lastUpdate = 0;
    let lastContent = '';
    const throttleInterval = 50;

    function updateEditorThrottled() {
        const now = Date.now();

        if (now - lastUpdate < throttleInterval) return;

        try {
            const parsedHtml = convertMarkdownToHTML(gethtml);

            if (parsedHtml !== lastContent && tinyMCE.activeEditor) {
                tinyMCE.activeEditor.setContent(parsedHtml);
                lastContent = parsedHtml;
            }

            lastUpdate = now;
        } catch (error) {
            errorMessage(error, 'magic-submit-button');
        }
    }

});
