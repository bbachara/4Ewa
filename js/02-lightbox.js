document.addEventListener("DOMContentLoaded", function () {
  // Get the <ul> element where the images will be added
  const imageList = document.querySelector(".gallery");

  const imageCount = 24; // Total number of images

  // Create an array of image filenames
  const imageFilenames = Array.from(
    { length: imageCount },
    (_, index) => `file${index + 1}.jpg`
  );

  // Iterate over each image filename and create <li> elements with <img> tags
  const galleryMarkup = imageFilenames.map((filename) => {
    const li = document.createElement("li");

    const link = document.createElement(`a`);
    link.className = "gallery__item";
    link.href = `images/${filename}`;
    const img = document.createElement("img");
    img.className = "gallery__image";

    // Set the src attribute of the <img> tag to the image filename
    img.src = `images/${filename}`; // Assuming the images folder is named "images"
    img.alt = filename; // Set alt attribute for accessibility
    img.dataset.source = `images/${filename}`;

    link.appendChild(img);
    li.appendChild(link);

    return li;
  });

  imageList.append(...galleryMarkup);

  let gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionsDataAlt: "Image description",
  });

  gallery.on("show.simplelightbox", function () {
    console.log("Lightbox is shown");
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the <ul> element where the images will be added
//   const imageList = document.querySelector(".gallery");

//   // Iterate over each image filename and create <li> elements with <img> tags
//   const galleryMarkup = [
//     "file1.jpg",
//     "file2.jpg",
//     "file3.jpg",
//     "file4.jpg",
//     "file5.jpg",
//     "file6.jpg",
//     "file7.jpg",
//     "file8.jpg",
//     "file9.jpg",
//     "file10.jpg",
//     "file11.jpg",
//     "file12.jpg",
//     "file13.jpg",
//     "file14.jpg",
//     "file15.jpg",
//     "file16.jpg",
//     "file17.jpg",
//     "file18.jpg",
//     "file19.jpg",
//     "file20.jpg",
//     "file21.jpg",
//     "file22.jpg",
//     "file23.jpg",
//     "file24.jpg",
//   ].map((filename) => {
//     const li = document.createElement("li");

//     const link = document.createElement(`a`);
//     link.className = "gallery__item";
//     link.href = `images/${filename}`;
//     const img = document.createElement("img");
//     img.className = "gallery__image";

//     // Set the src attribute of the <img> tag to the image filename
//     img.src = `images/${filename}`; // Assuming the images folder is named "images"
//     img.alt = filename; // Set alt attribute for accessibility
//     img.dataset.source = `images/${filename}`;

//     link.appendChild(img);
//     li.appendChild(link);
