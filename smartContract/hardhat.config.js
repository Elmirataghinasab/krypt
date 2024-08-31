require('@nomiclabs/hardhat-waffle');


module.exports = {
  compiler:{
    solidity: '0.8.0',
  },
  solidity: '0.8.0',
  solidity:"0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/7PW6w16NTzgdT0NiWUFLJxLUL5XHGTMz",
      accounts: ["f93acda8723148143fc5105e7309895db53745ac366808e35ac221bb24c8a62e"],
    },
  },
};
