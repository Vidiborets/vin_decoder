import { Box } from 'components/Box/Box';
import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
`;
export const ItemList = styled.li`
  margin-bottom: ${props => props.theme.space[3]}px;
`;
export const BoxItem = styled(Box)`
  display: flex;
  align-items: baseline;
  @media (min-width: 319.98px) and (max-width: 480px) {
    & {
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: 575.98px) {
    & {
      display: flex;
      align-items: baseline;
    }
  }
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const TitleContentBox = styled(Box)`
  max-width: 310px;
  padding: 3px;
  margin-right: ${props => props.theme.space[3]}px;
`;
export const TextContentBox = styled(Box)`
  max-width: 320px;
  border-radius: 5px;
`;
