import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Navbar.elements";

const NavbarEffect4 = () => {
  return (
    <>
      {/* <Link to="/cybertruck"> Cybertruck </Link>
            <Link to="/cyberquad"> CyberQuad </Link>
            <Link to="/robot"> Robot </Link>
            <Link to="/tequila"> Tequila </Link> */}
      <Container>
        <Wrapper>
          <Menu>
            <MenuItem>
              <MenuItemLink bgColor={"#ff0000"}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/cybertruck"
                >
                  CTRUCK
                </Link>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink bgColor={"#00ff00"}><Link style={{textDecoration: 'none', color: 'black'}} to="/cyberquad">CQUAD</Link></MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink bgColor={"#fa0ff0"}><Link style={{textDecoration: 'none', color: 'black'}} to="/robot">ROBOT</Link></MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink bgColor={"#ffff00"}><Link style={{textDecoration: 'none', color: 'black'}} to="/tequila">TEQUILA</Link></MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default NavbarEffect4;
