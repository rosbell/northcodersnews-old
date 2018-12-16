import React from 'react';
import { Link } from '@reach/router';
import '../styles/Header.css';

import crown from '../assets/crown.png';

const Header = () => {
  return (
    <div>

      <div >
        <Link className="header" to="/"><img src={crown} width="80" alt="News about stuff and things logo" className="logo"></img> <h1 className="title">News about things and stuff</h1>
        </Link>
      </div>

    </div>
  );
}

export default Header;