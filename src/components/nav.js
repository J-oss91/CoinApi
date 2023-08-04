import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Crypto Home</div>
      </Link>
      <Link to="/currencies">
        <div>Crypto Currencies</div>
      </Link>
      <Link to="/price">
        <div>Crypto Prices</div>
      </Link>
    </div>
  );
};

export default Nav;

//shortcut for function call is () => {}
//function call is (){}
