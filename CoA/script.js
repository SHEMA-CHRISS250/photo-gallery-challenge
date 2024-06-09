document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const fullsizeViewer = document.getElementById('fullsize-viewer');
    const fullsizeImage = document.getElementById('fullsize-image');
    const closeBtn = document.getElementById('close-btn');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const fullsizeSrc = thumbnail.getAttribute('data-full');
            fullsizeImage.setAttribute('src', fullsizeSrc);
            fullsizeViewer.classList.add('show');
        });
    });

    closeBtn.addEventListener('click', function() {
        fullsizeViewer.classList.remove('show');
    });

    fullsizeViewer.addEventListener('click', function(event) {
        if (event.target === fullsizeViewer) {
            fullsizeViewer.classList.remove('show');
        }
    });
});
