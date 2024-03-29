const { ethers } = require("hardhat");

async function main() {
  console.log("deploy script running :- ");
  const DePetionContract = await ethers.getContractFactory("DePetition");
  const deployContract = await DePetionContract.deploy();
  console.log(
    "DePetition contract deployed at address : ",
    deployContract.target
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
