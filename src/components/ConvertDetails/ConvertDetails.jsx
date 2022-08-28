import ConversionCard from "components/ConversionCard/ConversionCard";
import "./ConvertDetails.scss";
const ConvertDetails = () => {
  return (
    <div className="ConvertDetails Flex Col">
      <div className="ConvertDetailsRow">
        {[1, 2, 3].map((item, i) => (
          <ConversionCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default ConvertDetails;
