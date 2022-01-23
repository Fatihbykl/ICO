import React, { useEffect, useState } from "react";

export const TransactionContext = React.createContext("");

const { ethereum } = window;

export const TransactionsProvider = ({ children }) => {
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

    useEffect(() => {
        checkIfWalletIsConnect();
    }, [])

    return (
        <TransactionContext.Provider
          value={{
              currentAccount,
              connectWallet,
          }}
        >{ children }</TransactionContext.Provider>
    );
};