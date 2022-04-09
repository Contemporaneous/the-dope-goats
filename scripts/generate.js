
const ethers = require("ethers");

const main = async () => {
    //Get the contract and deploy it
    const nftContractFactory = await hre.ethers.getContractFactory('DopeGoats');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    let txn = await nftContract.makeDopeGoat("#44ee33","#ff8866",true,{ value: ethers.utils.parseEther("0.01") });
    await txn.wait()

    let turi = await nftContract.tokenURI(1);
    console.log(turi);

    let gswap = await nftContract.genderSwap(1,{ value: ethers.utils.parseEther("0.01") });
    await gswap.wait();
    
    turi = await nftContract.tokenURI(1);
    console.log(turi);
  
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