import { ethers } from "ethers";

export async function exibirEstagioJogador(address, contractAddress, contractAbi) {
  if (!address) {
    console.warn("Conta não fornecida.");
    return;
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const historico = await contract.verHistorico(address);

    // Contar vitórias (resultado === 2)
    let vitorias = 0;
    historico.forEach(jogada => {
      const res = Number(jogada.resultado);
      if (res === 2) vitorias++;
    });

    let estagio = "0";
    let walk = "";
    let lvl = 0;
    const dots = " - - - ";

    if (vitorias >= 20) {
      lvl = 4;
      estagio = `lvl - ${lvl}`;
      walk = `<div class="lvl">
        <p class="green"> 01 </p> ${dots}
        <p class="green"> 02 </p> ${dots}
        <p class="green"> 03 </p> ${dots}
        <p class="green"> 04 </p> ${dots}
        <p class="green"> 05 </p>
      </div>`;
    } else if (vitorias >= 10) {
      lvl = 4;
      estagio = `lvl - ${lvl}`;
      walk = `<div class="lvl">
        <p class="green"> 01 </p> ${dots}
        <p class="green"> 02 </p> ${dots}
        <p class="green"> 03 </p> ${dots}
        <p class="green"> 04 </p> ${dots}
        <p class="blue"> 05 </p>
      </div>`;
    } else if (vitorias >= 5) {
      lvl = 3;
      estagio = `lvl - ${lvl}`;
      walk = `<div class="lvl">
        <p class="green"> 01 </p> ${dots}
        <p class="green"> 02 </p> ${dots}
        <p class="green"> 03 </p> ${dots}
        <p class="blue"> 04 </p> ${dots}
        <p class="blue"> 05 </p>
      </div>`;
    } else if (vitorias >= 3) {
      lvl = 2;
      estagio = `lvl - ${lvl}`;
      walk = `<div class="lvl">
        <p class="green"> 01 </p> ${dots}
        <p class="green"> 02 </p> ${dots}
        <p class="blue"> 03 </p> ${dots}
        <p class="blue"> 04 </p> ${dots}
        <p class="blue"> 05 </p>
      </div>`;
    } else if (vitorias >= 1) {
      lvl = 1;
      estagio = `lvl - ${lvl}`;
      walk = `<div class="lvl">
        <p class="green"> 01 </p> ${dots}
        <p class="blue"> 02 </p> ${dots}
        <p class="blue"> 03 </p> ${dots}
        <p class="blue"> 04 </p> ${dots}
        <p class="blue"> 05 </p>
      </div>`;
    } else {
      lvl = 0;
      estagio = `lvl - ${lvl}`;
      walk = `<div class="lvl">
        <p class="blue"> 01 </p> ${dots}
        <p class="blue"> 02 </p> ${dots}
        <p class="blue"> 03 </p> ${dots}
        <p class="blue"> 04 </p> ${dots}
        <p class="blue"> 05 </p>
      </div>`;
    }

    const estagioElemento = document.getElementById("estagio");
    if (estagioElemento) {
      estagioElemento.innerHTML = `<p class="stage">Progress: ${estagio} (${vitorias} Victorys)</p>${walk}`;
    }
  } catch (err) {
    console.error("Erro ao calcular estágio:", err);
  }
}
