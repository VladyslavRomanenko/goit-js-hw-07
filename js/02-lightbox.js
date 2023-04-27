import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const galleryMarkupItems = ({ preview, original, description }) => {
  return `<li class="gallery__item">
   <a class="gallery__link" href="${original}" ">
      <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
   </a>
</li>`;
};

const galleryMarkup = galleryItems
  .map((item) => galleryMarkupItems(item))
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
// console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});
