import fetch from 'isomorphic-unfetch';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import InfoSlider from '../components/homepage/InfoSlider';
import CountrySelector from '../components/homepage/CountrySelector';
import Header from '../components/layout/Header';
import BannerOds from '../components/homepage/BannerOds';
import { withTranslation } from '../i18n';

const Home = ({ countries, t, pa }) => (
  <>
    <div className="home">
      <Header path={pa} />
      <Row className="justify-content-md-center mxs-0">
        <div className="col-sm-8 px-0">
          <InfoSlider />
          <CountrySelector countries={countries} />
        </div>
      </Row>
    </div>
    <div className="row justify-content-md-center slider-box">
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

Home.getInitialProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/countries`);
  const countries = await res.json();

  return {
    namespacesRequired: ['homepage'],
    countries,
  };
};

export default withTranslation('homepage')(Home);
