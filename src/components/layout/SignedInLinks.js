import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
<ul className="right">
    <li><NavLink to='/create'>Help Out in Your Community</NavLink></li>
    <li><NavLink to='/'>Log Out</NavLink></li>
    <li><NavLink to='/' className='btn btn-floating pink lighten-1'>KW</NavLink></li>
</ul>
  )
}

export default SignedInLinks;
