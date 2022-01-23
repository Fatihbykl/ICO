import { FaEthereum } from 'react-icons/fa';

function ICO() {
    return(
        <div className="container">
            <div className="m-auto card-background mt-5 shadow-sm text-center p-4">
                <h5>Deposit</h5>
                <small className="float-start">I want to deposit</small>
                <input type="number" name="deposit" />
                <small className="float-end">balance: 500</small>
                <button>Deposit</button>
                <div className="card-row">
                    <span>ETH Contributed</span> <br />
                    <div>
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.123</span>
                    </div>
                </div>
                <div className="card-row">
                    <span>Token Price</span> <br />
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.123</span>
                </div>
                <div className="card-row">
                    <span>FZY For Sale</span> <br />
                    <FaEthereum size="20px" color="white" style={{"marginTop": "-5px"}} /><span className='eth-cont'>0.123</span>
                </div>
            </div>
        </div>
    )
}

export default ICO;