// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;
import "./Petition.sol";

contract DePetition {
    Petition[] public deployedPetitions;

    function createNewPetition(
        string memory title,
        string memory description
    ) public {
        Petition newPetition = new Petition(msg.sender, title, description);
        deployedPetitions.push(newPetition);
    }

    function returnAllPetitiono() public view returns (Petition[] memory) {
        return deployedPetitions;
    }
}
