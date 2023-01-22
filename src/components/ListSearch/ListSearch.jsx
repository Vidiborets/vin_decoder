import { useState } from 'react';
import { Container, BoxItem, Title, ListItem, Link } from './ListSearch.styled';
import { Box } from 'components/Box/Box';
export const ListSearch = ({ value, onSubmit }) => {
  const [searchByLink, setSearchByLink] = useState('');
  const visibleList = () => {
    return value.filter((val, index, arr) => index > arr.length - 6);
  };
  const handleClick = e => {
    setSearchByLink(e.target.textContent);
    onSubmit(searchByLink);
  };

  const listLastFiveElements = visibleList();
  return (
    <Container as="section">
      <BoxItem>
        {listLastFiveElements.length > 0 && (
          <Box as="ul">
            <Title>You reviewed</Title>
            {listLastFiveElements.map((item, index) => (
              <ListItem key={index}>
                <Link onClick={handleClick}>{item}</Link>
              </ListItem>
            ))}
          </Box>
        )}
      </BoxItem>
    </Container>
  );
};
