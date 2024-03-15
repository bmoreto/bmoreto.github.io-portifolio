const galeria = document.querySelectorAll(".projeto-galeria img");
const galeriaContainer = document.querySelector(".projeto-galeria");

function trocarImagem(event) {
  const img = event.currentTarget;
  const idGaleria = img.getAttribute("id");
  const container = document.querySelector(".projeto-galeria");
  const idContainer = container.getAttribute("id");

  if (idGaleria == idContainer) {
    galeriaContainer.prepend(img);
  }

  console.log(idGaleria, idContainer);
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
