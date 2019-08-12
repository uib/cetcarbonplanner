import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
//import { prototype } from "events";

const NavBar = props => {
  const bgcolor = { backgroundColor: "#4EBBDF" };
  return (
    <Nav
      variant="pills"
      activeKey="null"
      onSelect={
        page => props.navigate(page)
        /* the parameter "page" is a string defined as eventKey in each Nav.Item*/
      }
      className="mb-3"
    >
      <Nav.Item>
        <Nav.Link eventKey="home" href="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="trip" title="Item">
          Plan trip
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="meeting" title="Item">
          Organize meeting
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="view" disabled={!props.datasetLength}>
          View plots
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="data" disabled={true}>
          Data
        </Nav.Link>
      </Nav.Item>
      {/*
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>*/}
    </Nav>
  );
};

/*
      <nav className="navbar-nav navbar-text container-fluid" style={bgcolor}>
        <span className="text-light ml-3"> Navigation bar</span>
      </nav>
*/

export default NavBar;
