const LZ_ENDPOINTS = require("@layerzerolabs/lz-sdk");

module.exports = async function ({deployments, getNamedAccounts}) {
  const {deploy} = deployments
  const {deployer} = await getNamedAccounts()
  console.log(`>>> your address: ${deployer}`)
  // Print ether balance
  const balance = await ethers.provider.getBalance(deployer)
  console.log(`>>> your balance: ${balance.toString()}`)
  console.log(`LZ_ENDPOINTS.LZ_ADDRESS[${hre.network.name}]: " ${LZ_ENDPOINTS.LZ_ADDRESS[hre.network.name]}`);
  let goldAddress = "0xbefd5c25a59ef2c1316c5a4944931171f30cd3e4";  // GOLD on BASE
  const lzEndpointAddress = LZ_ENDPOINTS.LZ_ADDRESS[hre.network.name]
  // await deploy("GoldProxyOFTV2", {
  //   from: deployer,
  //   args: [goldAddress, 6, lzEndpointAddress],
  //   log: true,
  //   waitConfirmations: 1,
  //   skipIfAlreadyDeployed: true
  // })
}

function getDependencies() {}

module.exports.dependencies = getDependencies()
module.exports.tags = ["DeployGoldProxy"]
