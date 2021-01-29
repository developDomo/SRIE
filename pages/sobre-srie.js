import {
  Container, Row,
} from 'react-bootstrap';
import Link from 'next/link';
import { withTranslation } from '../i18n';

import Title from '../components/layout/Title';
import { ContainerPage } from '../components/layout/ContainerPageContent';
import CountryHeader from '../components/countries/CountryHeader';
import { ButtonNavIndicadores } from '../components/layout/Button';


const AboutSRIE = ({ t }) => {
  const breadcrumbPage = {
    name: t('breadcrumb'),
    url: 'sobre-srie',
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
      <ContainerPage className="bg-light">
        <Container>
          <Row className="d-sm-flex justify-content-center">
            <div className="col-sm-8 py-2 py-sm-5">
              {/* eslint-disable-next-line react/no-danger */}
              <div dangerouslySetInnerHTML={
              { __html: t('text', { interpolation: { escapeValue: false } }) }
            }
              />
            </div>
          </Row>
          <Row>
            <ButtonNavIndicadores color="blue">
              <Link href={`/static/metadata-pdf/${i18n.language}/full-metadata-SRIE.pdf`}>
                { t('downloadFullMetadata') }
              </Link>
            </ButtonNavIndicadores>
          </Row>
        </Container>
      </ContainerPage>
    </>
  );
};
AboutSRIE.defaultProps = { i18nNamespaces: ['about-srie'] };

export default withTranslation('about-srie')(AboutSRIE);
