import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Layout(args) {
  return (
    <div>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">Reactstrap</NavbarBrand>
        <Nav tabs>
          <NavItem>
            <NavLink href="/greet/">Greet</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/user/1">User 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/user/2">User 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/user/3">User 3</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/vehicle">Vehicle</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Layout;
