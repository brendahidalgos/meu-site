//indice do slide atual (inicia no 1)
var slideIndex = 1;
//exibe o slide inicial
showDivs(slideIndex);
//função para mudar slide (n pode ser +1 ou -1)
function plusDivs(n) {
  showDivs(slideIndex += n);
}
//função que mostra o slide correto
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides"); // Pega todos os slides
//se passar do último slide, volta para o primeiro
if (n > x.length) {
  slideIndex = 1;
}
//se for antes do primeiro slide, vai para o último
if (n < 1) {
  slideIndex = x.length;
}
//esconde todos os slides
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}
//exibe apenas o slide atual
  x[slideIndex - 1].style.display = "block";
}