const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const initialOwner = deployer.address;
  const tokenName = "My Test Token";
  const tokenSymbol = "MTT";

  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const token = await MyToken.deploy(initialOwner, tokenName, tokenSymbol);
  await token.waitForDeployment();

  const address = await token.getAddress();
  console.log("MyToken deployed to:", address);
  console.log("Owner:", initialOwner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
