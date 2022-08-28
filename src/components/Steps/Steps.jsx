import "./Steps.scss";

const Steps = () => {
  return (
    <div className="Steps Flex JustifyBetween ItemsCenter">
      <div className="Label">
        <p className="Small">1st Step</p>
        <span className="Active">Select</span>
      </div>
      <div className="Line Active"></div>
      <div className="Label">
        <p className="Small">2nd Step</p>
        <span>Confirm</span>
      </div>
      <div className="Line"></div>
      <div className="Label">
        <p className="Small">3rd Step</p>
        <span>Success</span>
      </div>
    </div>
  );
};

export default Steps;
