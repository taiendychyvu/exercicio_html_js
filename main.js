const formulario = document.getElementById(`formulario`)



formulario.addEventListener(`submit` , function(e){
    e.preventDefault();
    const valorIntA = parseInt(document.getElementById(`valor1`).value);
    const valorIntB = parseInt(document.getElementById(`valor2`).value);
    const resultado = valorIntA < valorIntB
    const resultadoIgual = valorIntA == valorIntB
    const msgValorAMaior = `<b>${valorIntA}</b> infelizmente é um valor maior que <b>${valorIntB}</b>`
    const msgValorBMaior = `Parabéns o valor <b>${valorIntA}</b> é menor que o <b>${valorIntB}</b>`
    const msgValorIgual = `O valor <b>${valorIntA}</b> é igual ao valor <b>${valorIntB}</b>`
    const msgResultado = document.querySelector(`.resultado`)

    if (resultadoIgual) {
        msgResultado.innerHTML = msgValorIgual;
        msgResultado.style.color = `blue`; 
    } else if (resultado) {
        msgResultado.innerHTML = msgValorBMaior;
        msgResultado.style.color = `Green`; 
    } else {
        msgResultado.innerHTML = msgValorAMaior;
        msgResultado.style.color = `red`;
    }
});




