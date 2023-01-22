import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box } from 'components/Box/Box';
export const BugerBox = styled(Box)`
  background-color: ${props => props.theme.colors.white};
  height: ${props => props.theme.space[10]}px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  @media (min-width: 575.98px) {
    & {
      display: none;
    }
  }
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;

  color: ${p => p.theme.colors.black};
  &.active {
    color: ${p => p.theme.colors.blue};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.yellow};
  }
  &:not(:last-child) {
    margin-right: ${props => props.theme.space[3]}px;
  }
`;
export const BoxNav = styled(Box)`
  padding: 0 15px;
  @media (min-width: 319.98px) {
    & {
      display: none;
    }
  }
  @media (min-width: 575.98px) {
    & {
      display: flex;
      padding: 0 calc(50% - 270px);
    }
  }

  @media (min-width: 767.98px) {
    & {
      padding: 0 calc(50% - 360px);
    }
  }

  @media (min-width: 991.98px) {
    & {
      padding: 0 calc(50% - 480px);
    }
  }
  @media (min-width: 1199.98px) {
    & {
      padding: 0 calc(50% - 590px);
    }
  }
  background-color: ${props => props.theme.colors.white};
  border-bottom: ${props => props.theme.borders.normal};
`;
export const Container = styled(Box)`
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  left: 0;
`;
