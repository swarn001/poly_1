# NFT Collection Deployment README

## Overview

This README provides instructions for deploying an NFT collection using DALLE 2 or Midjourney, storing items on IPFS via pinata.cloud, deploying an ERC721 or ERC1155 contract to the Goerli Ethereum Testnet, mapping the collection using the Polygon network token mapper, and transferring the NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

## Steps

1. **Generate a 5-item collection using DALLE 2 or Midjourney**:
   - Utilize DALLE 2 or Midjourney to generate a collection of 5 items.

2. **Store items on IPFS using pinata.cloud**:
   - Upload the generated items to IPFS using pinata.cloud to obtain their IPFS hashes.

3. **Deploy an ERC721 or ERC1155 contract to the Goerli Ethereum Testnet**:
   - Deploy a smart contract to the Goerli Ethereum Testnet that implements either ERC721 or ERC1155 standards for NFTs.

4. **Implement promptDescription function on the contract**:
   - Ensure that the deployed contract includes a `promptDescription` function that returns the prompt used to generate the images.

5. **Map Your NFT Collection using Polygon network token mapper**:
   - Map the deployed NFT collection using the Polygon network token mapper for visualization purposes.

6. **Write a hardhat script to batch mint all NFTs**:
   - Develop a Hardhat script to batch mint all NFTs from the deployed contract. Consider using ERC721A for optimal efficiency.

7. **Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge**:
   - Create a Hardhat script to batch transfer all minted NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

8. **Approve the NFTs to be transferred**:
   - Ensure that the NFTs to be transferred are approved for transfer from Ethereum to Polygon Mumbai.

9. **Deposit the NFTs to the Bridge**:
   - Initiate the deposit of the approved NFTs to the FxPortal Bridge for transfer to Polygon Mumbai.

10. **Test balanceOf on Mumbai**:
    - Verify the balance of the transferred NFTs on Polygon Mumbai to confirm successful transfer.

## Additional Notes

- Make sure to handle any necessary gas fees and account for network delays during the transfer process.
- Double-check contract code and scripts for accuracy before deployment.
- Test thoroughly on testnets before deploying to the mainnet.
