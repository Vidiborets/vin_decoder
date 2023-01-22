import { NavLink } from 'react-router-dom';
import { StyledMenu } from './Menu.styled';
export const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/" onClick={() => setOpen(!open)}>
        Home
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/variables">
        Variables
      </NavLink>
      <NavLink onClick={() => setOpen(!open)} to="/contact">
        Contact
      </NavLink>
    </StyledMenu>
  );
};
