
function limpar() {
    document.getElementById('resultados1').innerHTML = "";

    document.getElementById('resultados2').innerHTML = ``;

}

function inserir(num) {
    let numero = document.getElementById('resultados1').innerHTML;

    document.getElementById('resultados1').innerHTML = numero + num;


}

function voltar() {
    let resultado = document.getElementById('resultados1').innerHTML;

    document.getElementById('resultados1').innerHTML = resultado.substring(0, resultado.length - 1);

}
function calcular() {
    let resultado = document.getElementById('resultados1').innerHTML;
    if (resultado) {
        document.getElementById('resultados1').innerHTML = eval(resultado);

        document.getElementById('resultados2').innerHTML = `<p>${resultado}</p>`;

    }

    else {
        document.getElementById('resultados2').innerHTML = ""
    }
}


