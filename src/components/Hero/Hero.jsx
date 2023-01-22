import { SearchBox } from 'components/SearchBox/SearchBox';
import { Section } from './Hero.styled';
export const Hero = ({ onSubmit }) => {
  return (
    <Section as="section" paddingTop="70px">
      <SearchBox onSubmit={onSubmit} />
    </Section>
  );
};
