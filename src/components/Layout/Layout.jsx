import { AppBar } from 'components/AppBar/AppBar';
import { FooterBox } from 'components/Footer/Footer.styled';
import { Footer } from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <FooterBox
        as="footer"
        style={{ paddingTop: '60px', paddingBottom: '60px' }}
      >
        <Footer />
      </FooterBox>
    </>
  );
};
