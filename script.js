//=================================CALCULOS=================================


function limpar() {
    document.getElementById('resultados1').innerHTML = "";

    document.getElementById('resultados2').innerHTML = ``;

    document.getElementById('igual').focus();

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

//=================================KEYPRESS=================================


document.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        calcular();
    }
    if (event.key == "1") {
        inserir(1);
    }
    if (event.key == "2") {
        inserir(2);
    }
    if (event.key == "3") {
        inserir(3);
    }
    if (event.key == "4") {
        inserir(4);
    }
    if (event.key == "5") {
        inserir(5);
    }
    if (event.key == "6") {
        inserir(6);
    }
    if (event.key == "7") {
        inserir(7);
    }
    if (event.key == "8") {
        inserir(8);
    }
    if (event.key == "9") {
        inserir(9);
    }
    if (event.key == "0") {
        inserir(0);
    }
    if (event.key == "+") {
        inserir("+");
    }
    if (event.key == "-") {
        inserir("-");
    }
    if (event.key == "*") {
        inserir("*");
    }
    if (event.key == "/") {
        inserir("/");
    }
    if (event.key == "Delete") {
        voltar();
    }
    if (event.key == "c") {
        limpar()
    }
    if (event.key == ".") {

        inserir(".");
    }
})
