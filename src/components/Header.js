import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../src/Logo.jpeg";

import { auth } from "./../firebase";

const Header = () => {
  const basketItemCount = useSelector((store) => store?.cart?.basket?.length);

  const userId = useSelector((store) => store?.cart?.user);
  // const userId = "juber";
  // console.log(userId);

  const handleAuth = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} />
      </Link>

      <div className="header__options_list">
        <div className="header__options">
          <Link to="/">
            <span className="option_lineTwo">HOME</span>{" "}
          </Link>
        </div>

        <div className="header__options">
        <Link to="/about"><span className="option_lineTwo">ABOUT</span></Link>
        </div>

        <div className="header__options">
        <Link to="/valuecart"><span className="option_lineTwo">VALUE STORE</span>  </Link>
        </div>
        <div className="header__options">
        <Link to="/contact"><span className="option_lineTwo">CONTACT US</span></Link>
        </div>
        <div className="header__options">
        <Link to="/blog"><span className="option_lineTwo">BLOG</span></Link>
        </div>
      </div>

      {/* <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div> */}

      <div className="header_cart">
      <div className="header__options">
        <Link to="/offers"><span className="option_lineTwo">OFFERS</span></Link>
        </div>
        <Link to={!userId && "/login"}>
          <div onClick={handleAuth} className="header__options">
            <span className="option_lineOne">Hello, {userId}</span>
            <span className="option_lineTwo">
              {userId ? "sign-out" : "sign-in"}
            </span>
          </div>
        </Link>

        <div className="header_optionBasket">
          <Link to="/checkout">
            <AddShoppingCartSharpIcon />
            <span className="header_optionBasket_count">{basketItemCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
