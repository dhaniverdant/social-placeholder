import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page not found.</h2>
      <Link to="/">
        <h4>Back to Home</h4>
      </Link>
    </div>
  )
}

export default NotFound;
