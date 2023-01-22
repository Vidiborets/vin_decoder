import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 9px;
  }
`;
export const LinkItem = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.yellow};
  }
`;
