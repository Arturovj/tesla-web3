import React from "react";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Menu>
            <MenuItem>
              <MenuItemLink>CYBERTRUCK</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>CYBERQUAD</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>ROBOT</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>TEQUILA</MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;