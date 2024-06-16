import "./Header.scss";
import logo from "../../assets/shared/logo.svg";
import circle from "../../assets/home/bg-pattern-header.svg";

export const Header = () => {
  return (
    <header>
      <div className="circle">
        <img src={circle} />
      </div>
      <div className="logo">
        <img src={logo} />
      </div>
    </header>
  );
};
