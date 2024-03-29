document.addEventListener("DOMContentLoaded", function () {
  // Get the <ul> element where the images will be added
  const imageList = document.querySelector(".gallery");

  const imageCount = 24; // Total number of images

  // Create an array of image filenames
  const imageFilenames = Array.from(
    { length: imageCount },
    (_, index) => `file${index + 1}.jpg`
  );

  const galleryMarkup = imageFilenames.map((filename) => {
    const div = document.createElement(`div`);
    div.className = `gallery__item`;

    const link = document.createElement(`a`);
    link.className = "gallery__link";
    link.href = `images/${filename}`;
    const img = document.createElement("img");
    img.className = "gallery__image";

    // Set the src attribute of the <img> tag to the image filename
    img.src = `images/${filename}`; // Assuming the images folder is named "images"

    img.dataset.source = `images/${filename}`;
    img.alt = filename; // Set alt attribute for accessibility

    link.appendChild(img);
    div.appendChild(link);
    return div;
  });

  imageList.append(...galleryMarkup);

  // Initialize lightbox instances
  galleryMarkup.forEach((div) => {
    const instance = basicLightbox.create(
      `
      <img src="${div.querySelector("img").dataset.source}" alt="${
        div.querySelector("img").alt
      }">
    `,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              instance.close();
            }
          });
        },
      }
    );

    div.addEventListener("click", (event) => {
      event.preventDefault();
      instance.show();
    });
  });
});
