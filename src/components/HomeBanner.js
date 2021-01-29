import React from 'react';
import { getContent } from '../utils/translator';

const HomeBanner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>{getContent('tagline')}</p>
      </div>
    </div>
  );
};

export default HomeBanner;
