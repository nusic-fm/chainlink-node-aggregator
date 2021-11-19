# Chainlink Node Aggregator
Repository Setup and Run Chainlink Node Aggregator

1) Create Chainlink Nodes
2) Deploy Oracle and Address of Node in Oracle to call Fulfillment function
3) Deploy Median Library
4) Deploy Aggregator with Median Library
5) Add Links fund to Aggregator
6) Call updateAvailableFunds of Aggregator to make funding available for payment
7) Call changeOracle function to add Oracles in Aggregator


Address of Deployed Contract on Kovan
Oracle 1 deployed to: 0x2255fC3226395616e17544c2f72e428A5008e39f
Oracle 2 deployed to: 0x27d07d18f91Bdd5A48f5878dd98f13f60e712c2F
Median Library address:  0xd0dDf9D79bBFCdFb4dD53a4598b7146504A2B362
Aggregator deployed to: 0xa72332F8ae283BfdB746F4ea87b09aB6533B28aF


For TypeScript Configuration use this [link](https://hardhat.org/guides/typescript.html)

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
