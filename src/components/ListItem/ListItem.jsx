import { Container } from 'components/ListSearch/ListSearch.styled';
import { Box } from 'components/Box/Box';
import { Title } from 'components/ListSearch/ListSearch.styled';
import {
  List,
  ItemList,
  BoxItem,
  TextContentBox,
  TitleContentBox,
} from './ListItem.styled';
export const ListItem = ({ visibleCar }) => {
  return (
    <>
      {visibleCar && (
        <Container as="section" style={{ paddingBottom: '70px' }}>
          <Title style={{ textAlign: 'center' }}>Details</Title>
          <Box display="flex" justifyContent="center">
            <List>
              {visibleCar &&
                visibleCar.map(({ Value, Variable, VariableId }) => {
                  if (
                    !Value ||
                    Value === 'Not Applicable' ||
                    Value === '0' ||
                    Variable === 'Error Text'
                  ) {
                    // eslint-disable-next-line array-callback-return
                    return;
                  } else {
                    return (
                      <ItemList key={VariableId}>
                        <BoxItem>
                          <TitleContentBox>
                            <h2>{Variable}</h2>
                          </TitleContentBox>
                          <TextContentBox>
                            <p>{Value}</p>
                          </TextContentBox>
                        </BoxItem>
                      </ItemList>
                    );
                  }
                })}
            </List>
          </Box>
        </Container>
      )}
    </>
  );
};
