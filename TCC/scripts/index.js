const lista_Materiais = [
    {
        imagem: "https://th.bing.com/th/id/OIP.G3AjAkfywkbXVR9UB2JxNwHaHa?pid=ImgDet&rs=1",
        description: "Pequeno dispositivo em forma de cilindro usado para emitir sons com diversas frequências",
        preco:"R$ 18,69",
        link:"https://www.google.com/search?q=buzzer&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwj994f6_Ln6AhWhOLkGHT1eDCkQ_AUoAXoECAEQAQ"
    },
]

let aparecer = false
let modal_OPEN = false

function geral_OPEN(className){
    let paragrafo = document.querySelector(`#${className}-paragrafo`)
    let topic = document.querySelector(`#${className}`)

    if (aparecer === true) {
        paragrafo.classList.add('oculto')
        topic.classList.remove('OPEN')
        aparecer = false
        return
    }

    topic.classList.add('OPEN')
    paragrafo.classList.remove('oculto')
    aparecer = true
}

function objetivo(){
  geral_OPEN("objetivo")
}

function publicoAlvo(){
    geral_OPEN("publico-alvo")
}

function funcionamento(){
    geral_OPEN("funcionamento")
}

function modal(num){
    let componente = num
    let modal = document.querySelector("dialog");
    
    modal.style.display = "flex"

    carregarInfo(componente)

    modal.showModal();

}

function fechar(){
    let modal = document.querySelector("dialog");

    modal.style.display = "none"

    modal.close();

}

function carregarInfo(componenteTipo){
    let  info = document.getElementById('modal_info')

    info.innerHTML = `<img src="${lista_Materiais[componenteTipo].imagem}">
    <p>${lista_Materiais[componenteTipo].description}</p>
    <p>${lista_Materiais[componenteTipo].preco}</p>
    <a href="${lista_Materiais[componenteTipo].link}" target="_blank">Comprar</a>
    <p onclick="fechar()">Fechar</p>`

}
