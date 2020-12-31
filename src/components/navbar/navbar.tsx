import React from 'react';
import './navbar.scss';
import {Button} from "../button/button";

type Props = {

}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">TimeTracker</a>

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

        <Button
          type='success'
          title='Add work'
          onClick={() => console.log('Click')}
        />
      </div>
    </nav>
  );
};

export default Navbar;