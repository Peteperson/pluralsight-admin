import React, { PropTypes } from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../resources/EurobankWin10.png';
import login from '../../resources/login_32x32.png';
import styles from '../../styles/styles.css';

const Header = ({ loading, authenticated }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src="resources/EurobankWin10.png" className="logoStyle" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/courses" style={authenticated ? null : { display: 'none' }}>
            <NavItem eventKey={2}>Courses</NavItem>
          </LinkContainer>
          <LinkContainer to="/users" style={authenticated ? null : { display: 'none' }}>
            <NavItem eventKey={3}>Users</NavItem>
          </LinkContainer>
          <LinkContainer to="/comments" style={authenticated ? null : { display: 'none' }}>
            <NavItem eventKey={4}>Comments</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={5} title="Help" id="basic-nav-dropdown"
            style={authenticated ? null : { display: 'none' }}>
            <LinkContainer to="/about">
              <MenuItem eventKey={5.1}>About</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          {authenticated ? <LinkContainer to="/logoff">
            <NavItem eventKey={6}>Log off</NavItem>
          </LinkContainer>
            : <LinkContainer to="/login">
              <NavItem eventKey={7}>Login</NavItem>
            </LinkContainer>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default Header;
