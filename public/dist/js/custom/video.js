'use strict';

function showVideo(videoUrl, title) {
    // Update the modal title
    let modalTitle = document.getElementById("videoModalLabel");
    modalTitle.textContent = title;

    // Clear any previous video if present
    let videoContainer = document.getElementById('videoContainer');
    videoContainer.innerHTML = '';

    // Create a new video element
    let videoHtml = `<video id="modalVideo" width="100%" controls>
                        <source src="${videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                     </video>`;

    // Insert the video into the container
    videoContainer.innerHTML = videoHtml;

    // Initialize and show the modal
    let videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();

    // Optional: Reset video when modal is closed
    let modalElement = document.getElementById('videoModal');
    modalElement.addEventListener('hidden.bs.modal', function () {
        let videoElement = document.getElementById('modalVideo');
        if (videoElement) {
            videoElement.pause();  // Pause the video
            videoElement.currentTime = 0;  // Reset to start
        }
    });
}
