import { ethers } from 'ethers';

/**
 * Exibe o histórico de jogadas do usuário no elemento <table id="historico">
 * @param {string} address Endereço da conta a consultar
 * @param {string} contractAddress Endereço do contrato (CONTRACT_ADDRESS)
 * @param {Array} contractAbi ABI do contrato (CONTRACT_ABI)
 */
export async function exibirHistoricoJogadas(address, contractAddress, contractAbi) {
  const tabela = document.getElementById('historico');
  if (!tabela) {
    console.warn('Elemento #historico não encontrado no DOM.');
    return;
  }

  tabela.innerHTML = `
    <thead>
      <tr>
        <th>You</th>
        <th>Contract</th>
        <th>Result</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody id="historico-body">
    </tbody>
  `;

  const tbody = document.getElementById('historico-body');

  if (!address) {
    tbody.innerHTML = `<tr><td colspan="4">Conta não fornecida.</td></tr>`;
    return;
  }

  try {
    // Provider via window.ethereum (usuário já conectado)
    const provider = new ethers.BrowserProvider(window.ethereum);
    // Use provider (readonly) — se a função for view, não precisa de signer
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    // Chama a função verHistorico(address)
    // Ajuste o nome/assinatura conforme sua ABI real
    const historico = await contract.verHistorico(address);

    // Se o retorno vier como objeto complexo, tente transformar em array
    const lista = Array.isArray(historico) ? historico : Object.values(historico);

    if (!lista || lista.length === 0) {
      tbody.innerHTML = `<tr><td colspan='4'>Nenhuma jogada registrada.</td></tr>`;
      return;
    }

    // Mapas para exibição (ajuste caso seu contrato tenha ordens diferentes)
    const escolhas = ['Rock', 'Paper', 'Scissors'];
    const resultados = ['Loss', 'Draw', 'Victory'];

    // Construir linhas
    const rows = lista.map((jogadaRaw) => {
      // Se for um tuple (array) ou struct (objeto), padronize:
      // Exemplo esperado: { jogadorEscolha, contratoEscolha, resultado, timestamp }
      let jogada = jogadaRaw;
      if (Array.isArray(jogadaRaw)) {
        // Tentativa comum: [jogadorEscolha, contratoEscolha, resultado, timestamp]
        jogada = {
          jogadorEscolha: jogadaRaw[0],
          contratoEscolha: jogadaRaw[1],
          resultado: jogadaRaw[2],
          timestamp: jogadaRaw[3],
        };
      } else {
        // Converte valores BigNumber para number quando necessário
        // (ethers retorna BigNumber para inteiros em structs)
        if (jogadaRaw.timestamp && typeof jogadaRaw.timestamp._isBigNumber !== 'undefined') {
          jogada.timestamp = Number(jogadaRaw.timestamp.toString());
        } else if (jogadaRaw.timestamp && typeof jogadaRaw.timestamp === 'string') {
          jogada.timestamp = Number(jogadaRaw.timestamp);
        }
      }

      // Segurança: garantir índices válidos
      const jogadorIdx = Number(jogada.jogadorEscolha) || 0;
      const contratoIdx = Number(jogada.contratoEscolha) || 0;
      const resultadoIdx = Number(jogada.resultado) || 0;
      const ts = Number(jogada.timestamp) || 0;
      const data = ts > 0 ? new Date(ts * 1000).toLocaleString() : '-';

      return `
        <tr>
          <td>${escolhas[jogadorIdx] ?? jogadorIdx}</td>
          <td>${escolhas[contratoIdx] ?? contratoIdx}</td>
          <td>${resultados[resultadoIdx] ?? resultadoIdx}</td>
          <td>${data}</td>
        </tr>
      `;
    }).join('');

    tbody.innerHTML = rows;

  } catch (err) {
    console.error('Erro ao buscar histórico:', err);
    tbody.innerHTML = `<tr><td colspan='4'>Erro ao buscar histórico. Veja console.</td></tr>`;
  }
}