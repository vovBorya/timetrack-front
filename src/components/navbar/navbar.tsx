import React from 'react';
import './navbar.scss';

type Props = {

}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">TimeTracker</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
              aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              My works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">My archive</a>
          </li>
        </ul>

        <button className='btn btn-success'>Add  work</button>
      </div>
    </nav>
  );
};

export default Navbar;