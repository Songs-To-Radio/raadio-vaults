import { ethers } from "ethers";

export async function connectWallet() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log(await signer.getAddress());
    const tx = await signer.sendTransaction({
        to: "ricmoo.firefly.eth",
        value: ethers.utils.parseEther("1.0")
    });
    // return await signer.getAddress();
  } catch (error) {
    throw error;
  }
}
