import "./ConversionCard.scss";
const ConversionCard = () => {
  return (
    <div className="ConversionCard Flex Col">
      <div className="Flex Row">
        <div className="Flex Col Mt20">
          <div className="ConversionToFrom Flex ItemsCenter">
            <div>
              <div className="LabelBlock">
                <p className="Label">Bitcoin</p>
                <p className="Name">5.04 BTC ($53 378.91)</p>
              </div>
            </div>
            <div className="Icon BgLightGray2 Flex JustifyCenter ItemsCenter MlAuto Mr5">
              <i className="ri-bit-coin-fill"></i>
            </div>
            <i className="ri-arrow-down-s-line ColorDarkGray3"></i>
          </div>
          <div className="My30">
            <p className="Font600 FontSize10 ColorLightGray1">Your spend</p>
            <div className="Flex Row WFull JustifyBetween">
              <p className="FontTransformY ColorDarkGray3 FontSize1-4 Font600">
                3.000000
              </p>
              <p className="FontTransformY ColorDarkGray3 FontSize1-4 Font600">
                BTC
              </p>
            </div>
            <hr className="Purple" />
            <div className="Flex Row WFull JustifyBetween">
              <p className="FontLato Font600 FontSize10 ColorLightGray3">
                19 392.20
              </p>
              <p className="FontLato Font600 FontSize10 ColorLightGray3">USD</p>
            </div>
          </div>
        </div>
        <div className="Flex Col ItemsCenter Mx30">
          <div className="Flex VLine"></div>
          <div className="Icon BgDarkGray3 Flex JustifyCenter ItemsCenter">
            <i className="ri-repeat-2-fill ColorLightGray4"></i>
          </div>
          <div className="Flex VLine"></div>
        </div>
        <div className="Flex Col Mt20">
          <div className="ConversionToFrom Flex ItemsCenter">
            <div>
              <div className="LabelBlock">
                <p className="Label">Ethereum</p>
                <p className="Name">160 ETH ($32 672.99)</p>
              </div>
            </div>
            <div className="Icon BgLightGray2 Flex JustifyCenter ItemsCenter MlAuto Mr5">
              <i className="ri-copper-diamond-fill"></i>
            </div>
            <i className="ri-arrow-down-s-line ColorDarkGray3"></i>
          </div>
          <div className="My30">
            <p className="Font600 FontSize10 ColorLightGray1">You get</p>
            <div className="Flex Row WFull JustifyBetween">
              <p className="FontTransformY ColorLightGray5 FontSize1-4 Font600">
                94.426101
              </p>
              <p className="FontTransformY ColorLightGray5 FontSize1-4 Font600">
                ETH
              </p>
            </div>
            <hr className="Light" />
            <div className="Flex Row WFull JustifyBetween">
              <p className="FontLato Font600 FontSize10 ColorLightGray3">
                19 392.20
              </p>
              <p className="FontLato Font600 FontSize10 ColorLightGray3">USD</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Flex Row ItemsCenter Mt40">
        <div>
          <p className="Font600 FontSize10 ColorLightGray1 Mb5">Market rate</p>
          <p className="FontLato FontTransformY Font700 FontSize12 ColorDarkGray3">
            1 BTC = 31.47 ETH
          </p>
        </div>
        <div className="Ml30">
          <p className="Font600 FontSize10 ColorLightGray1 Mb5">
            Conversion fee
          </p>
          <p className="Font700 FontSize12 ColorDarkGray3 FontTransformY FontLato">
            12.938539 BNB
          </p>
        </div>
        <button className="MlAuto ConvertBtn">Convert Now</button>
      </div>
    </div>
  );
};

export default ConversionCard;
