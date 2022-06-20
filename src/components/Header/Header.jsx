import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container fs-4 ">
        <a className="navbar-brand fs-3">Pricing Example</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"   aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header