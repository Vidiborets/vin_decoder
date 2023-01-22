import { Box } from 'components/Box/Box';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled(Box)`
  padding: 0 15px;

  @media (min-width: 319.98px) {
    & {
      padding: 0 calc(50% - 240px);
      padding-top: 70px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 70px;
    }
  }
  @media (min-width: 575.98px) {
    & {
      padding: 0 calc(50% - 270px);
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }

  @media (min-width: 767.98px) {
    & {
      padding: 0 calc(50% - 360px);
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }

  @media (min-width: 991.98px) {
    & {
      padding: 0 calc(50% - 480px);
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }
  @media (min-width: 1199.98px) {
    & {
      padding: 0 calc(50% - 590px);
      padding-top: 70px;
      padding-bottom: 70px;
    }
  }
`;
export const BoxItem = styled(Box)`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.16;
  margin-bottom: ${props => props.theme.space[5]}px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.colors.blue};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${props => props.theme.colors.yellow};
  }
`;
