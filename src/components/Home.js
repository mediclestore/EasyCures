import "./Home.css";
import { Link } from "react-router-dom";
import HomePage from './../../src/HomePage.jpeg'
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_img"
          src={HomePage}/>
      </div>
      <div className="home__slogan">
        <h1>Your Health Our Care</h1>
        <h4>  "Welcome to our online medical store, your trusted destination for health and wellness essentials delivered right to your doorstep."</h4>
      <Link to='/valuecart'><button style={{height:'35px', margin:'1rem'}}>Get started</button></Link>
      </div>

      
    </div>
  );
};
export default Home;
