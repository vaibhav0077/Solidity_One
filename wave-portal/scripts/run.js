// const main = async () => {
//     const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
//     const waveContract = await waveContractFactory.deploy();
//     await waveContract.deployed();
//     console.log("Contract deployed to:", waveContract.address);
// };


const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther("0.1"),
    });
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
    // console.log("Contract deployed by:", owner.address);

    let contractBalamce = await hre.ethers.provider.getBalance(
        waveContract.address
    )
    console.log(
        "Contract Balamce : ",
        hre.ethers.utils.formatEther(contractBalamce)
    )

    let waveCount;
    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount);

    // send some waves
    let waveTxn = await waveContract.wave("A Test Message!!");
    await waveTxn.wait(); //wait till the transcation to mined

    [_, randomPerson] = await hre.ethers.getSigners();
    let waveTxn1 = await waveContract.connect(randomPerson).wave("A another message !!");
    await waveTxn1.wait(); //wait till the transcation to complete

    // wiaveCount = await waveContract.getTotalWaves();
    let allWaves = await waveContract.getTotalWaves();
    console.log(allWaves);

    // check contract balance again
    let contractBalamce1 = await hre.ethers.provider.getBalance(
        waveContract.address
    )
    console.log(
        "Contract Balamce : ",
        hre.ethers.utils.formatEther(contractBalamce1)
    )

}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
