
//Função para modificar o display do botão volatar ao topo  
const voltarAoTopo = document.querySelector("#voltaraotopo");

window.onscroll = function() {
  scrollVoltarTopo();
}
function scrollVoltarTopo() {
  if (document.documentElement.scrollTop > 100) {
    voltarAoTopo.style.display = "block";
  } else {
    voltarAoTopo.style.display = "none";
  }
}
//Função para voltar ao topo quando clica no botão.
voltarAoTopo.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
})