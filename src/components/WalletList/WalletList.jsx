import WalletItem from "components/WalletItem/WalletItem";
import "./WalletList.scss";
const list = [
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#FA996E" }}></i>
    ),
    label: "BTC",
    name: "Bitcoin",
    value: "5.040000",
    usd: "$35 578.91",
  },
  {
    icon: (
      <i
        className="Icon ri-copper-diamond-fill"
        style={{ color: "#353535" }}
      ></i>
    ),
    label: "ETH",
    name: "Ethereum",
    value: "160.020000",
    usd: "$36 578.91",
  },
  {
    icon: (
      <i className="Icon ri-bit-coin-fill" style={{ color: "#9B9B9B" }}></i>
    ),
    label: "LTC",
    name: "Litecoin",
    value: "135.890000",
    usd: "$7 035.02",
  },
  {
    icon: <i className="Icon ri-stack-fill" style={{ color: "#EBBA23" }}></i>,
    label: "BNB",
    name: "Binancecoin",
    value: "5.040000",
    usd: "$35 578.91",
  },
];
const WalletList = () => {
  return (
    <div className="WalletList">
      <p className="FontSize20 ColorDarkGray3 My20">Wallets</p>
      <div className="Flex Row JustifyBetween ItemsCenter Mt40">
        <div>
          <div className="Flex Row ItemsCenter">
            <p className="ColorDarkGray3">USD</p>
            <i className="ri-arrow-drop-down-line ColorDarkGray3"></i>
          </div>
          <p className="Font600 FontSize10 ColorLightGray1 Mt5">Market Value</p>
        </div>
        <div className="Flex Col ItemsEnd">
          <p className="FontTransformY FontLato Font700 FontSize12 ColorDarkGray3 Mb5">
            $ 159 001.212
          </p>
          <p className="Font600 FontSize10 ColorLightGray1 Mt5">
            Total Balance
          </p>
        </div>
      </div>
      <hr />
      <div>
        {list.map((item, i) => (
          <WalletItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WalletList;
