import React from 'react';
import { Link } from '@reach/router';
import '../styles/Nav.css'

const Nav = ({ topics }) => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {topics.map(topic => (
        <Link key={topic.slug} to={`/topics/${topic.slug}`}>
          {topic.slug}
        </Link>
      ))}
    </div>
  );
};

export default Nav;