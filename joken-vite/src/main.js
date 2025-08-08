
import './style.css';
import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrumSepolia } from '@reown/appkit/networks';
import { ethers } from 'ethers';
import { exibirHistoricoJogadas } from './historico.js'; // função que te passei antes
import { abiContrato } from './abi.js'; // sua ABI separada
import { exibirEstagioJogador } from './stage.js';
import { pagar } from './pay.js';
import { abiERC20 } from './abi.js';
const projectId = 'bd0ab918d624ef2d2ffd4e9339919390';
const JKP_TOKEN_ADDRESS = '0x532BafEb091a55F54079772dcCFC2Ba730A727F7'; // <-- coloque aqui o contrato do token

// ABI mínima ERC-20 para saldo
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)"
];

const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks: [arbitrumSepolia],
});

const metadata = {
  name: 'Joken App',
  description: 'Jogo Joken Web3',
  url: window.location.origin,
  icons: ['https://react-wallet.walletconnect.com/chain-logos/eip155-1.png'],
};

const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [arbitrumSepolia],
  projectId,
  metadata,
  features: { analytics: false },
});

// modal.subscribeAccount((account) => {
//   if (account && account.address) {
//     document.getElementById('conta').innerText = account.address;
//     mostrarBotaoHistorico();
//     exibirHistoricoJogadas(account.address, CONTRACT_ADDRESS, abiContrato);
//     exibirEstagioJogador(account.address, CONTRACT_ADDRESS, abiContrato);
//   } else {
//     document.getElementById('conta').innerText = 'Disconnected';
//     document.getElementById("estagio").innerHTML = "";
//   }
// });

// Função para buscar e exibir saldos
async function atualizarSaldos(address) {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);

    // Saldo ETH
    const balanceEth = await provider.getBalance(address);
    document.getElementById('saldo-eth').innerText =
      `${ethers.formatEther(balanceEth)} ETH`;

    // Saldo Token JKP
    const tokenContract = new ethers.Contract(JKP_TOKEN_ADDRESS, ERC20_ABI, provider);
    const [balanceToken, decimals, symbol] = await Promise.all([
      tokenContract.balanceOf(address),
      tokenContract.decimals(),
      tokenContract.symbol()
    ]);

    document.getElementById('saldo-token').innerText =
      `${ethers.formatUnits(balanceToken, decimals)} ${symbol}`;

  } catch (err) {
    console.error('Erro ao buscar saldos:', err);
  }
}

// Ao clicar no botão, abre o modal
document.getElementById('open-connect-modal').addEventListener('click', () => {
  modal.open();
});

// Quando a conta conectar ou mudar
let conta = null;

modal.subscribeAccount((account) => {
  if (account && account.address) {
    conta = account.address;    // <---- Atualiza aqui a variável global
    document.getElementById('conta').innerText = conta;
    atualizarSaldos(conta);
    mostrarBotaoHistorico();
    exibirHistoricoJogadas(conta, CONTRACT_ADDRESS, abiContrato);
    exibirEstagioJogador(conta, CONTRACT_ADDRESS, abiContrato);
  } else {
    conta = null;               // Também limpe quando desconectar
    document.getElementById('conta').innerText = 'Disconnected';
    document.getElementById('saldo-eth').innerText = '';
    document.getElementById('saldo-token').innerText = '';
    document.getElementById("estagio").innerHTML = "";
  }
});

const CONTRACT_ADDRESS = '0x4d7A5aF32d2b5ec7734e2D4EBe17E8260441fdd2';

// ======= FUNÇÕES EXTRAS =======
function alternarTabela() {
  const div = document.getElementById("historico-container");
  div.style.display = div.style.display === "none" ? "block" : "none";
}

function mostrarBotaoHistorico() {
  document.getElementById("btn-historico").style.display = "inline-block";
}

// ======= EVENTOS =======
document.getElementById('open-connect-modal').addEventListener('click', () => {
  modal.open();
});



// ======= BOTÃO HISTÓRICO =======
document.getElementById("btn-historico").addEventListener("click", alternarTabela);


function digitarTexto(text) {
  const el = document.getElementById('mensagem');
  if (el) el.innerText = text;
}

// Atrelando o botão pagar ao evento de clique
document.getElementById('btn-pagar').addEventListener('click', () => {
  if (!conta) {
    digitarTexto('Connect your wallet first.');
    return;
  }
  pagar(conta, JKP_TOKEN_ADDRESS, abiERC20, CONTRACT_ADDRESS, abiContrato, digitarTexto);
});
