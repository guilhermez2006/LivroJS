function botaoConverter() {
    let titulo = document.getElementById("tituloFilme").value;
    let duracao = Number(document.getElementById("duracaoFilme").value);
  
    let horas = Math.floor(duracao / 60);
    let minutos = duracao % 60;
  
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O filme é "${titulo}"<br>${horas} hora(s) e ${minutos} minuto(s).`;
  }
  
  document.getElementById("botaoConverter").addEventListener("click", botaoConverter);
  