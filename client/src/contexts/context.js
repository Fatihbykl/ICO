import React, { useEffect, useState } from "react";
import Web3 from 'web3';
import TokenSale from '../abis/TokenSale.json';

export const TransactionContext = React.createContext("");

const { ethereum } = window;
const web3 = require("web3");

const createContract = () => {
    const web3 = new Web3(ethereum);
    const contract = new web3.eth.Contract(TokenSale.abi, "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");
    console.log("contract->" , contract);
    return contract;
}

export const TransactionsProvider = ({ children }) => {
    const [numberOfTokens, setNumberOfTokens] = useState("");
    const [currentAccount, setCurrentAccount] = useState("");

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log("error on connect wallet -> ", error);
        }
    };

    const buyTokens = async () => {
        try {
            const contract = createContract();
            const tokenPrice = await contract.methods.getTokenPrice().call({from: currentAccount});
            var numTokens = parseInt(numberOfTokens);
            await contract.methods.buyTokens(numTokens).send({from: currentAccount, value: numTokens * tokenPrice});
        } catch (error) {
            console.log("error on buy tokens -> ", error);
        }

    }

    const checkIfWalletIsConnect = async () => {
        try {
            if(!ethereum) return alert("Please install MetaMask.");
            const accounts = await ethereum.request({method: "eth_accounts"});
            
            if(accounts.length > 0) setCurrentAccount(accounts[0]);
            else console.log("No accounts found.");

        } catch (error) {
            console.log("Error on checkIfWalletIsConnect -> ", error);
        }
    }

    const handleChange = (e, name) => {
        setNumberOfTokens(e.target.value);
    }

    useEffect(() => {
        checkIfWalletIsConnect();
    }, [])

    return (
        <TransactionContext.Provider
          value={{
              currentAccount,
              connectWallet,
              handleChange,
              buyTokens,
          }}
        >{ children }</TransactionContext.Provider>
    );
};