import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Job
          </Link>
        </li>
        { props.currentUser.role === 'Admin'?
          <li className="nav-item">
            <Link to="/editor" className="nav-link">
              <i className="ion-compose"></i>&nbsp;Post New Job
            </Link>
          </li>:''
        }

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <a href="http://localhost:4100/reports/D3PieLocation.html" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="http://localhost:4100/reports/D3PieTechnology.html" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Tech Dashboard
          </a>
        </li>
   

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.userName}`}
            className="nav-link">
            <img src="../images/smile.jpg" className="user-pic" alt={props.currentUser.userName} />
            {props.currentUser.userName}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
