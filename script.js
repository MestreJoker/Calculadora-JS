const visor = document.querySelector('input')
let section = document.querySelector('.botoes')

let podeColocarSinal = false
let podeColocarPonto = true

//Números
for(let i = 0; i<=9; i++){
    section.innerHTML+= `<div id="bt${i}" onclick="clickBtNumero(${i})">${i}</div>`
}

function clickBtNumero(numero){
    if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
        resetarTexto()
    }
    visor.value += numero
    podeColocarSinal = true
}

//Sinais (+, *, /)
function clickBtSinal(sinal){
     if (podeColocarSinal == true && visor.value !== "" && !visor.value.endsWith(" ") && !visor.value.endsWith("por 0")) {
        visor.value += sinal
        podeColocarPonto = true
        podeColocarSinal = false
    }
    
}

//Subtração
function clickBtSubtracao(params) {
    if (!visor.value.endsWith("por 0") && !visor.value.endsWith(".")) {
        visor.value += " - "
        podeColocarSinal = false
        podeColocarPonto = true
    }
}

//Botões func
function clickBtC() {
    resetarTexto()
    podeColocarPonto = true
    podeColocarSinal = false
}
function clickBtCE(params) {
    if (!visor.value.endsWith("por 0")) {
        if (visor.value.endsWith(" ")) {
            visor.value = visor.value.slice(0, -3);
            podeColocarSinal = true;

            let partes = visor.value.split(/[\+\-\*\/]/);
            let ultimoNumero = partes[partes.length - 1].trim();
            podeColocarPonto = !ultimoNumero.includes(".");
        }
        else if (visor.value.endsWith(".")) {
            podeColocarPonto = true
            visor.value = visor.value.slice(0, -1)
        }
        else {
            visor.value = visor.value.slice(0, -1);
        }
    }
}

function clickBtIgual(params) {
    const resultado = math.evaluate(visor.value)
    if (resultado == Infinity || isNaN(resultado)) {
        if (visor.value == "") {
            visor.value = "Digite uma expressão"
        }
        else {
            visor.value = "Impossível dividir por 0"
        }
        visor.style.color = "red"
        visor.style.textAlign = "center"
    }
    else {
        visor.value = resultado
    }
}

function clickBtPonto(params) {
    if (podeColocarPonto == true && visor.value !== "" && !visor.value.endsWith(" ") && !visor.value.endsWith("por 0")) {
        visor.value += "."
        podeColocarPonto = false
        podeColocarSinal = false
    }
}

//Resetando valores
function resetarTexto() {
    visor.value = ""
    visor.style.color = "black"
    visor.style.textAlign = "right"
}