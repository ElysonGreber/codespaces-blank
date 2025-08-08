// =========================
// IMPORTS
// =========================
import './style.css';
import { createAppKit } from '@reown/appkit';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrumSepolia } from '@reown/appkit/networks';
import { ethers } from 'ethers';
import { exibirHistoricoJogadas } from './historico.js';
import { exibirEstagioJogador } from './stage.js';
import { pagar } from './pay.js';
import { abiContrato, abiERC20 } from './abi.js';

// =========================
// CONFIGURAÇÕES
// =========================
const projectId = 'bd0ab918d624ef2d2ffd4e9339919390';
const CONTRACT_ADDRESS = '0x4d7A5aF32d2b5ec7734e2D4EBe17E8260441fdd2';
const JKP_TOKEN_ADDRESS = '0x532BafEb091a55F54079772dcCFC2Ba730A727F7';

// =========================
// VARIÁVEIS GLOBAIS
// =========================
let conta = null;
let signer = null;
let contrato = null;

// ABI mínima ERC-20
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)"
];

// =========================
// CONFIGURAÇÃO DO WAGMI + MODAL
// =========================
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

// =========================
// FUNÇÕES
// =========================
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

function alternarTabela() {
  const div = document.getElementById("historico-container");
  div.style.display = div.style.display === "none" ? "block" : "none";
}

function mostrarBotaoHistorico() {
  document.getElementById("btn-historico").style.display = "inline-block";
}

function digitarTexto(text) {
  const el = document.getElementById('mensagem');
  if (el) el.innerText = text;
}

async function jogar(escolha) {
  if (!contrato) {
    digitarTexto("Conecte sua carteira primeiro.");
    return;
  }

  const resultadoEl = document.getElementById("resultado");
  const dueloEl = document.getElementById("duelo");
  const imgJogador = document.getElementById("img-jogador");
  const hashEl = document.getElementById("tx-hash");
  const walker = document.getElementById("walker");
  const imagens = ["img/hstg.png", "img/hpg.png", "img/hsg.png"];

  try {
    dueloEl.style.display = "block";
    imgJogador.src = imagens[escolha];
    imgJogador.alt = `Escolha do jogador: ${imagens[escolha].split(".")[0]}`;

    walker.src = "img/ght.gif";
    resultadoEl.innerText = "";
    hashEl.innerHTML = "";
    document.getElementById("duelo-texto").innerText = "";

    digitarTexto("Processing...");

    const tx = await contrato.jogar(escolha);
    await tx.wait();

    hashEl.innerHTML = `Tx Hash: <a style="font-size:12px;" href="https://sepolia.arbiscan.io/tx/${tx.hash}" target="_blank">Check</a>`;

    const resultado = await contrato.verUltimoResultado(conta);
    mostrarResultado(resultado);

    await exibirHistoricoJogadas(conta, CONTRACT_ADDRESS, abiContrato);

    if (parseInt(resultado) === 2) {
      await sacar();
    }
  } catch (e) {
    console.error(e);
    digitarTexto("Error playing the game");
  } finally {
    walker.src = "img/walk.gif";
  }
}

async function sacar() {
  try {
    const tx = await contrato.sacarPremio();
    await tx.wait();
    digitarTexto("Prize withdrawn!");
  } catch (e) {
    console.error(e);
    digitarTexto("Error withdrawing prize.");
  }
}

function mostrarResultado(resultado) {
  const r = parseInt(resultado);
  const txt = ["❌ Loss", "🤝 Draw", "🏆 Victory"];
  document.getElementById("resultado").innerText = txt[r];
  digitarTexto("Bet and play again");
}

// =========================
// EVENTOS DO MODAL
// =========================
modal.subscribeAccount(async (account) => {
  if (account && account.address) {
    conta = account.address;
    document.getElementById('conta').innerText = conta;

    const provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    contrato = new ethers.Contract(CONTRACT_ADDRESS, abiContrato, signer);

    atualizarSaldos(conta);
    mostrarBotaoHistorico();
    exibirHistoricoJogadas(conta, CONTRACT_ADDRESS, abiContrato);
    exibirEstagioJogador(conta, CONTRACT_ADDRESS, abiContrato);
  } else {
    conta = null;
    signer = null;
    contrato = null;

    document.getElementById('conta').innerText = 'Disconnected';
    document.getElementById('saldo-eth').innerText = '';
    document.getElementById('saldo-token').innerText = '';
    document.getElementById("estagio").innerHTML = "";
  }
});

// =========================
// EVENT LISTENERS
// =========================
document.getElementById('open-connect-modal').addEventListener('click', () => modal.open());
document.getElementById("btn-historico").addEventListener("click", alternarTabela);

document.getElementById('btn-pagar').addEventListener('click', () => {
  if (!conta) {
    digitarTexto('Connect your wallet first.');
    return;
  }
  pagar(conta, JKP_TOKEN_ADDRESS, abiERC20, CONTRACT_ADDRESS, abiContrato, digitarTexto);
});

document.getElementById('btn-rock').addEventListener('click', () => jogar(0));
document.getElementById('btn-paper').addEventListener('click', () => jogar(1));
document.getElementById('btn-scissors').addEventListener('click', () => jogar(2));
