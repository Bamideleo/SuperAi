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

    $('#file').on('change', function (event) {
        const fileContainer = $('#file-container');
        const files = event.target.files;
    
        // Clear any existing previews
        fileContainer.empty();
    
        if (files.length > 0) {
            const file = files[0]; // Get the first file
            if (!file.type.startsWith('image/')) return;
    
            const reader = new FileReader();
    
            reader.onload = function (e) {
                const previewDiv = $(`
                    <div class="relative flex items-center justify-center">
                        <img src="${e.target.result}" alt="${file.name}" class="w-24 h-24 object-cover rounded-md">
                        <button class="absolute top-0 right-0  text-white rounded-full w-6 h-6 flex items-center justify-center bg-[#2c2c2c] m-1" title="Remove image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H9C8.44772 4 8 3.55228 8 3ZM4.99224 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H4.06445L4.70614 16.6254C4.75649 17.3809 4.79816 18.006 4.87287 18.5149C4.95066 19.0447 5.07405 19.5288 5.33109 19.98C5.73123 20.6824 6.33479 21.247 7.06223 21.5996C7.52952 21.826 8.0208 21.917 8.55459 21.9593C9.06728 22 9.69383 22 10.4509 22H13.5491C14.3062 22 14.9327 22 15.4454 21.9593C15.9792 21.917 16.4705 21.826 16.9378 21.5996C17.6652 21.247 18.2688 20.6824 18.6689 19.98C18.926 19.5288 19.0493 19.0447 19.1271 18.5149C19.2018 18.006 19.2435 17.3808 19.2939 16.6253L19.9356 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.0078C19.0019 4.99995 18.9961 4.99995 18.9903 5H5.00974C5.00392 4.99995 4.99809 4.99995 4.99224 5ZM17.9311 7H6.06889L6.69907 16.4528C6.75274 17.2578 6.78984 17.8034 6.85166 18.2243C6.9117 18.6333 6.98505 18.8429 7.06888 18.99C7.26895 19.3412 7.57072 19.6235 7.93444 19.7998C8.08684 19.8736 8.30086 19.9329 8.71286 19.9656C9.13703 19.9993 9.68385 20 10.4907 20H13.5093C14.3161 20 14.863 19.9993 15.2871 19.9656C15.6991 19.9329 15.9132 19.8736 16.0656 19.7998C16.4293 19.6235 16.7311 19.3412 16.9311 18.99C17.015 18.8429 17.0883 18.6333 17.1483 18.2243C17.2102 17.8034 17.2473 17.2578 17.3009 16.4528L17.9311 7ZM10 9.5C10.5523 9.5 11 9.94772 11 10.5V15.5C11 16.0523 10.5523 16.5 10 16.5C9.44772 16.5 9 16.0523 9 15.5V10.5C9 9.94772 9.44772 9.5 10 9.5ZM14 9.5C14.5523 9.5 15 9.94772 15 10.5V15.5C15 16.0523 14.5523 16.5 14 16.5C13.4477 16.5 13 16.0523 13 15.5V10.5C13 9.94772 13.4477 9.5 14 9.5Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                `);
    
                previewDiv.find('button').on('click', function () {
                    previewDiv.remove();
                    $('#file').val(''); // Clear the file input value
                });
    
                fileContainer.append(previewDiv);
            };
    
            reader.readAsDataURL(file);
        }

    });
    
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

$('#VoiceCloneForm').on('submit', function(e) {
    e.preventDefault();

    let data = new FormData();

    let formData = $(this).serializeArray();
    $.each(formData, function (key, input) {
        data.append(input.name, input.value);
    });

    let fileInput = $('#file_input');

    if (fileInput.length > 0) {
        let fileData = fileInput.prop('files')[0];
        if (fileData) {
            data.append('file', fileData);
        }
    }

    let imageFileInput = $('#file');

    if (imageFileInput.length > 0) {
        let fileData = imageFileInput.prop('files')[0];
        if (fileData) {
            data.append('image', fileData);
        }
    }
    
    data.append('dataType', 'json');
    data.append('_token', CSRF_TOKEN);

    $.ajax({
        type: 'POST',
        url: SITE_URL + '/' + PROMPT_URL,
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
            $("#VoiceCloneForm .loader").removeClass('hidden');
            $('#voice-clone').attr('disabled', 'disabled');
        },
        success: function(response, textStatus, jqXHR) {
            if (jqXHR && jqXHR.status == 201) {
                let credit = $('.voice-clone-credit-remaining');
                if (!isNaN(credit.text())) {
                    credit.text(credit.text() - 1);
                }

                $('.empty-voice-table').hide();
                
                var html = `
                    <tr class="border-b dark:border-[#474746]" id="voice_${response.data.id }">
                        <td class="text-14 font-Figtree py-[18px] text-color-89 dark:text-white font-medium px-3 w-64 whitespace-nowrap hidden sm:table-cell break-words align-top xl:align-middle">
                            ${response.data.name} (${response.data.gender})
                        </td>
                        <td class="text-14 font-Figtree py-[18px] text-color-89 dark:text-white font-medium px-3 w-64 whitespace-nowrap hidden xl:table-cell break-words">
                            ${response.data.created_at}
                        </td>
                        <td class="text-14 font-Figtree py-[18px] text-color-14 dark:text-white font-medium ltr:3xl:pr-[34px] ltr:pr-3 rtl:3xl:pl-[34px] rtl:pl-3 w-max align-top xl:align-middle text-right">
                            <div class="flex justify-end gap-4 items-center lg:w-[290px]">
                                <div class="gap-4 flex justify-end items-center">
                                    <div class="relative play-nav">
                                        <button data-src="${response.data.file}" class="play-pause-button play-tooltip-delete flex items-center border border-color-89 dark:border-color-47 text-color-14 dark:text-white bg-white dark:bg-color-47 rounded-lg justify-center cursor-pointer" title="Play Audio">
                                            <svg class="m-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M12.5451 9.35142L5.38706 13.8632C4.77959 14.2457 4 13.7826 4 13.0115V3.98784C4 3.21795 4.77846 2.75357 5.38706 3.13729L12.5451 7.64911C12.6833 7.7348 12.7981 7.85867 12.878 8.00815C12.9579 8.15764 13 8.32741 13 8.50027C13 8.67312 12.9579 8.84289 12.878 8.99238C12.7981 9.14186 12.6833 9.26573 12.5451 9.35142Z" fill="currentColor"></path>
                                            </svg>
                                        </button>
                                        <div class="play-collapse hidden">
                                            <div class="flex justify-center gap-2 items-center">
                                                <div class="w-[60px] waveform"></div>
                                                <div class="w-9" id="waveform-time-indicator-view">
                                                    <p class="font-medium text-color-14 text-[10px] font-Figtree leading-[14px] dark:text-white ltr:pr-2 rtl:pl-2 time">00:00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative">
                                    <button class="table-dropdown-click">
                                        <a href="javascript: void(0)" class="cursor-pointer border p-2 border-color-89 rounded-lg flex justify-end">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path d="M10.6875 14.625C10.6875 15.557 9.93198 16.3125 9 16.3125C8.06802 16.3125 7.3125 15.557 7.3125 14.625C7.3125 13.693 8.06802 12.9375 9 12.9375C9.93198 12.9375 10.6875 13.693 10.6875 14.625ZM10.6875 9C10.6875 9.93198 9.93198 10.6875 9 10.6875C8.06802 10.6875 7.3125 9.93198 7.3125 9C7.3125 8.06802 8.06802 7.3125 9 7.3125C9.93198 7.3125 10.6875 8.06802 10.6875 9ZM10.6875 3.375C10.6875 4.30698 9.93198 5.0625 9 5.0625C8.06802 5.0625 7.3125 4.30698 7.3125 3.375C7.3125 2.44302 8.06802 1.6875 9 1.6875C9.93198 1.6875 10.6875 2.44302 10.6875 3.375Z" fill="#898989"></path>
                                            </svg>
                                        </a>
                                    </button>
                                    <div class="absolute ltr:right-0 rtl:left-0 mt-2 w-[201px] border border-color-89 dark:border-color-47 rounded-lg bg-white dark:bg-[#333332] z-50 table-drop-body dropdown-shadow">
                                        <a href="${response.data.edit_route}" class="flex justify-start items-center gap-1.5 text-14 font-normal text-color-14 dark:text-white font-Figtree px-4 py-2 hover:bg-color-F6 dark:hover:bg-[#3A3A39] rounded-t-lg text-left">
                                            <span class="w-4 h-4">
                                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M2.73266 10.0443L2.01789 13.1291C1.99323 13.2419 1.99407 13.3587 2.02036 13.4711C2.04665 13.5835 2.09771 13.6886 2.16982 13.7787C2.24193 13.8689 2.33326 13.9418 2.43715 13.9921C2.54104 14.0424 2.65485 14.0689 2.77028 14.0696C2.82407 14.075 2.87826 14.075 2.93205 14.0696L6.03568 13.3548L11.9947 7.41841L8.66906 4.10034L2.73266 10.0443Z" fill="currentColor"/>
                                                <path d="M13.8682 4.44626L11.6486 2.22669C11.5027 2.0815 11.3052 2 11.0993 2C10.8935 2 10.696 2.0815 10.5501 2.22669L9.31616 3.46062L12.638 6.78245L13.8719 5.54852C13.9441 5.47594 14.0013 5.38984 14.0402 5.29514C14.0791 5.20043 14.099 5.09899 14.0986 4.99661C14.0983 4.89423 14.0777 4.79292 14.0382 4.69849C13.9986 4.60405 13.9409 4.51834 13.8682 4.44626Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                            <p>${jsLang('Edit Voice Clone')}</p>
                                        </a>    
                                    
                                        <a href="javascript: void(0)" id="${response.data.id}" data-provider="${response.data.providers}" class="flex justify-start items-center gap-1.5 text-14 font-normal text-color-14 dark:text-white font-Figtree px-4 py-2 hover:bg-color-F6 dark:hover:bg-[#3A3A39] rounded-t-none rounded-b-lg  modal-toggle text-left delete-wavesuffer-audio">
                                            <span class="w-4 h-3">
                                                <svg class="w-3 h-3" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.846154 0.8C0.378836 0.8 0 1.15817 0 1.6V2.4C0 2.84183 0.378836 3.2 0.846154 3.2H1.26923V10.4C1.26923 11.2837 2.0269 12 2.96154 12H8.03846C8.9731 12 9.73077 11.2837 9.73077 10.4V3.2H10.1538C10.6212 3.2 11 2.84183 11 2.4V1.6C11 1.15817 10.6212 0.8 10.1538 0.8H7.19231C7.19231 0.358172 6.81347 0 6.34615 0H4.65385C4.18653 0 3.80769 0.358172 3.80769 0.8H0.846154ZM3.38462 4C3.61827 4 3.80769 4.17909 3.80769 4.4V10C3.80769 10.2209 3.61827 10.4 3.38462 10.4C3.15096 10.4 2.96154 10.2209 2.96154 10L2.96154 4.4C2.96154 4.17909 3.15096 4 3.38462 4ZM5.5 4C5.73366 4 5.92308 4.17909 5.92308 4.4V10C5.92308 10.2209 5.73366 10.4 5.5 10.4C5.26634 10.4 5.07692 10.2209 5.07692 10V4.4C5.07692 4.17909 5.26634 4 5.5 4ZM8.03846 4.4V10C8.03846 10.2209 7.84904 10.4 7.61538 10.4C7.38173 10.4 7.19231 10.2209 7.19231 10V4.4C7.19231 4.17909 7.38173 4 7.61538 4C7.84904 4 8.03846 4.17909 8.03846 4.4Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                            <p>${jsLang('Remove from History')}</p>
                                        </a>
                                        <a href="${response.data.file}" download="${response.data.name}" class="file-need-download flex justify-start items-center gap-1.5 text-14 font-normal text-color-14 dark:text-white font-Figtree px-4 py-2 hover:bg-color-F6 dark:hover:bg-[#3A3A39] rounded-t-none rounded-b-lg text-left">
                                            <span class="w-4 h-4">
                                                <svg  class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8 11.5L3.625 7.125L4.85 5.85625L7.125 8.13125V1H8.875V8.13125L11.15 5.85625L12.375 7.125L8 11.5ZM1 15V10.625H2.75V13.25H13.25V10.625H15V15H1Z" fill="currentColor"/>
                                                </svg>
                                            </span>
                                            
                                            <p>${jsLang('Download Audio')}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>`;

                $('.voice-verse-list').prepend(html);
                $(".loader").addClass('hidden');
                $('#voice-clone').removeAttr('disabled');
            }
            

            toastMixin.fire({
                title: jsLang('Voice cloned successfully.'),
                icon: 'success'
            });
        },
        error: function(error) {
            let message = error.responseJSON.message ? error.responseJSON.message : error.responseJSON.error
            errorMessage(message, 'voice-clone');
        },
    });
})

$('#voiceCloneEditForm').on('submit', function(e) {
    e.preventDefault();

    let data = new FormData();

    let formData = $(this).serializeArray();
    $.each(formData, function (key, input) {
        data.append(input.name, input.value);
    });

    let fileInput = $('#image');

    if (fileInput.length > 0) {
        let fileData = fileInput.prop('files')[0];
        if (fileData) {
            data.append('file', fileData);
        }
    }

    data.append('dataType', 'json');
    data.append('_token', CSRF_TOKEN);

    $.ajax({
        url: PROMPT_URL,
        type: "POST",
        data: data,
        processData: false,
        contentType: false,
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
            $("#voiceCloneEditForm .clone-loader").removeClass('hidden');
            $('#edit-voice-clone').attr('disabled', 'disabled');
        },
        complete: function() {
            $("#voiceCloneEditForm .clone-loader").addClass('hidden');
        },
        success: function(response) {
            if (response.status == 'error') {
                errorMessage(response.message, 'edit-voice-clone');
            }

            $('#edit-voice-clone').removeAttr('disabled');

            toastMixin.fire({
                title: response.message,
                icon: response.status
            });
        },
        error: function(error) {
            let message = error.responseJSON.message ? error.responseJSON.message : error.responseJSON.error
            errorMessage(message, 'edit-voice-clone');
        },
    });
})

$(document).on('click', '.delete-voice', function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    var provider = $(this).attr("data-provider");
    $.ajax({
        url: SITE_URL + "/user/voice-clone/delete",
        type: "DELETE",
        data: {
            id: id,
            provider: provider,
            dataType: 'json',
            _token: CSRF_TOKEN
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + ACCESS_TOKEN);
        },
        success: function(response) {
            toastMixin.fire({
                title: response.message,
                icon: response.status,
            });
            $('#voice_'+id).remove();
        },
    })
    
});
