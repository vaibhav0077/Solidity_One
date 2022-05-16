require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Z2vn1Woq2vS_pe9wz4f7inNC89OcfFMc",
      accounts: ["59dc196b1e2b067972dafa6f00cb2d7ed3fccd6cbade4c46f61873aff0757da7"],
    }
  }
}
