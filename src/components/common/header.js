import React, { PropTypes } from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ loading }) => {
  return (
    <Navbar>
      <Nav>
        <LinkContainer to="/home">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/courses">
          <NavItem eventKey={2}>Courses</NavItem>
        </LinkContainer>
        <LinkContainer to="/users">
          <NavItem eventKey={3}>Users</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={4} title="Help" id="basic-nav-dropdown">
          <LinkContainer to="/about">
            <MenuItem eventKey={4.1}>About</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
