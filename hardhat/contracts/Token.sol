//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FZYToken is ERC20 {
    constructor() ERC20("FZY Token", "FZY") {
        _mint(msg.sender, 30000000 * 10 ** decimals());
    }
}