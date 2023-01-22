/* eslint-disable jsx-a11y/alt-text */
import { Box } from 'components/Box/Box';
import { NavItem, BoxNav, Container, BugerBox } from './AppBar.styled';
import logo from '../../images/VinLogo.png';
import { NavLink } from 'react-router-dom';
import { Burger } from 'components/Burger/Burger';
import { Menu } from 'components/Menu/Menu';
import { useState, useRef } from 'react';
import { useOnClickOutside } from '../../hooks/hooks';
const navItem = [
  { href: '/', text: 'Home' },
  { href: 'variables', text: 'Variables' },
];

export const AppBar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container as="header">
      <BugerBox ref={node}>
        <NavLink to="/">
          <img src={logo} alt="logo" width="100px" height="55px" />
        </NavLink>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </BugerBox>
      <BoxNav
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <NavLink to="/">
          <img src={logo} alt="logo" width="100px" height="55px" />
        </NavLink>
        <Box display="flex">
          {navItem.map(({ href, text }) => (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          ))}
        </Box>
        <NavItem to="contact">Contacts</NavItem>
      </BoxNav>
    </Container>
  );
};
