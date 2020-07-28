import fetch from 'isomorphic-unfetch';
import { Row } from 'react-bootstrap';
import InfoSlider from '../components/homepage/InfoSlider';

import CountrySelector from '../components/homepage/CountrySelector';
import BannerOds from '../components/homepage/BannerOds';
import { withTranslation } from '../i18n';
import WelcomeText from '../components/layout/WelcomeText';

const Home = ({ countries, t, path }) => (
  <>
    <div className="home">
      <Row className="justify-content-md-center m-0">
        <div className="col-sm-8 px-0">
          <InfoSlider />
          <WelcomeText />
          <CountrySelector countries={countries} />
        </div>
      </Row>
    </div>
    <div className="row justify-content-md-center slider-box m-0">
      <div className="col-sm-8">
        <BannerOds />
      </div>
    </div>
    <style type="text/css">
      {`
      .fa-times:before, .fa-bars:before {
        color: white;
      }
      .navbar-light .navbar-toggler {
        color: rgba(0,0,0,.5);
        border: none;
        margin: 9px auto 0 auto;
    }
    .header {
      border-bottom: 2px solid #fff;
      padding-top: 10px;
    }
    `}
    </style>
    <style jsx>
      {`
    
    `}
    </style>
  </>
);

Home.getInitialProps = async ({ pathname: path }) => {
  const res = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await res.json();

  return {
    namespacesRequired: ['homepage'],
    countries,
    path,
  };
};

export default withTranslation('homepage')(Home);
