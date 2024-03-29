require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_SEPOLIA =
  process.env.ALCHEMY_SEPOLIA ||
  "https://eth-sepolia.g.alchemy.com/v2/aiVmK-_DNZ8YW2GTIhHsjXKAX2krOfy2";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: ALCHEMY_SEPOLIA,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
  },
};
