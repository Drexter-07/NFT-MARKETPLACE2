require("@nomiclabs/hardhat-waffle");

// const fs = require("fs");

 //const projectID = fs.readFileSync(".projectId").toString();
// const prvKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    // mainnet: {
    //   url: `https://rpc-mainnet.maticvigil.com/v1/${projectID}`,
    //   accounts: [prvKey]
    // },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/b6IEXYQHaGTY06ud84hyYftVRoYIFM8m`,
      accounts: ['bee55b45881f0d2af6442e04beb67eb3d4460648bf02775340d6f24998a30bc3']
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
