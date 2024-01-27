document.addEventListener("DOMContentLoaded", function () {
  const imageFilenames = [
    "file1.jpg",
    "file2.jpg",
    "file3.jpg",
    "file4.jpg",
    "file5.jpg",
    "file6.jpg",
  ];

  // Get the <ul> element where the images will be added
  const imageList = document.querySelector(".gallery");

  // Iterate over each image filename and create <li> elements with <img> tags
  imageFilenames.forEach((filename) => {
    const listItem = document.createElement("li");

    const link = document.createElement(`a`);
    link.className = "gallery__item";
    const image = document.createElement("img");
    image.className = "gallery__image";

    // Set the src attribute of the <img> tag to the image filename
    image.src = `images/${filename}`; // Assuming the images folder is named "images"
    image.alt = filename; // Set alt attribute for accessibility

    // Append the <img> tag to the <li> element
    listItem.appendChild(image);

    // Append the <li> element to the <ul> element
    imageList.appendChild(listItem);
  });

  let gallery = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });

  gallery.on("show.simplelightbox", function () {
    console.log("Lightbox is shown");
  });
});
