import {
  Container, Row, Col,
} from 'react-bootstrap';
import { i18n, withTranslation } from '../i18n';
import Title from '../components/layout/Title';

const AboutSRIE = ({ t }) => (
  <>
    <Title color="blue" type="title" textCenter>
      {t('title')}
    </Title>
    <div className="bg-light">
      <Container>
        <Row className="d-sm-flex justify-content-center">
          <div className="col-sm-8 py-2 py-sm-5">
            <div dangerouslySetInnerHTML={
              { __html: t('text', { interpolation: { escapeValue: false } }) }
            }
            />
          </div>
        </Row>
      </Container>
    </div>
  </>
);

export default withTranslation('about-srie')(AboutSRIE);
