import { Container } from 'components/ListSearch/ListSearch.styled';
import { LinkAdress } from 'components/Footer/Footer.styled';
import { BoxContact } from './Contact.styled';
export const Contact = () => {
  return (
    <Container style={{ height: '70vh' }}>
      <BoxContact textAlign="center">
        <h2 style={{ marginBottom: '10px' }}>Contacts</h2>
        <p style={{ marginBottom: '10px' }}>Odessa</p>
        <p style={{ marginBottom: '10px' }}>pr-t Nebesony Sotni</p>
        <ul>
          <li style={{ marginBottom: '10px' }}>
            <LinkAdress>info@devstudio.com</LinkAdress>
          </li>
          <li>
            <LinkAdress>+38 096 111 11 11</LinkAdress>
          </li>
        </ul>
      </BoxContact>
    </Container>
  );
};
