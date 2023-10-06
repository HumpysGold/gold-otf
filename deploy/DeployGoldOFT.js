const LZ_ENDPOINTS = require("@layerzerolabs/lz-sdk");

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const name = "GoldenBoys";
    const symbol = "GOLD";
    const sharedDecimals = 6;
    const lzEndpointAddress = LZ_ENDPOINTS.LZ_ADDRESS[hre.network.name]
    console.log({name, symbol, sharedDecimals, lzEndpointAddress})

    await deploy("ExampleOFTV2", {
        from: deployer,
        args: [name, symbol, sharedDecimals, lzEndpointAddress],
        log: true,
        waitConfirmations: 1,
        skipIfAlreadyDeployed: true
    })
}

module.exports.tags = ["DeployGoldOFT"]
