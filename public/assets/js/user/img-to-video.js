"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const fileContainer = document.getElementById("imgFile-container");
    const fileUploadContainer = document.getElementById("file-upload-container");
    const errorMessage = document.getElementById("error-message");
    const fileInput = document.getElementById("file_input");

    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
        const dropZoneElement = inputElement.closest(".drop-zone");

        dropZoneElement.addEventListener("click", () => {
            inputElement.click();
        });

        inputElement.addEventListener("change", (e) => {
            handleFiles(inputElement.files);
        });

        dropZoneElement.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropZoneElement.classList.add("drop-zone--over");
        });

        ["dragleave", "dragend"].forEach((type) => {
            dropZoneElement.addEventListener(type, () => {
                dropZoneElement.classList.remove("drop-zone--over");
            });
        });

        dropZoneElement.addEventListener("drop", (e) => {
            e.preventDefault();
            dropZoneElement.classList.remove("drop-zone--over");

            if (e.dataTransfer.files.length) {
                handleFiles(e.dataTransfer.files);
                const fileList = new DataTransfer();
                for (let file of e.dataTransfer.files) {
                    fileList.items.add(file);
                }
                fileInput.files = fileList.files;
            }
        });
    });

    function handleFiles(files) {
        const validFiles = Array.from(files).filter((file) => {
            const fileExtension = getFileExtension(file.name);
            return isAllowedExtension(fileExtension);
        });

        if (validFiles.length === 0) {
            displayError(jsLang("Invalid file type. Only jpeg and png are allowed."));
            return;
        }

        errorMessage.classList.add("hidden");

        for (let i = 0; i < validFiles.length; i++) {
            const file = validFiles[i];
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = function () {
                const { width, height } = img;
                if (
                    (width === 1024 && height === 576) ||
                    (width === 576 && height === 1024) ||
                    (width === 768 && height === 768)
                ) {
                    addFileToContainer(file);
                    fileUploadContainer.classList.add("hidden");
                } else {
                    displayError(jsLang("Invalid dimensions. Allowed dimensions are 1024x576, 576x1024, or 768x768."));
                }
            };
        }
    }

    function addFileToContainer(file) {
        const fileDiv = document.createElement("div");
        fileDiv.classList.add("img-file-container"); 
        const fileElement = document.createElement("img");
        fileElement.src = URL.createObjectURL(file);
        fileElement.classList.add("file-preview"); 
        const closeButton = document.createElement("button");
        closeButton.innerHTML = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.25C6 1.83579 6.33579 1.5 6.75 1.5H11.25C11.6642 1.5 12 1.83579 12 2.25C12 2.66421 11.6642 3 11.25 3H6.75C6.33579 3 6 2.66421 6 2.25ZM3.74418 3.75H2.25C1.83579 3.75 1.5 4.08579 1.5 4.5C1.5 4.91421 1.83579 5.25 2.25 5.25H3.04834L3.52961 12.4691C3.56737 13.0357 3.59862 13.5045 3.65465 13.8862C3.71299 14.2835 3.80554 14.6466 3.99832 14.985C4.29842 15.5118 4.75109 15.9353 5.29667 16.1997C5.64714 16.3695 6.0156 16.4377 6.41594 16.4695C6.80046 16.5 7.27037 16.5 7.8382 16.5H10.1618C10.7296 16.5 11.1995 16.5 11.5841 16.4695C11.9844 16.4377 12.3529 16.3695 12.7033 16.1997C13.2489 15.9353 13.7016 15.5118 14.0017 14.985C14.1945 14.6466 14.287 14.2835 14.3453 13.8862C14.4014 13.5045 14.4326 13.0356 14.4704 12.469L14.9517 5.25H15.75C16.1642 5.25 16.5 4.91421 16.5 4.5C16.5 4.08579 16.1642 3.75 15.75 3.75H14.2558C14.2514 3.74996 14.2471 3.74996 14.2427 3.75H3.75731C3.75294 3.74996 3.74857 3.74996 3.74418 3.75ZM13.4483 5.25H4.55166L5.0243 12.3396C5.06455 12.9433 5.09238 13.3525 5.13874 13.6683C5.18377 13.9749 5.23878 14.1321 5.30166 14.2425C5.45171 14.5059 5.67804 14.7176 5.95083 14.8498C6.06513 14.9052 6.22564 14.9497 6.53464 14.9742C6.85277 14.9995 7.26289 15 7.86799 15H10.132C10.7371 15 11.1472 14.9995 11.4654 14.9742C11.7744 14.9497 11.9349 14.9052 12.0492 14.8498C12.322 14.7176 12.5483 14.5059 12.6983 14.2425C12.7612 14.1321 12.8162 13.9749 12.8613 13.6683C12.9076 13.3525 12.9354 12.9433 12.9757 12.3396L13.4483 5.25ZM7.5 7.125C7.91421 7.125 8.25 7.46079 8.25 7.875V11.625C8.25 12.0392 7.91421 12.375 7.5 12.375C7.08579 12.375 6.75 12.0392 6.75 11.625V7.875C6.75 7.46079 7.08579 7.125 7.5 7.125ZM10.5 7.125C10.9142 7.125 11.25 7.46079 11.25 7.875V11.625C11.25 12.0392 10.9142 12.375 10.5 12.375C10.0858 12.375 9.75 12.0392 9.75 11.625V7.875C9.75 7.46079 10.0858 7.125 10.5 7.125Z" fill="white"/>
            </svg>`;
        closeButton.classList.add("imgClose-button");
    
        closeButton.addEventListener("click", () => {
            fileDiv.remove(); 
            const newFileList = new DataTransfer();
            fileInput.files = newFileList.files; 
            fileUploadContainer.classList.remove("hidden");
        });
    
        fileDiv.appendChild(fileElement);
        fileDiv.appendChild(closeButton); 
        fileContainer.appendChild(fileDiv);
    }
    function getFileExtension(fileName) {
        return fileName.split(".").pop().toLowerCase();
    }

    function isAllowedExtension(extension) {
        return ["jpeg", "jpg", "png"].includes(extension);
    }
    function displayError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("hidden");
    }
});


$(document).on("click", ".modal-toggle", function (e) {
  e.preventDefault();
  $('.index-modal').toggleClass('is-visibl');
});

document.querySelectorAll('.inputProgress').forEach(progressBar => {
  if (progressBar) {
      const min = parseFloat(progressBar.min);
      const max = parseFloat(progressBar.max);
      let value = parseFloat(progressBar.value);
      const spanElement = document.querySelector('.img-strength');
      function updateSliderBackground() {
          const percentage = ((value - min) / (max - min) * 100).toFixed(2);
          progressBar.style.background = `linear-gradient(to right, #763CD4 0%, #763CD4 ${percentage}%, #DFDFDF ${percentage}%, #DFDFDF 100%)`;
      }
      function updateSpan() {
          spanElement.textContent = value.toFixed(1);
      }
      updateSliderBackground();
      updateSpan();
      progressBar.addEventListener('input', function () {
          value = parseFloat(this.value);
          updateSliderBackground();
          updateSpan();
      });
  }
});
