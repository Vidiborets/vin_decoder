import { useParams, useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getVariableById } from '../../data/getCars';
import { Container } from 'components/ListSearch/ListSearch.styled';
import { BoxText } from './VariablesDetails';
export const VariableDetails = () => {
  const [variable, setVariable] = useState(null);
  const location = useLocation();
  const { variablesId } = useParams();
  useEffect(() => {
    getVariableById(Number(variablesId)).then(setVariable);
  }, [variablesId]);

  if (!variable) {
    return null;
  }
  const description = variable.Description.replace(/<\/?[a-zA-Z]+>/gi, '');
  return (
    <Container as="section" style={{ height: '70vh' }}>
      <Link to={location.state?.from ?? '/variables'}>Back to customers</Link>
      <BoxText>{description}</BoxText>
    </Container>
  );
};
