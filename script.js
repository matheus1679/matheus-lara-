document.addEventListener("DOMContentLoaded", function() {
    const verificarBtn = document.getElementById("verificarBtn");
    const resultado = document.getElementById("resultado");
  
    verificarBtn.addEventListener("click", function() {
      const idadeInput = document.getElementById("idadeInput").value;
      const idade = parseInt(idadeInput);
  
      if (isNaN(idade)) {
        resultado.textContent = "Por favor, insira uma idade válida.";
      } else {
        if (idade >= 18) {
          resultado.textContent = "Você é maior de idade.";
        } else {
          resultado.textContent = "Você é menor de idade.";
        }
      }
    });
  });
  