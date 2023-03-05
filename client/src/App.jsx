import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import server from "./server";
import { useState, useEffect } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    async function fetchWallets() {
      const {
        data: { wallets },
      } = await server.get("/wallets");
      setWallets(wallets);
    }
    fetchWallets();
  }, []);

  return (
    <div className="app">
      <Wallet
        wallets={wallets}
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
      <Transfer wallets={wallets} setBalance={setBalance} address={address} />
    </div>
  );
}

export default App;
