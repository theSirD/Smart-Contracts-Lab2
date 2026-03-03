import "dotenv/config";
import { configVariable, defineConfig } from "hardhat/config";
import hardhatVerify from "@nomicfoundation/hardhat-verify";

export default defineConfig({
  plugins: [hardhatVerify],
  solidity: { version: "0.8.20" },
  networks: {
    amoy: {
      type: "http",
      chainType: "l1",
      url: "https://rpc-amoy.polygon.technology",
      accounts: [configVariable("PRIVATE_KEY")]
    }
  },
  etherscan: {
    apiKey: {
      amoy: process.env.POLYGONSCAN_API_KEY
    },
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com"
        }
      }
    ]
  }
});
