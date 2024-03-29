// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Petition {
    address owner;
    address[] signers;

    string public title;
    string public description;
    mapping(address => bool) hasSigned;

    constructor(
        address creator,
        string memory _title,
        string memory _description
    ) {
        owner = creator;
        title = _title;
        description = _description;
    }

    function sign() public {
        require(
            hasSigned[msg.sender] = false,
            "You had already signed the Petition"
        );

        hasSigned[msg.sender] = true;
        signers.push(msg.sender);
    }

    function checkIfSigned() public view returns (bool) {
        return hasSigned[msg.sender];
    }

    function getNumberOfSignatures() public view returns (uint256) {
        return signers.length;
    }
}
