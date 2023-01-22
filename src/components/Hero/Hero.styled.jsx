import styled from 'styled-components';
import { Box } from 'components/Box/Box';
import image from '../../images/modely.jpeg';
export const Section = styled(Box)`
  position: relative;
  /* padding: 0 15px;
  display: flex;
  @media (min-width: 575.98px) {
    & {
      padding: 0 calc(50% - 270px);
      padding-top: 70px;
    }
  }

  @media (min-width: 767.98px) {
    & {
      padding: 0 calc(50% - 360px);
      padding-top: 70px;
    }
  }

  @media (min-width: 991.98px) {
    & {
      padding: 0 calc(50% - 480px);
      padding-top: 70px;
    }
  }
  @media (min-width: 1199.98px) {
    & {
      padding: 0 calc(50% - 590px);
      padding-top: 70px;
    }
  } */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #757575;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${image});
  max-width: 1600px;
  text-align: center;
  padding-top: 270px;
  padding-bottom: 200px;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    height: 400px;
    padding-top: 188px;
    padding-bottom: 118px;
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${image});
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    background-image: linear-gradient(
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${image});
  }
`;
