import { Box } from 'components/Box/Box';
import { useState, useEffect, useMemo } from 'react';
import { getVariables } from '../../data/getCars';
import { Container } from 'components/ListSearch/ListSearch.styled';
import { ListItem, LinkItem } from './Variables.styled';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBoxByName } from 'components/SearchBoxByName/SearchBoxByName';
export const Variables = () => {
  const [list, setList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  const location = useLocation();
  const [message, setMessage] = useState('');
  useEffect(() => {
    getVariables().then(res => {
      setList(res.Results);
      setMessage(res.Message);
    });
  }, []);

  const changeFilter = value => {
    setSearchParams(
      value !== ''
        ? {
            filter: value,
          }
        : {}
    );
  };
  const visibleList = useMemo(
    () =>
      list.filter(item =>
        item.Name.toLowerCase().includes(filter.toLowerCase())
      ),
    [list, filter]
  );

  return (
    <Box as="main">
      <Container
        paddingTop={70}
        paddingBottom={70}
        style={{ textAlign: 'center' }}
      >
        <Box as="h2" style={{ textAlign: 'center', marginBottom: '30px' }}>
          Variables
        </Box>
        <Box as="h3" marginBottom="20px">
          {message}
        </Box>
        <Box marginBottom="20px">
          <SearchBoxByName value={filter} onChange={changeFilter} />
        </Box>
        <Box>
          {visibleList.length > 0 && (
            <ul>
              {visibleList.map(({ Name, ID }) => (
                <ListItem key={ID}>
                  <LinkItem state={{ from: location }} to={`${ID}`}>
                    {Name}
                  </LinkItem>
                </ListItem>
              ))}
            </ul>
          )}
        </Box>
      </Container>
    </Box>
  );
};
