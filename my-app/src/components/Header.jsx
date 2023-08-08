import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img
              src="facebook.png"
              alt="Logo"
              width="30"
              height="29"
              className="d-inline-block align-text-top me-2"
            />
            Facebook
          </a>
        </div>
      </nav>
    </div>
  );
}
