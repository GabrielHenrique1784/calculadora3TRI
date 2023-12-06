function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function limpar() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado2').innerHTML = ``;
}
function voltar() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
function calcular() {
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML =  eval(resultado)
        document.getElementById('resultado2').innerHTML = `<p>${resultado}</p>`;
        
    }
    else {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}


