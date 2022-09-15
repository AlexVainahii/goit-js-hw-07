import { galleryItems } from "./gallery-items.js";
// Change code below this line
let galeryList = "";
galleryItems.forEach((item) => {
  const { preview, original, description } = item;
  galeryList =
    galeryList +
    `<div class="gallery__item"><a class="gallery__link" href="${original}"> <img class="gallery__image"
    src="${preview}" data-source="${original}" alt="${description}" /> </a> </div>`;
});
const mainGalery = document.querySelector(".gallery");
mainGalery.insertAdjacentHTML("afterbegin", galeryList);
console.log(galleryItems);

mainGalery.addEventListener("click", selectImg);

function selectImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
        <img
    src="${event.target.dataset.source}" height="600px" width="800px"  /> 
    </div>`);
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", (event) => {
        console.log("hey");
      });
    }
  });
}
