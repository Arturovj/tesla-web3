// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Tesla is ERC721 {
    using Counters for Counters.Counter;

    mapping(uint256 => uint256) public tokenUPC;

    Counters.Counter private _idCounter;

    constructor() ERC721("Tesla", "TSL") {}
    function deterministicPseudoUPC(uint256 _tokenId, address _minter) public pure returns (uint256) {
        uint256 combinedParams = _tokenId + uint160(_minter);
        bytes memory encodedParams = abi.encodePacked(combinedParams);
        bytes32 hashedUPC = keccak256(encodedParams);
        return uint256(hashedUPC);
    }

    function mint() public  {
        // con esto accedemos al numero actual de counter
        uint256 current = _idCounter.current();
        tokenUPC[current] = deterministicPseudoUPC(current, msg.sender);
        _safeMint(msg.sender, current);
        _idCounter.increment();
    }

}