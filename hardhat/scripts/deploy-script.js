// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const FZYToken = await hre.ethers.getContractFactory("FZYToken");
  const TokenSale = await hre.ethers.getContractFactory("TokenSale");

  const token = await FZYToken.deploy();
  await token.deployed();

  const tokensale = await TokenSale.deploy(hre.ethers.utils.parseUnits("0.1", 18), token.address, hre.ethers.utils.parseUnits("2000000", 18));
  await tokensale.deployed();

  console.log("FZYToken deployed to:", token.address);
  console.log("TokenSale deployed to:", tokensale.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
