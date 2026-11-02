/* Opens page images in a simple, keyboard-accessible lightbox. */
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("image-lightbox");
    const enlargedImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("lightbox-close");
    if (!lightbox || !enlargedImage || !closeButton) return;

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        enlargedImage.src = "";
    }

    document.querySelectorAll("img[data-lightbox]").forEach(function (image) {
        image.addEventListener("click", function () {
            enlargedImage.src = image.src;
            enlargedImage.alt = image.alt || "Expanded image";
            lightbox.classList.add("is-open");
            closeButton.focus();
        });
    });
    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox || event.target === enlargedImage) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeLightbox();
    });
});
