async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );
  
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // deploy ascii generator 
  const ASCIIGenerator = await ethers.getContractFactory("ASCIIGenerator")
  let asciiGenerator = await ASCIIGenerator.deploy()
  console.log("TXN Hash: ", asciiGenerator.deployTransaction.hash);

  await asciiGenerator.deployed()
  console.log("ASCII Generator Contract Address: ", asciiGenerator.address)

  // deploy minting contract 
  const Contract = await ethers.getContractFactory("MEVArmyBanners");
  let contract = await Contract.deploy(asciiGenerator.address)
  console.log("TXN Hash: ", contract.deployTransaction.hash);

  await contract.deployed()
  console.log("Minting Contract Address: ", contract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });