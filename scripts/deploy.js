const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const contract = await hre.ethers.deployContract("TestNFT");
  await contract.waitForDeployment();
  const deployedContract = await contract.getAddress();
  fs.writeFileSync("contract.txt", deployedContract);
  console.log(`Contract deployed to ${deployedContract}`);
}
// npx hardhat run scripts/deploy.js --network swisstronik
// node scripts/mint.js
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});