import logo from './logo.svg';
import './App.css';
import { TransactionContext } from './contexts/context';
import { useContext } from 'react';

function App() {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  console.log(currentAccount);
  
  return (
    <div className="App">
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default App;
