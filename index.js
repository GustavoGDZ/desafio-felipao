const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarNivel(experiencia) {
  if (experiencia < 1000) {
    return "Ferro";
  } else if (experiencia <= 2000) {
    return "Bronze";
  } else if (experiencia <= 5000) {
    return "Prata";
  } else if (experiencia <= 7000) {
    return "Ouro";
  } else if (experiencia <= 8000) {
    return "Platina";
  } else if (experiencia <= 9000) {
    return "Ascendente";
  } else if (experiencia <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

rl.question("Qual é o nome do herói? ", (nome) => { 
  rl.question("Qual é a experiência (XP) do herói? ", (xpInput) => {
    const experiencia = parseInt(xpInput, 10); // 
    if (isNaN(experiencia)) {
      console.log("Por favor, insira um número válido para a experiência.");
    } else {
      const nivel = classificarNivel(experiencia);
      console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    }
    rl.close(); 
  });
});
