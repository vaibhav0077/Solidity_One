//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// contract WavePortal {
//     constructor() {
//         console.log("Yo yo , I am contract , I am Smare");
//     }
// }

contract WavePortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint256 timestamp;
    }

    Wave[] waves;

    constructor() payable {
        console.log("Hello bruh, This Contract is deployed by Vaibhav");
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s has Waved W/ %s", msg.sender, _message);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        emit NewWave(msg.sender, block.timestamp, _message);

        // Send Ether Who will Wave me
        uint256 prizeAmount = 0.0001 ether;
        require(
            prizeAmount <= address(this).balance,
            "Trying to withdraw more money than the contract has."
        );
        (bool success, ) = (msg.sender).call{value: prizeAmount}(""); // Is the magical Line where we can send ether
        require(success, "Failed to withdraw money from contract.");
    }

    function getAllWaves() public view returns (Wave[] memory) {
        // console.log("We have %d totalWaves", totalWaves);
        return waves;
    }

    function getTotalWaves() public view returns (Wave[] memory) {
        // console.log("We have %d totalWaves", totalWaves);
        return waves;
    }
}
