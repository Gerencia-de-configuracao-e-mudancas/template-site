// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-mensagem");
  const mensagem = document.getElementById("mensagem");

  btn.addEventListener("click", function () {
    mensagem.textContent = "Olá! O JavaScript está funcionando corretamente.";
  });
});
