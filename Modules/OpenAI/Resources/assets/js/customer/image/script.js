'use strict';

let activeProvider = $('#provider option:selected').val();
let model = $("select[name='" + activeProvider + "[model]'] option:selected").val();
let dataAttrValues = {};
let attrValue;

function hideProviderOptions() 
{
    $('.ProviderOptions').each(function() {
        $(this).addClass('hidden')
    });
}

function updateDataAttr()
{
    for (let key in dataAttrValues) {
        if (dataAttrValues.hasOwnProperty(key)) {
            let value = dataAttrValues[key];
            let elem = $('[data-attr="' + value + '"]');
            
            if (model === value) {
                elem.removeClass('hidden');
                elem.each(function () {
                    let hasOptions = $(this).find('select option').length <=1 ? false : true;
                    if (!hasOptions) {
                        $(this).addClass('hidden');
                    }
                });
            } else {
                elem.addClass('hidden');
            }
        }
    }

    let $providerDiv = $('.' + activeProvider + '_div');
    let $children = $providerDiv.children();

    $children.each(function() {
        let current = $(this);

        if (current.data('field')) {
            return;
        }
    
        let hasOptions = (current.find('select option').length <= 1) ? false : true;
    
        if (!hasOptions) {
            current.addClass('hidden');
        }
    });
    
    if ($children.length === $children.filter('.hidden').length) {
        $('.AdavanceOption').addClass('hidden');
    }

}

function storeAttrObject()
{
    $('[data-attr]').each(function() {
        attrValue = $(this).data('attr');
        dataAttrValues[$(this).attr('data-attr')] = attrValue;
    });
}


$('.AdavanceOption').on('click', function() {
    var className = $('#ProviderOptionDiv').attr('class');
    if (className == 'hidden') {
        hideProviderOptions()
        let activeProvider = $('#provider option:selected').val();

        $('.' + activeProvider + '_div').removeClass('hidden');
        $('#ProviderOptionDiv').removeClass('hidden');
    } else {
        $('#ProviderOptionDiv').addClass('hidden');
    }
});

function clear() {
    const imageDescriptionParent = $("#image-description").parent();
    
    if (imageDescriptionParent.is(":hidden")) {
        imageDescriptionParent.show();
        $("#image-description").attr('required', true);
    }
    
    // Always show the image description parent
    imageDescriptionParent.show();
    $('.AdavanceOption').removeClass('hidden');
}

$('#provider').on('change', function() {
    clear()
    hideProviderOptions();
    activeProvider = $(this).val();
    $('.' + activeProvider + '_div').removeClass('hidden');
    model = $("select[name='" + activeProvider + "[model]'] option:selected").val(); 
    storeAttrObject();

    $('select.service-class.' + activeProvider ).trigger('change');
    updateDataAttr();
});

$(document).ready(function() {
    $('#provider').trigger('change');
})

$(document).on('change', '.model-class', function() {
    model = $(this).val();
    handleServiceClassChange($('.service-class'));
});

// Service class change event handler
$(document).on('change', '.service-class', function() {
    handleServiceClassChange($(this));
});

// Separate function to handle service class logic
function handleServiceClassChange($serviceClass) {
    const model = $(`select[name='${activeProvider}[model]']`).val();
    
    if ($(`select[name='${activeProvider}[service]']`).length == 0) {
        updateDataAttr();
        return ;
    }

    // Only get data attributes if this was triggered by direct service class change
    const selectedOption = $serviceClass.find('option:selected');
    const dataAttributes = selectedOption.length ? selectedOption.data() : {};
    
    // Process each data attribute
    $.each(dataAttributes, function(key, value) {
        const show = Boolean(value);
        const field = $(`[data-field="${key}"]`);
        
        if (field.length) {
            // Toggle field visibility
            field.toggleClass('hidden', !show);
            
            // Update required attributes
            field.find('input, textarea, select').prop('required', show);
        } else {
            // Toggle model-specific fields
            const selector = typeof model === 'undefined' 
                    ? `select[name='${activeProvider}[${key}]']`
                    : `select[name='${activeProvider}[${key}][${model}]']`;

            $(selector).parent().toggleClass('hidden', !show);
        }
    });

    updateDataAttr();
}


    $(document).on('click', '#image-creation', function(e) {
        var gethtml = '';
        e.preventDefault(); // Prevent default form submission

        let isValid = true;
    
        // Reset all fields to avoid conflicts in validation
        $('[data-field]').find('input, textarea, select').each(function() {
            $(this).removeAttr('required'); // Remove any pre-existing required attributes
        });
    
        // Set required attribute only for visible fields
        $('[data-field]').each(function() {
            if ($(this).is(':visible')) {
                $(this).find('input, textarea, select').prop('required', true); // Add required attribute for visible fields
            }
        });
    
        // Validate each field manually
        $('[data-field]').find('input, textarea, select').each(function() {
            // If the field is visible and invalid, trigger validation
            if ($(this).is(':visible') && !$(this)[0].checkValidity()) {
                $(this)[0].reportValidity(); // Show validation error message
                isValid = false; // Mark the form as invalid
                return false;
            }
        });
    
        // If form is valid, proceed with form data submission
        if (!isValid) {
            return false;
        }
    
        // If form is valid, proceed with form data submission
        let data = new FormData($('#ImageForm')[0]);
        // If you also need to see the serialized array
        let formDataArray = $('#ImageForm').serializeArray();
        $.each(formDataArray, function (key, input) {
            data.append(input.name, input.value);
        });

        let provider = $('#provider').val();
        let fileInput = $('input[name="'+provider+'_file"]');

        if (fileInput.length > 0) {
            let fileData = fileInput.prop('files')[0];
            if (fileData) {
                data.append('file', fileData);
            }
        }
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': csrf
            },
            method: 'POST',
            url: url,
            data: data,
            processData: false,
            contentType: false,
            beforeSend: function(xhr) {
                $("#ImageForm .loader").removeClass('hidden');
                $('#image-creation').attr('disabled', 'disabled');
                xhr.setRequestHeader("Authorization", "Bearer " + ACCESS_TOKEN);
            },
            complete: function() {
                
            },
            success: function(response, textStatus, jqXHR) {

                if (textStatus == 'success' && jqXHR.status == 201) {
                    $("#ImageForm .loader").addClass('hidden');

                    $(".static-image-text").addClass('hidden');
                    let credit = $('.image-credit-remaining');
                    
                    // Image creadit balance update
                    if (!isNaN(credit.text()) && response.data.images != null && response.data.balance_reduce_type == 'subscription') {
                        credit.text(credit.text() - response.data.images.length);
                    }

                    gethtml +='<div class="flex flex-wrap justify-center items-center md:gap-6 gap-5 mt-10 image-content1 9xl:mx-32 3xl:mx-16 2xl:mx-5">'
                        $.each(response.data.images, function(key, image) {
                            gethtml +='<div class="relative md:w-[300px] md:h-[300px] w-[181px] h-[181px] download-image-container md:rounded-xl rounded-lg">'
                            gethtml += '<img class="m-auto md:w-[300px] md:h-[300px] w-[181px] h-[181px] cursor-pointer md:rounded-xl rounded-lg border border-color-DF dark:border-color-3A object-cover"src="'+ image.url +'" alt=""><div class="image-hover-overlay"></div>'
                            gethtml +='<div class=" flex gap-3 right-3 bottom-3 absolute">'
                            gethtml += '<div class="image-download-button"><a class="relative tooltips w-9 h-9 flex items-center m-auto justify-center" href="'+ image.slug_url +'">'
                            gethtml +=`<img class="w-[18px] h-[18px]" src="${SITE_URL}/Modules/OpenAI/Resources/assets/image/view-eye.svg" alt="">`
                            gethtml +='<span class="image-download-tooltip-text z-50 w-max text-white items-center font-medium text-12 rounded-lg px-2.5 py-[7px] absolute z-1 top-[138%] left-[50%] ml-[-22px]">View</span>'
                            gethtml += '</a>'
                            gethtml += '</div>'
                            gethtml += '<div class="image-download-button"><a class="file-need-download relative tooltips w-9 h-9 flex items-center m-auto justify-center" href="'+ image.url +'" download="'+ filterXSS(response.data.title) +'" Downlaod>'
                            gethtml +=`<img class="w-[18px] h-[18px]" src="${SITE_URL}/Modules/OpenAI/Resources/assets/image/file-download.svg" alt="">`
                            gethtml +='<span class="image-download-tooltip-text z-50 w-max text-white items-center font-medium text-12 rounded-lg px-2.5 py-[7px] absolute z-1 top-[138%] left-[50%] ml-[-38px]">Download</span>'
                            gethtml += '</a>'
                            gethtml += '</div>'
                            gethtml += '</div>'
                            gethtml += '</div>'

                        });
                        gethtml += '</div>';

                        $('#image-content').prepend(gethtml);
                        $(".loader").addClass('hidden');
                        $('#image-creation').removeAttr('disabled');
                    
                    toastMixin.fire({
                        title: jsLang('Image generated successfully.'),
                        icon: 'success'
                    });
                } else {
                    errorMessage(jsLang('Something went wrong'), 'image-creation');
                }
            },
            error: function(error) {
                let message = error.responseJSON.message ? error.responseJSON.message : error.responseJSON.error
                errorMessage(message, 'image-creation');
            },
        });
})
