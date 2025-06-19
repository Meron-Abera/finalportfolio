import React from 'react';
import './LogoAnimation.css'; // Ensure this path is correct based on your project structure

const IconLoader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100" // Adjusted viewBox for a smaller logo
    className="icon-loader"
    fill="none"
    stroke="#00BFFF" // Initial color, will be overridden by animation
    strokeWidth="2" // Stroke width remains for bolder lines
    strokeLinecap="round" // Rounded line ends
    strokeLinejoin="round" // Rounded line joins
    width="80" // Adjust width
    height="80" // Adjust height
  >
    {/* Left diagonal line */}
    <line stroke="#457b9d" className="line" x1="10" y1="90" x2="90" y2="10" />
    {/* Left half line */}
    <line stroke="#ea698b" className="line" x1="10" y1="10" x2="45" y2="50" />

    {/* Right horizontal line */}
    <line stroke="#ea698b" className="line" x1="90" y1="90" x2="45" y2="92" />
    {/* Middle diagonal line */}
    {/* <line className="line" x1="90" y1="50" x2="90" y2="10" /> */}
    <line stroke="#ea698b" className="line" x1="45" y1="90" x2="90" y2="45" />

    {/* Left vertical line */}
    <line stroke="#ea698b" className="line" x1="10" y1="10" x2="10" y2="90" />

    {/* Right vertical line */}
    <line stroke="#ea698b" className="line" x1="90" y1="10" x2="90" y2="90" />
  </svg>
);

export default IconLoader;
