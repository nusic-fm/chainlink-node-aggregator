import { BigNumber } from '@ethersproject/bignumber';
import { ethers, run } from 'hardhat';
import { Median, Median__factory, MyAggregator, MyAggregator__factory, Oracle, Oracle__factory } from '../typechain';

async function main() {
  const accounts = await ethers.getSigners();

  const Median:Median__factory = await ethers.getContractFactory("Median");
  const median:Median = await Median.attach("0xd0dDf9D79bBFCdFb4dD53a4598b7146504A2B362");

  const Aggregator:MyAggregator__factory = await ethers.getContractFactory("MyAggregator",{
    libraries: {
      Median:median.address
    }
  });
  
  const aggregator:MyAggregator = await Aggregator.attach("0xa72332F8ae283BfdB746F4ea87b09aB6533B28aF");
  console.log("Updated Avaiable funds ",(await aggregator.availableFunds()).toString());
  console.log("Allocated funds ",(await aggregator.allocatedFunds()).toString());

  const txt = await aggregator.updateAvailableFunds();
  console.log("UpdateAvailable Funds Transaction = ",txt.hash);
  console.log("Updated Avaiable funds ",(await aggregator.availableFunds()).toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
