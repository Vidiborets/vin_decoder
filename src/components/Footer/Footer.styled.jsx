import { Box } from 'components/Box/Box';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
export const FooterBox = styled(Box)`
  padding: 0 15px;
  @media (min-width: 575.98px) {
    & {
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
  background-color: ${props => props.theme.colors.footerColor};
  border-top: ${props => props.theme.borders.normal};
  padding-bottom: 60px;
  padding-top: 60px;
`;
export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.71;
  color: ${props => props.theme.colors.white};
  font-style: normal;
  margin-bottom: 9px;
`;
export const LinkAdress = styled(Link)`
  color: ${props => props.theme.colors.blue};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.body};
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${props => props.theme.colors.yellow};
  }
`;
export const Title = styled.h3`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.body};
  text-transform: uppercase;
  margin-bottom: ${props => props.theme.space[4]}px;
  color: ${props => props.theme.colors.white};
  padding-top: ${props => props.theme.space[4]}px;
`;
export const SocialLink = styled(NavLink)`
  display: flex;
  width: ${props => props.theme.space[5]}px;
  height: ${props => props.theme.space[5]}px;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.backgroundLink};
  color: ${props => props.theme.colors.link};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.yellow};
  }
`;
