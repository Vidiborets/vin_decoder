import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.heading};
  margin-bottom: ${props => props.theme.space[5]}px;
  text-align: center;
  margin-bottom: ${props => props.theme.space[6]}px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${props => props.theme.space[7]}px;
  margin-top: -${props => props.theme.space[7]}px;
`;
export const ListItem = styled.li`
  flex-basis: calc((100% - 3 * 30px) / 3);
  text-align: center;
  margin-left: ${props => props.theme.space[7]}px;
  margin-top: ${props => props.theme.space[7]}px;
`;
export const LinkItem = styled(NavLink)`
  display: flex;
  width: ${props => props.theme.widths.normal};
  height: ${props => props.theme.space[8]}px;
  border: ${props => props.theme.borders.normal};
  box-sizing: border-box;
  border-radius: ${props => props.theme.space[2]}px;
  justify-content: center;
  align-items: center;
  border-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.blue};
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.yellow};
    border-color: ${props => props.theme.colors.yellow};
  }
`;
