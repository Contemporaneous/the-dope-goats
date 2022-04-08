
const ethers = require("ethers");

const main = async () => {
    //Get the contract and deploy it
    const nftContractFactory = await hre.ethers.getContractFactory('DopeGoats');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    let txn = await nftContract.makeDopeGoat("#ffffff","#44ee33",{ value: ethers.utils.parseEther("0.01") });
    await txn.wait()
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();