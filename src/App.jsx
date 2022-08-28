import WalletList from "components/WalletList/WalletList";
import "./App.scss";
import NavBar from "components/NavBar/NavBar";
import Steps from "components/Steps/Steps";
import ConvertDetails from "components/ConvertDetails/ConvertDetails";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NavBar />
        <WalletList />
        <Steps />
        <ConvertDetails />
      </div>
    </div>
  );
}

export default App;
