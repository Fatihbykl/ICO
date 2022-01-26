//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import './FZYToken.sol';

contract TokenSale {
    address admin;
    FZYToken tokenContract;
    uint256 tokenPrice;
    uint256 tokensSold;
    uint256 maxTokensWillBeSold;

    event Sell(address _buyer, uint256 amount);

    constructor (uint256 _tokenPrice, address _tokenContract, uint256 _maxTokensWillBeSold) {
        admin = msg.sender;
        tokenPrice = _tokenPrice;
        tokenContract = FZYToken(_tokenContract);
        tokensSold = 0;
        maxTokensWillBeSold = _maxTokensWillBeSold;
    }

    function getTokenPrice() public view returns(uint256) { return tokenPrice; }
    function getTokensSold() public view returns(uint256) { return tokensSold; }
    function getMaxTokensWillBeSold() public view returns(uint256) { return maxTokensWillBeSold; }

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(add(tokensSold, _numberOfTokens) <= maxTokensWillBeSold, "Limit exceeded!");
        require(msg.value == multiply(tokenPrice, _numberOfTokens), "Value is not matching with number of tokens!");
        require(tokenContract.transfer(msg.sender, multiply(_numberOfTokens, 10 ** 18)));
        tokensSold = add(tokensSold, _numberOfTokens);

        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public payable {
        require(msg.sender == admin);
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));

        // UPDATE: Let's not destroy the contract here
        // Just transfer the balance to the admin
        address payable _owner = payable(admin);
        _owner.transfer(address(this).balance);
    }
}