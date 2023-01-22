import styled from 'styled-components';
import { Box } from 'components/Box/Box';
import { Field, Form } from 'formik';
export const Container = styled(Box)`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  padding: 0 15px;
`;
export const FormInput = styled(Form)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgb(0 0 0 / 8%);
  display: flex;
  justify-content: space-between;
  flex: 1 1;
  display: flex;
  align-items: center;
`;

export const InpuField = styled(Field)`
  padding: 0;
  border: 0;
  border-radius: 0;
  line-height: 1;
  background: none;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  padding: 0;
  border: 0;
  border-radius: 0;
  line-height: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.1s ease-in-out;
  width: 100%;
  outline: none;
`;
export const Label = styled.label`
  padding: 8px 0 7px 16px;
`;
export const Button = styled.button`
  display: inline-block;
  padding: 0;
  border: 0;
  background: none;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
  font-weight: inherit;
  text-decoration: none;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 8px;
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  &:hover {
    color: ${props => props.theme.colors.secondaryText};
    background-color: ${props => props.theme.colors.yellow};
  }
`;
