import { Box } from 'components/Box/Box';
import { NavLink } from 'react-router-dom';
import logo from '../../images/VinLogo.png';
import { Text, LinkAdress, Title, SocialLink } from './Footer.styled';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
export const Footer = () => {
  const navItem = [
    { href: 'facebook', icon: BsFacebook },
    { href: 'instagram', icon: BsInstagram },
    { href: 'twitter', icon: BsTwitter },
  ];
  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <NavLink to="/">
          <img src={logo} alt="logo" width="100px" height="55px" />
        </NavLink>
        <address style={{ marginTop: '20px' }}>
          <Text>Odessa, pr-t Nebesoi Sotny 30</Text>
          <ul>
            <li style={{ marginBottom: '10px' }}>
              <LinkAdress>info@devstudio.com</LinkAdress>
            </li>
            <li>
              <LinkAdress>+38 096 111 11 11</LinkAdress>
            </li>
          </ul>
        </address>
      </Box>
      <Box>
        <Title>Connect</Title>
        <Box marginTop="20px" as="ul" display="flex">
          {navItem.map(({ href, icon: Icon }) => (
            <Box as="li" key={href} marginRight="10px">
              <SocialLink key={href}>
                <Icon size={20} />
              </SocialLink>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
