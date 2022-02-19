import React from "react";
import { TransactionContext } from '../contexts/context';
import { useContext } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    const { connectWallet, currentAccount } = useContext(TransactionContext);
    let shortAddress = "";
    //<a className="nav-link" href="/">IDO</a>
    if(currentAccount) { shortAddress = currentAccount.substr(0,5) + "..." + currentAccount.substr(currentAccount.length - 4); }
    return(
        <nav className="navbar navbar-expand-sm pt-4 pb-4">
            <div className="container">
            <div className="container-fluid">
                <a className="navbar-brand float-start" href="/">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse float-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">ICO</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="staking" className="nav-link">Staking</Link>
                    </li>
                    {
                        currentAccount
                        ? <li className="nav-item"><a className="nav-link" href="/" >{shortAddress}</a></li>
                        :   <li className="nav-item">
                            <a className="nav-link navbar-button" onClick={connectWallet} href="/">Connect Wallet</a>
                            </li>
                    }
                    
                </ul>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;