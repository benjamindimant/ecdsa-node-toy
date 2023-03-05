import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, wallets }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <select onChange={onChange}>
          <option></option>
          {wallets.map((address) => (
            <option key={address} value={address}>
              {address.slice(0, 20)}
            </option>
          ))}
        </select>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
