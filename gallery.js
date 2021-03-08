import galleryItems from "./gallery-items.js"

const galleryEl = document.querySelector('.gallery');
const modalEl = document.querySelector(".js-lightbox");
const overlayEl = document.querySelector(".lightbox__overlay");
const modalImgEl = document.querySelector(".lightbox__image");
const closeBtnEl = document.querySelector(".lightbox__button");

const gallery = galleryItems.reduce(
    (acc, item) => acc + `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`, "");

galleryEl.insertAdjacentHTML("beforeEnd", gallery);

    
  galleryEl.addEventListener("click", onOpenModal);
  closeBtnEl.addEventListener("click", onCloseModal);
  overlayEl.addEventListener("click", onCloseModalOnOverlay);
  
function onOpenModal (event) {
  event.preventDefault();
  if(event.target.nodeName !== "IMG") { 
    return
   };
    document.addEventListener("keydown", onCloseModalByEsc);

   modalEl.classList.add("is-open");
   modalImgEl.src = event.target.dataset.source;
   modalImgEl.alt = event.target.alt;

}

function onCloseModal (event) {
 document.removeEventListener("keydown", onCloseModalByEsc);
 modalEl.classList.remove("is-open");
  modalImgEl.src = "";
   

}
function onCloseModalOnOverlay (event) {
  if (event.currentTarget === event.target) {
   onCloseModal();
  }
}

function onCloseModalByEsc (event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}