/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 let ROPSTEN_PRIVATE_KEY = //your private key
module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/lds_od9SNZd9ruILG0uvNZi7wz3uNzrE`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};

//Token Address = 0xb075E6E7903ec5514307774fC5967748eC13a303
