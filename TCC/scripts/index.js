let aparecer = false

function aparecerOuSumir(){
    let paragrafo = document.querySelector('#p')
    let objetivo = document.querySelector("#objetivo")

    if (aparecer === true) {
        paragrafo.classList.add('paragrafo-oculto')
        objetivo.classList.remove('objetivo-OPEN')
        aparecer = false
        return
    }

    objetivo.classList.add('objetivo-OPEN')
    paragrafo.classList.remove('paragrafo-oculto')
    aparecer = true
}