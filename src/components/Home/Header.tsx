import "./Header.scss";
import logo from "../../assets/shared/logo.svg";
import circle from "../../assets/home/bg-pattern-header.svg";
import chart from "../../assets/home/illustration-charts.svg";

export const Header = () => {
  return (
    <div className="header">
      <img id="circle" src={circle} alt="circle" />
      <img id="logo" src={logo} alt="logo" />
      <img id="chart" src={chart} alt="chart" />
    </div>
  );
};
