import styled from 'styled-components';
import { Box } from 'components/Box/Box';
export const BoxText = styled(Box)`
  padding-top: ${props => props.theme.space[7]}px;
  padding-bottom: ${props => props.theme.space[7]}px;
`;
