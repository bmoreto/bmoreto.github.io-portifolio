const projetos = document.querySelectorAll(".projeto-bg button");

function ativarProjeto(event) {
  const projeto = event.currentTarget;
  const controls = projeto.getAttribute("aria-controls");
  const mostrarProjeto = document.getElementById(controls);

  mostrarProjeto.classList.toggle("ativa");
  const ativa = mostrarProjeto.classList.contains("ativa");
  projeto.setAttribute("aria-expanded", ativa);
}

function eventosProjetos(projeto) {
  projeto.addEventListener("click", ativarProjeto);
}

projetos.forEach(eventosProjetos);
