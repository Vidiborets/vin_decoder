import styled from 'styled-components';

export const ErrorMessage = styled.h2`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes.m};
  margin-top: ${props => props.theme.space[3]}px;
  position: absolute;
  top: 350px;
  left: 0;
  right: 0;
`;
