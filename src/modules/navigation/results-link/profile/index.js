import React from "react";

function Profile({isActive, isJustMounted}) {
  return (
    <svg className="profile"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 190.956 190.938"
      fill="#d4aa00"
      fillOpacity="1"
      fillRule="evenodd"
      stroke="#d4aa00"
      strokeOpacity="1"
    >
      <defs>
        <marker id="b" orient="auto" overflow="visible" refX="0" refY="0">
          <path
            strokeLinejoin="round"
            strokeWidth="0.188"
            d="M-1.926-1.21L1.352-.005l-3.278 1.206a2.05 2.05 0 000-2.411z"
          ></path>
        </marker>
        <marker orient="auto" overflow="visible" refX="0" refY="0">
          <path
            strokeWidth="0.267"
            d="M-1.2 0l-1 1 3.5-1-3.5-1z"
          ></path>
        </marker>
        <marker id="a" orient="auto" overflow="visible" refX="0" refY="0">
          <path
            strokeWidth="0.267"
            d="M.98 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </marker>
      </defs>
      <path
        fill="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="5.1"
        markerEnd="url(#b)"
        markerStart="url(#a)"
        d="M24.672 225.31l54.865-54.85 70.3-70.28 54.606-54.59"
        transform="translate(-18.825 -40.218)"
      >
      {isJustMounted ?<animate
      attributeName="d"
      dur="0.5s"
      repeatCount="1"
      fill="freeze"
      from={isActive ? "M24.672 225.31l54.865-54.85 70.3-70.28 54.606-54.59" : "M 24.672352,225.30938 62.193116,145.81317 166.26784,132.58678 204.44325,45.589483"}
      to={isActive ? "M 24.672352,225.30938 62.193116,145.81317 166.26784,132.58678 204.44325,45.589483" : "M24.672 225.31l54.865-54.85 70.3-70.28 54.606-54.59"}/> : ""}
      </path>
    </svg>
  );
}

export default Profile;
