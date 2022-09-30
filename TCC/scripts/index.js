let aparecer = false;
let menu_OPEN = false;


function geral_OPEN(className) {
  let paragrafo = document.querySelector(`#${className}-paragrafo`);
  let topic = document.querySelector(`#${className}`);

  if (aparecer === true) {
    paragrafo.classList.add("oculto");
    topic.classList.remove("OPEN");
    aparecer = false;
    return;
  }

  topic.classList.add("OPEN");
  paragrafo.classList.remove("oculto");
  aparecer = true;
}

function objetivo() {
  geral_OPEN("objetivo");
}

function publicoAlvo() {
  geral_OPEN("publico-alvo");
}

function funcionamento() {
  geral_OPEN("funcionamento");
}

function modal(num) {
  let componente = num;
  let modal = document.querySelector("dialog");

  modal.style.display = "flex";

  carregarInfo(componente);

  modal.showModal();
}

function fechar() {
  let modal = document.querySelector("dialog");

  modal.style.display = "none";

  modal.close();
}

function carregarInfo(componenteTipo) {
  let info = document.getElementById("modal_info");

  info.innerHTML = `
    <div class="close"><svg xmlns="http://www.w3.org/2000/svg" onclick="fechar()" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg></div>
    <img src="${lista_Materiais[componenteTipo].imagem}">
    <h3>${lista_Materiais[componenteTipo].nome}</h3>
    <p>${lista_Materiais[componenteTipo].description}</p>
    <p>${lista_Materiais[componenteTipo].preco}</p>
    <a href="${lista_Materiais[componenteTipo].link}" target="_blank">Comprar</a>`;
}

function init() {
  let modal = document.querySelector("dialog");

  modal.style.display = "none";

  modal.close();
}

function opneSideMenu() {
  let sideMenu = document.getElementById("sideMenu");
  let menuContent = document.getElementById("menu");
  let mainNav = document.getElementById("main_nav")

  if (menu_OPEN === false) {
    // fechar
    menuContent.style.borderRadius = "0 0 0 0"
    mainNav.style.right = "0"
    menuContent.style.width = "0";
    menuContent.classList.add("menuHide")
    sideMenu.classList.remove("listStyle")
    sideMenu.classList.add("hide");
    mainNav.classList.remove("Open-nav")
    menu_OPEN = true;
    return;
  }

  

  //abrir
  menuContent.style.borderRadius = "30px 0 0 0"
  mainNav.style.right = "76%"
  mainNav.classList.add("Open-nav")
  menuContent.classList.remove("menuHide")
  menuContent.classList.add("menuStyle")
  sideMenu.classList.add("listStyle")
  sideMenu.classList.remove("hide");
  menuContent.style.width = "90vw";
  menu_OPEN = false;
}

window.onload = init();
