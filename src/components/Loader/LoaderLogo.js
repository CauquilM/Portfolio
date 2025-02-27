import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="1200.000000pt"
        height="1200.000000pt"
        viewBox="0 0 1200.000000 1200.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        ></g>
      </svg>
    );
  }
}

export default LogoLoader;
