import Link from 'next/link';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { txt, blue1 } from '../../styles/colors';
import { ButtonNav } from '../layout/Button';
import { withTranslation } from '../../i18n';

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  width: 12%;
  margin-right: 10px;
  & img {
    width: 100%;
  }
`;

const TextContainer = styled.div`
  font-family: 'Roboto Slab', sans-serif;
  font-weight: bold;
  font-size: 2.5em;
  text-transform: uppercase;
  color: ${blue1};
`;

const Divider = styled.span`
  display: block;
  width: 100%;
  border-bottom: 1px solid ${txt};
  margin-top: 20px;
`;

const CountryTitle = ({ t, country, active }) => (
  <Container className="p-0">
    <Row className="d-flex justify-content-between m-0 w-100">
      <div className="col-lg-6 p-0">
        <TitleContainer>
          <IconContainer>
            <img src={`/img/country/${country.code}-flag-title.svg`} alt="icon" />
          </IconContainer>
          <TextContainer>{t(`countries:countries.${country.code}`)}</TextContainer>
        </TitleContainer>
      </div>
      {active && (
        <Row className="col-lg-6 d-flex justify-content-end p-0 m-0">
          <div className="col-lg-3 pr-0">
            <Link href="/[id]" as={`/${country.short_name}`}>
              <ButtonNav color="yellow" active={active === 'country-data'}>
                {t('navigation.pages.country-data')}
              </ButtonNav>
            </Link>
          </div>
          <div className="col-lg-5 pr-0 m-0">
            <Link href="/[id]/indicadores" as={`/${country.short_name}/indicadores`} replace>
              <ButtonNav color="blue" active={active === 'indicators'}>{t('navigation.pages.indicators')}</ButtonNav>
            </Link>
          </div>
        </Row>
      )}
      <Divider />
    </Row>
    <style type="text/css">
      {`
      .title-flag img {
        width: 100%; 
        margin-top: 3px;
      }
    
      .title-text h2 {
        font-family: 'Roboto Slab', serif;
        font-weight: bold;
        font-size: 2.5em;
        text-transform: uppercase;
        color: ${blue1};
      }
    `}

    </style>
  </Container>
);

CountryTitle.defaultProps = {
  i18nNamespaces: ['navigation', 'countries'],
};

export default withTranslation(['navigation', 'countries'])(CountryTitle);
