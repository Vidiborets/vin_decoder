import { Box } from 'components/Box/Box';
import { Container } from 'components/ListSearch/ListSearch.styled';
import { BsSearch, BsStopwatch, BsListOl } from 'react-icons/bs';
import { List, ListItem, LinkItem, Title } from './About.styled';
export const About = ({ message }) => {
  const navItems = [
    { href: 'search', icon: BsSearch },
    { href: 'watch', icon: BsStopwatch },
    { href: 'list', icon: BsListOl },
  ];
  return (
    <Container as="section">
      <Title>How it Works</Title>
      <Box>
        <List as="ul">
          {navItems.map(({ href, icon: Icon }) => (
            <ListItem key={href}>
              <LinkItem>
                <Icon size={50} />
              </LinkItem>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box marginTop="20px">{message}</Box>
    </Container>
  );
};
