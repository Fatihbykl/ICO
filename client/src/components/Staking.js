import React, { useState } from "react";
import { FaEthereum } from 'react-icons/fa';

function Staking() {
    const [stakeActive, setStakeActive] = useState(true);
    const [unstakeActive, setUnstakeActive] = useState(false);

    function handleInput(e, name) {
        //handleChange(e, name);
        const amount = 0.0001 * e.target.value;
        //setDepositAmount(amount);
    }
    function openTab(name) {
        if (name == "stake") { setStakeActive(true); setUnstakeActive(false); }
        else {setUnstakeActive(true); setStakeActive(false); }
    }
    return(
        <div className="container stake">
            <div className="m-auto card-background mt-5 shadow-sm text-center p-4">
                <div>
                    <h5 className={`float-start ${stakeActive ? "tabActive" : ""}`} style={{width: "50%"}} onClick={() => {openTab("stake")}}>Stake</h5>
                    <h5 className={`float-end ${unstakeActive ? "tabActive" : ""}`} style={{width: "50%"}} onClick={() => {openTab("unstake")}}>Unstake</h5>
                </div>
                <div id="stake" className={`${stakeActive ? "d-block" : "d-none"}`}>
                    <small className="float-start">I want to stake</small>
                    <form style={{textAlign: "initial"}}>
                        <input type="number" name="stake" placeholder='500 FZY' onClick={(e) => {handleInput(e, "stake")}} />
                        <small>balance: </small>
                        <div style={{height: "80px"}}>
                            <button className="float-start" type='submit'>Stake</button>
                            <button className="float-end">Get Rewards</button>
                        </div>
                    </form>
                </div>
                <div id="unstake" className={`${unstakeActive ? "d-block" : "d-none"}`}>
                    <div>
                        <small className="float-start">I want to unstake</small>
                        <form style={{textAlign: "initial"}}>
                            <input type="number" name="unstake" placeholder='500 FZY' onClick={(e) => {handleInput(e, "unstake")}} />
                            <small>staked amount: </small>
                            <button type='submit'>Unstake</button>
                        </form>
                    </div>
                </div>
                <div className="card-row">
                    <span>Your Rewards</span> <br />
                    <div>
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.123</span>
                    </div>
                </div>
                <div className="card-row">
                    <span>APR</span> <br />
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.0001</span>
                </div>
                <div className="card-row">
                    <span>Total Staked</span> <br />
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>1,000,000</span>
                </div>
            </div>
        </div>
    )
}

export default Staking;