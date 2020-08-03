import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { i18n, withTranslation } from '../i18n';
import Title from '../components/layout/Title';

const Text = styled.p`
  width: 100%;
`;

const GlossaryItems = ({ t }) => {
  const items = [];
  for (let i = 1; i <= 11; i++) {
    items.push(
      <Row>
        <Text><strong>{t(`item.${i}.label`)}</strong></Text>
        <Text>{t(`item.${i}.description`)}</Text>
      </Row>,
    );
  }
  return items;
};

const Glossary = ({ t }) => (
  <>
    <Title color="blue" type="title" textCenter>
      {t('title')}
    </Title>
    <div className="bg-light">
      <Container>
        <Row className="d-sm-flex justify-content-center">
          <div className="col-sm-8 py-2 py-sm-5">
            <GlossaryItems t={t} />
          </div>
        </Row>
      </Container>
    </div>
  </>
);

export default withTranslation('glossary')(Glossary);
