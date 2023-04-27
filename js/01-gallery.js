import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";

// Change code below this line
// Сворення шаблону і додавання картинок

const galleryList = document.querySelector(".gallery");

const galleryMarkupItems = ({ preview, original, description }) => {
  return `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
};

const galleryMarkup = galleryItems
  .map((item) => galleryMarkupItems(item))
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// події

const handleGalleryItemClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageSrc = event.target.getAttribute("data-source");
  const imageAlt = event.target.getAttribute("alt");

  const modalInstance = basicLightbox.create(`
    <div class="modal-content">
      <img src="${imageSrc}" alt="${imageAlt}" width="900" height="500" />
    </div>
  `);

  modalInstance.show();

  const divRef = document.querySelector(".modal-content");

  divRef.addEventListener("click", () => {
    modalInstance.close();
  });

  galleryList.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      modalInstance.close();
    }
  });
};

galleryList.addEventListener("click", handleGalleryItemClick);
