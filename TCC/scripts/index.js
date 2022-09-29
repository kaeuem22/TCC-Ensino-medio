const lista_Materiais = [
    {
        imagem: "https://th.bing.com/th/id/OIP.G3AjAkfywkbXVR9UB2JxNwHaHa?pid=ImgDet&rs=1",
        nome: "Buzzer",
        description: "Pequeno dispositivo em forma de cilindro usado para emitir sons com diversas frequências",
        preco:"R$ 18,69",
        link:"https://www.google.com/search?q=buzzer&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwj994f6_Ln6AhWhOLkGHT1eDCkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "http://www.multipecas.curitiba.br/loja/img/prod/sensor-de-nivel-de-agua-tipo-boia-on-off-90-graus-para-arduino_4361.jpg",
        nome: "Sensor de boia",
        description: "Sensor no estilo de boia para água, que pode ser aplicado de modo horizontal",
        preco:"R$ 19,99",
        link:"https://www.google.com/search?q=sensor+de+boia+90+arduino&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjRpYa_krr6AhWpG7kGHZVXAVkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://www.filipeflop.com/wp-content/uploads/2017/07/2CB22-1.jpg",
        nome: "Jumpers",
        description: "Cabos usados para diversas conexões com arduino, protoboards e outros componentes",
        preco:"R$ 12,50 (conjunto com 40 peças)",
        link:"https://www.google.com/search?q=jumpers&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjZgrTUk7r6AhWrCbkGHVS8BXkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://cf.shopee.com.br/file/a8be9235e4ac094510fc2c55a2d8886e",
        nome: "Resistores",
        description: "Reguladores de tensão usados para impedir que peças do sistema queimem devido a diferenças de tensão",
        preco:"R$ 14,90 (conjunto com 100 peças)",
        link:"https://www.google.com/search?q=resistores+1k&source=lmns&tbm=shop&bih=657&biw=1366&rlz=1C1GCEU_pt-BRBR1018BR1018&hl=pt-BR&sa=X&ved=2ahUKEwjwtLTxk7r6AhVzM7kGHXMPDAkQ_AUoAXoECAEQAQ"
    },
    {
        imagem: "https://www.baudaeletronica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/u/n/uno_cabo.jpg",
        nome: "Arduino",
        description: "Placa mãe usada para conecões, programaçao e execução de códigos",
        preco:"R$ 128,34",
        link:"https://www.google.com/search?q=arduino+uno&rlz=1C1GCEU_pt-BRBR1018BR1018&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjumuuzlLr6AhXKtJUCHbqXCVsQ_AUoAXoECAIQAw&biw=1366&bih=657&dpr=1"
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
    <h3>${lista_Materiais[componenteTipo].nome}</h3>
    <p>${lista_Materiais[componenteTipo].description}</p>
    <p>${lista_Materiais[componenteTipo].preco}</p>
    <a href="${lista_Materiais[componenteTipo].link}" target="_blank">Comprar</a>
    <p onclick="fechar()">Fechar</p>`
}

function init(){
    let modal = document.querySelector("dialog");

    modal.style.display = "none"

    modal.close();
}

window.onload = init()

