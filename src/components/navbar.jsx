import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  const bgcolor = { backgroundColor: "#4EBBDF" };
  return (
    <Nav
      variant="pills"
      activeKey="1"
      onSelect={k => console.log(k)}
      className="mb-3"
    >
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

/*
      <nav className="navbar-nav navbar-text container-fluid" style={bgcolor}>
        <span className="text-light ml-3"> Navigation bar</span>
      </nav>
*/

export default NavBar;
