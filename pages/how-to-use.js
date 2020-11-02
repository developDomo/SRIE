import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { withTranslation } from '../i18n';

import Title from '../components/layout/Title';
import { theme } from '../styles/theme';
import CountryHeader from '../components/countries/CountryHeader';

const Text = styled.p`
  margin-bottom: 0;
  width: 100%;
  font-family: ${theme.fontFamily.RobotoSlab};
`;


const HowToUsePage = ({ t }) => {
  const breadcrumbPage = {
    name: t('title'),
    url: 'how-to-use',
  };
  return (
    <>
      <CountryHeader
        page={breadcrumbPage}
        active="country-data"
      />
      <Title color="blue" type="title" textCenter>
        {t('title')}
      </Title>
      <div className="bg-light">
        <Container>
          <Row className="d-sm-flex justify-content-center">
            <div className="col-sm-8 py-2 py-sm-5">
              <Text>
                {t('content')}
              </Text>
            </div>
          </Row>
        </Container>
      </div>
      <style global jsx>
        {`
        .colStyle{
          border-right: 0.5px solid;
          }
      `}
      </style>
    </>
  );
};

HowToUsePage.defaultProps = { i18nNamespaces: ['how-to-use'] };

export default withTranslation('how-to-use')(HowToUsePage);
