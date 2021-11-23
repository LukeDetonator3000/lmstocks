import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../styles/Header.css';
// import logoImg from '../../../public/logo-LM-Stocks.png';

class Header extends Component {
  render() {

    return (
      <div className="headerContainer">
        <div className="headerContent">
          {/* <img src={logoImg} alt="lmStocks" /> */}

          <div className="nav-header">
            <NavLink className="btn-header" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="btn-header" activeClassName="active" exact to="/products">Products</NavLink>
            <a className="a-header" href="https://github.com/luisaferreira/LM_Stocks_Interface">github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
