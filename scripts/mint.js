const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x0d16f0cAE77052C5Aa3516BDD9658416D1ff30da";
  const receiverAddress = "0xbEEF5F20BCd8Cb86da852F648690AeAaDCb3C277";
  const quantity = 2;
  const value = ethers.parseEther("0.03");
  const baseURI =
    "https://copper-real-hornet-59.mypinata.cloud/ipfs/QmRaYu3ARXgxkNmaGYwfu2265DA9GD27XjifPLuxPdhcE1/";

  const batchNFTs = await ethers.getContractAt("myNFTs", contractAddress);

  await batchNFTs.setBaseURI(baseURI);
  const mintTokens = await batchNFTs.mint(receiverAddress, quantity, {
    value: value,
  });

  console.log(
    `Transaction Hash: https://sepolia.etherscan.io/tx/${mintTokens.hash}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
