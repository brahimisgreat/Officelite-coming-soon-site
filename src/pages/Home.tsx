import { GetStarted } from "../components/Home/GetStarted"
import { Header } from "../components/Home/Header"
import './Home.scss'

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <GetStarted />
    </div>
  )
}
