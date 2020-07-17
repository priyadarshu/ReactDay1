import React from "react";

export default function Header() {
  const stylesh = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#ff8c00",
    fontSize: 20
  };
  return (
    <header>
      <div>
        <nav>
          <ul style={stylesh}>
            <li style={{ display: "inline" }}>
              <a
                style={{ color: "white" }}
                href="https://www.w3schools.com/react/react_css.asp"
              >
                Home
              </a>
            </li>
            &nbsp;&nbsp;
            <li style={{ display: "inline" }}>
              <a style={{ color: "white" }} href="https://www.w3schools.com/">
                Blog
              </a>
            </li>
            &nbsp;&nbsp;
            <li style={{ display: "inline" }}>
              <a style={{ color: "white" }} href="https://www.w3schools.com/">
                Store
              </a>
            </li>
            &nbsp;&nbsp;
            <li style={{ display: "inline" }}>
              <a style={{ color: "white" }} href="https://www.w3schools.com/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
