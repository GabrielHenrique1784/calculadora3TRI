let listainicial = document.querySelector("#tarefas");
let listaFinalizadas = document.querySelector("#finalizadas");
let descricao = document.getElementById("descricao");
let novoitem = null
function adiciona() {
    novoitem.value = listainicial.innerHTML += `<li class = "itensLista"> ${descricao.value} </li> <button id="finalizar" onclick="finalizada();">Finalizada</button>`
};
function finalizada() {
    let item = document.querySelector(".itensLista");
    novoitem.value = ""
    let itemFinalizado = listaFinalizadas.innerHTML += `<li class = "itensLista"> ${descricao.value} </li>`
}