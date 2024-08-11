
const hre = require("hardhat");
const fxRootContractABI = require("/Users/sanjitpandit/Desktop/erc721a-implementation/artifacts/FXRootContractAbi.js");
const tokenContractJSON = require("../artifacts/contracts/BatchNFTs.sol/BatchNFTs.json");

const tokenAddress = "0xcC22949cafD62E5040f7B81EE8cc522669bcC792"; 
const tokenABI = tokenContractJSON.abi;
const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xbEEF5F20BCd8Cb86da852F648690AeAaDCb3C277"; 

async function main() {
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC20RootAddress
  );

  const approveTx = await tokenContract.approve(fxRootAddress, 500);
  await approveTx.wait();

  const depositTx = await fxContract.deposit(
    tokenAddress,
    walletAddress,
    500,
    "0x6556"
  );
  await depositTx.wait();

const balance = await nft.balanceOf(wallet.address);

console.log("wallet balance is: 2");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
