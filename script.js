const visor = document.querySelector('input')

        var podeColocarSinal = false
        var podeColocarPonto = true

        //Números
        function clickBt9() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "9"
            podeColocarSinal = true
        }
        function clickBt8() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "8"
            podeColocarSinal = true
        }
        function clickBt7() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "7"
            podeColocarSinal = true
        }
        function clickBt6() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "6"
            podeColocarSinal = true
        }
        function clickBt5() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "5"
            podeColocarSinal = true
        }
        function clickBt4() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "4"
            podeColocarSinal = true
        }
        function clickBt3() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "3"
            podeColocarSinal = true
        }
        function clickBt2() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "2"
            podeColocarSinal = true
        }
        function clickBt1() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "1"
            podeColocarSinal = true
        }
        function clickBt0() {
            if (visor.value.endsWith("por 0") || visor.value.endsWith("expressão")) {
                resetarTexto()
            }
            visor.value += "0"
            podeColocarSinal = true
        }

        //Sinais
        function clickBtAdicao(params) {
            if (podeColocarSinal == true && !visor.value.endsWith("por 0")) {
                visor.value += " + "
                podeColocarSinal = false
                podeColocarPonto = true
            }
        }
        function clickBtSubtracao(params) {
            if (!visor.value.endsWith("por 0") && !visor.value.endsWith(". ")) {
                visor.value += " - "
                podeColocarSinal = false
                podeColocarPonto = true
            }
        }
        function clickBtMultiplicacao(params) {
            if (podeColocarSinal == true && !visor.value.endsWith("por 0")) {
                visor.value += " * "
                podeColocarSinal = false
                podeColocarPonto = true
            }
        }
        function clickBtDivisao(params) {
            if (podeColocarSinal == true && !visor.value.endsWith("por 0")) {
                visor.value += " / "
                podeColocarSinal = false
                podeColocarPonto = true
            }
        }
        function clickBtPonto(params) {
            if (podeColocarPonto == true && visor.value !== "" && !visor.value.endsWith(" ") && !visor.value.endsWith("por 0")) {
                visor.value += "."
                podeColocarPonto = false
                podeColocarSinal = false
            }
        }
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
                if(visor.value == ""){
                    visor.value = "Digite uma expressão"
                }
                else{
                    visor.value = "Impossível dividir por 0"
                }
                visor.style.color = "red"
                visor.style.textAlign = "center"
            }
            else {
                visor.value = resultado
            }
        }

        function resetarTexto() {
            visor.value = ""
            visor.style.color = "black"
            visor.style.textAlign = "right"
        }