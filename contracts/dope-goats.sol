// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract DopeGoats is ERC721 {

    constructor() ERC721("Dope Goats Hprf", "DGHPRF") {}
}