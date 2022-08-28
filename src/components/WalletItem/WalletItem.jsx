import "./WalletItem.scss";

const WalletItem = ({ icon, label, name, value, usd }) => {
  return (
    <div className="WalletItem My30">
      <div className="Flex ItemsCenter">
        <div className="IconWrapper Flex JustifyCenter ItemsCenter">{icon}</div>
        <div className="Ml15">
          <p className="ColorDarkGray3">{label}</p>
          <p className="FontLato Font600 FontSize10 ColorLightGray3 Mt5">
            {name}
          </p>
        </div>
        <div className="Flex Col MlAuto ItemsEnd">
          <p className="Mb5 FontLato FontTransformY Font700 FontSize12 ColorDarkGray3">
            {value}
          </p>
          <p className="FontLato Font600 FontSize10 ColorLightGray3">{usd}</p>
        </div>
      </div>
    </div>
  );
};

export default WalletItem;
