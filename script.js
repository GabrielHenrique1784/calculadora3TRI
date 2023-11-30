let input = document.getElementById("descricao");
let tarefas = document.getElementById("tarefas");
let item = "";
input.addEventListener("change", function () {
    item = input.value;
})
function adicionar() {
tarefas.innerHTML += `<li>${item}</li>`;
}
