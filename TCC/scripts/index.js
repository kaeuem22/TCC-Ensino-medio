let aparecer = false

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