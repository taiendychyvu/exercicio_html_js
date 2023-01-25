const formulario = document.getElementById(`formulario`)



formulario.addEventListener(`submit` , function(e){
    e.preventDefault();
    const valorA = document.getElementById(`valor1`)
    const valorB = document.getElementById(`valor2`)
    const valorIntA = parseInt(valorA.value)
    const valorIntB = parseInt(valorB.value)
    const resultado = comparar()
    const msgValorAMaior = `<b>${valorIntA}</b> infelizmente é um valor maior que <b>${valorIntB}</b>`
    const msgValorBMaior = `Parabéns o valor <b>${valorIntA}</b> é menor que o <b>${valorIntB}</b>`
    const msgResultado = document.querySelector(`.resultado`)


    function comparar() {
        const teste = valorIntA
        return teste < valorIntB
    }

    if(resultado) {
        msgResultado.innerHTML = msgValorBMaior;
        msgResultado.style.color = `Green`;
        
    } else {
        msgResultado.innerHTML = msgValorAMaior;
        msgResultado.style.color = `red`;
        
    }
});




