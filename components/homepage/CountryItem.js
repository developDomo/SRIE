import Link from 'next/link';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withTranslation } from '../../i18n';

const CountryItem = ({ t, country }) => (
  <>
    <Col xs={6} sm={3}>
      <Link href="/[id]" as={`/${country.short_name}`}>
        <a title={country.title}>
          <img src={`/img/home/${country.code}-flag.png`} alt={country.short_name} />
          <span className="country-link">{t(`countries.${country.code}`)}</span>
        </a>
      </Link>
    </Col>
    <style jsx>
      {`
        a {
          display: block;
          text-align: center;
          color: white;
          text-decoration: none;
          margin: 0 0 20px 0;
        }
        img {
          margin: 0 auto 10px auto;
          display: block;
          border-radius: 50%;
          border: 2px solid;
        }
        span.country-link {
          background: #1d2d49;
          background-image: url(/img/home/arrow-more-white.svg);
          background-repeat: no-repeat;
          background-position: 90%;
          background-size: 15px;
          padding: 5px 35px;
          border-radius: 15px;
          text-transform: uppercase;
          font-family: 'Raleway', sans-serif;
          font-weight: bold;
          white-space: nowrap;
        }
        a:hover span.country-link {
          background: #0071bc;
          background-image: url(/img/home/arrow-more-rollover.svg);
          cursor: pointer;
          background-repeat: no-repeat;
          background-position: 90%;
          background-size: 15px;
        }
      `}
    </style>
  </>
);

CountryItem.getInitialProps = async () => ({
  namespacesRequired: ['countries'],
});

CountryItem.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('countries')(CountryItem);
