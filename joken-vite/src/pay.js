import { ethers } from "ethers";

export async function pagar(conta, JKP_TOKEN_ADDRESS, abiERC20, contratoAddress, contratoAbi, digitarTexto) {
  try {
    if (!conta) {
      digitarTexto("Connect your wallet first.");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    // Instancia os contratos com o signer (para poder enviar tx)
    const token = new ethers.Contract(JKP_TOKEN_ADDRESS, abiERC20, signer);
    const contrato = new ethers.Contract(contratoAddress, contratoAbi, signer);

    // 1 ether em wei
    const valor = ethers.parseEther("1");

    // Verifica allowance
    const allowance = await token.allowance(conta, contratoAddress);
    if (allowance < valor) {
      digitarTexto("Approve in your wallet...");
      const txApprove = await token.approve(contratoAddress, valor);
      await txApprove.wait();
    }

    digitarTexto("Processing payment...");
    const txPagar = await contrato.pagarParaJogar();
    await txPagar.wait();

    digitarTexto("Payment completed. You can now play!");
  } catch (e) {
    console.error(e);
    digitarTexto("Payment failed. Try again.");
  }
}