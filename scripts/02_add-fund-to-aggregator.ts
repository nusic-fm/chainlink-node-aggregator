import { ethers, fundLink, run } from 'hardhat';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { LinkTokenInterface, LinkTokenInterface__factory, Median, Median__factory, MyAggregator, MyAggregator__factory, Oracle, Oracle__factory } from '../typechain';
const hre:HardhatRuntimeEnvironment = require("hardhat");

async function main() {
  const accounts = await ethers.getSigners();
  const linkAddress:string = "0xa36085F69e2889c224210F603D836748e7dC0088";
  
  const Median:Median__factory = await ethers.getContractFactory("Median");
  const median:Median = await Median.attach("0xd0dDf9D79bBFCdFb4dD53a4598b7146504A2B362");

  const Aggregator:MyAggregator__factory = await ethers.getContractFactory("MyAggregator",{
    libraries: {
      Median:median.address
    }
  });
  
  const aggregator:MyAggregator = await Aggregator.attach("0xa72332F8ae283BfdB746F4ea87b09aB6533B28aF");

  // Add Fund
  await fundLink(hre,aggregator.address,"10000000000000000000");
  console.log("Funding Added to Aggregator");

  const linkToken = LinkTokenInterface__factory.connect(linkAddress,accounts[0]);
  console.log("After linktoken");
  console.log("link token add ", (await linkToken.balanceOf(aggregator.address)).toString());
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
