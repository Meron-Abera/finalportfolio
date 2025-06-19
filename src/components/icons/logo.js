import React from 'react';

const IconLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 110 110"
    className="icon-loader"
    fill="none"
    stroke="#00BFFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      position: 'absolute', // Make it positionable
      top: '0', // Position at the top
      left: '0', // Position at the left (optional)
      zIndex: 999, // Ensure it appears on top of other elements
      width: '80px', // Adjust width
      height: '80px', // Adjust height
    }}>
    <line stroke="#457b9d" className="line" x1="10" y1="90" x2="90" y2="10" />
    <line stroke="#ea698b" className="line" x1="10" y1="10" x2="45" y2="50" />
    <line stroke="#ea698b" className="line" x1="90" y1="90" x2="45" y2="92" />
    <line stroke="#ea698b" className="line" x1="45" y1="90" x2="90" y2="45" />
    <line stroke="#ea698b" className="line" x1="10" y1="10" x2="10" y2="90" />
    <line stroke="#ea698b" className="line" x1="90" y1="10" x2="90" y2="90" />
  </svg>
);

export default IconLogo;
