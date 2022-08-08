require('dotenv').config()
const Web3 = require('web3');
const net = require('net');
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const pks = process.env.INFURA_ACCOUNT_PKS.split(',')
// const infuraProjectId = process.env.INFURA_PROJECT_ID

module.exports = {
  networks: {
    development: {
      provider: () => new Web3.providers.IpcProvider(process.env.GETH_IPC_PATH, net),
      network_id: "15",
      gas: 2000000,
      gasPrice: 20000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.15",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}
