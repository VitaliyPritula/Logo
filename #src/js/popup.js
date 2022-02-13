const btn = document.querySelector(".button");
const modal = document.querySelector(".modal");
const darken = document.querySelector(".darken");

btn.addEventListener("click", openModal);
darken.addEventListener("click", closeModal);

function openModal() {
  darken.classList.add("darken-show");
  btn.classList.add("btn-hide");
  modal.classList.add("modal-show");
}

function closeModal() {
  darken.classList.remove("darken-show");
  btn.classList.remove("btn-hide");
  modal.classList.remove("modal-show");
}
