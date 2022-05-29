require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter");

const dotenv = require('dotenv');
dotenv.config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const DEV_SEED = process.env.DEV_SEED || ""
const RINKEBY_ALCHEMY_URL = process.env.RINKEBY_ALCHEMY_URL || ""

const MAINNET_ALCHEMY_URL = process.env.MAINNET_ALCHEMY_URL || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "my etherscan API key"

module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  
  defaultNetwork: "hardhat",
  networks: {

    local :{
      url: "http://127.0.0.1:8545",
      timeout:0
    },

    hardhat:{
      forking:{
        url: MAINNET_ALCHEMY_URL 
      },
      timeout:0
    },

    rinkeby:{
        url: RINKEBY_ALCHEMY_URL,
        accounts: {mnemonic: DEV_SEED},
    },

    mainnet:{
      url: MAINNET_ALCHEMY_URL,
      accounts: {mnemonic:DEV_SEED}
    }

  },

  etherscan:{
    apiKey: ETHERSCAN_API_KEY
  },

  gasReporter:{
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    currency: "USD"
  }
  
};