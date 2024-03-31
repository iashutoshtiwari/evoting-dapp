# Decentralized E-Voting Application

This repository houses an application developed with hardhat, ethers, and React (using Vite) that enables users to vote for their preferred listed candidate by connecting their Metamask wallet. Currently, the project is set up to use the Volta testnet, an Ethereum-based network, but it can be easily configured to work with other networks too.

## Installation

After cloning/forking the repo, install all packages using:

```bash
  npm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_URL = "https://volta-rpc.energyweb.org"`

`PRIVATE_KEY = "YOUR_METAMASK_WALLET_PRIVATE_KEY"`

`VITE_CONTRACT_ADDRESS = ""`

## Run Locally

Before proceeding, it is necessary to compile the contract and deploy it to the blockchain network.

Execute the following command to compile the contract:

```bash
  npx hardhat compile
```

Execute the following command to deploy the contract:

```bash
  npx hardhat run --network volta scripts/deploy.js
```

The above command will deploy the contract and generate a contract address, copy it in the variable `VITE_CONTRACT_ADDRESS` of the .env file. You can also use another blockchain by writing it's endpoint in hardhat-config.

Once you have pasted your private key and contract address in the .env file, simply run command

```bash
  npm run start
```

## Demo

https://evoting-dapp-topaz.vercel.app/

## License

[MIT](https://choosealicense.com/licenses/mit/)
