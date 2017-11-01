import React, { PropTypes } from 'react';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { EuroLogo } from '../../resources/EurobankWin10.png';
import styles from '../../styles/styles.css';

const Header = ({ loading }) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <img src="resources/EurobankWin10.png" className="logoStyle"/>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
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
        <LinkContainer to="/comments">
          <NavItem eventKey={4}>Comments</NavItem>
        </LinkContainer>
        <NavDropdown eventKey={5} title="Help" id="basic-nav-dropdown">
          <LinkContainer to="/about">
            <MenuItem eventKey={5.1}>About</MenuItem>
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
