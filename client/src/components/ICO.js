import { useContext, useState } from 'react';
import { FaEthereum } from 'react-icons/fa';
import { TransactionContext } from '../contexts/context';

function ICO() {
    const { handleChange, buyTokens, balance } = useContext(TransactionContext);
    const [ depositAmount, setDepositAmount ] = useState(0);
    function handleInput(e, name) {
        handleChange(e, name);
        const amount = 0.0001 * e.target.value;
        setDepositAmount(amount);
    }
    return(
        <div className="container">
            <div className="m-auto card-background mt-5 shadow-sm text-center p-4">
                <h5>Deposit</h5>
                <small className="float-start">I want to buy</small>
                <form onSubmit={(e) => {buyTokens(); e.preventDefault();}}>
                    <input type="number" name="deposit" placeholder='500 FZY' onChange={(e) => {handleInput(e, "deposit")}} />
                    <small className='float-start'>you will pay { depositAmount } ETH</small>
                    <small className="float-end">balance: { balance }</small>
                    <button type='submit'>Deposit</button>
                </form>
                <div className="card-row">
                    <span>ETH Contributed</span> <br />
                    <div>
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.123</span>
                    </div>
                </div>
                <div className="card-row">
                    <span>Token Price</span> <br />
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.0001</span>
                </div>
                <div className="card-row">
                    <span>FZY For Sale</span> <br />
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>1,000,000</span>
                </div>
            </div>
        </div>
    )
}

export default ICO;