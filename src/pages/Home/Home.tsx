import "./Home.scss";
import bg from "../assets/home/bg-pattern-header.svg";
import { Header } from "./Header";
import { GetStarted } from "./GetStarted";

export const Home = () => {
  return (
    <div className="home flex flex-col items-center">
      <Header />
      <GetStarted />
      
    </div>
  );
};
