import React from 'react';
import { Link } from 'react-router';

function App({ children, routes }) {

  function generateMapMenu() {
    let path = '';
    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link
              to={path += ((path.slice(-1) === '/' ? '' : '/') +
                  (route.path === '/' ? '' : route.path))}
            >
              {route.mapMenuTitle}
            </Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  return(
    <div>
        <div id="NavBar">
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">    
                  <button type="button" className="nav_top_margin navbar-toggle collapsed" data-toggle="collapse" data-target="#TopNavBar1" >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
                <a href="#Home" className="Nav_Ant NavStyle">Antonio Ng&nbsp;</a>
              </div>
              <div className="collapse navbar-collapse" id="TopNavBar1">
                <ul className="nav navbar-nav navbar-right nav_top_margin1">
                  <li className="">
                    <a href="#Home"><span className="sr-only">(current)</span>
                      <span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp; About
                    </a>
                  </li>
                  <li className="">
                    <Link to="/example"><span className="sr-only">(current)</span>
                      <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>&nbsp; Porfolio
                    </Link>
                  </li>
                  <li className="">
                    <a href="#Contact_me"><span className="sr-only">(current)</span>
                      <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp; Contact
                    </a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-centre nav_top_margin1">
                    <a className="navbar-brand" href="https://ca.linkedin.com/in/antonio-ng-cpa-cma-7b8a6949" target="_blank"><span className="sr-only">(current)</span>
                      <img alt="Linkedin" src="http://www.freeiconspng.com/uploads/linkedin-icon-1.png" className="icon_size"/>
                    </a>
                    <a className="navbar-brand" href="https://github.com/AntonioNways" target="_blank"><span className="sr-only">(current)</span>
                      <img alt="GitHub" src="http://www.freeiconspng.com/uploads/github-logo-icon-5.png" className="icon_size"/>
                    </a>
                    <a className="navbar-brand" href="https://www.freecodecamp.com/antonionways" target="_blank"><span className="sr-only">(current)</span>
                      <img alt="FreeCodeCamp" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/231853/freecodecamp.png" className="icon_size"/>
                    </a>
                </ul>
              </div>
            </div>
          </nav>
         </div >
      {children}
    </div>
  );
}

export default App;
