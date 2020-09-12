import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { i18n, withTranslation } from '../i18n';
import Title from '../components/layout/Title';
import { theme } from '../styles/theme';
import { txt } from '../theme/colors';

const Text = styled.p`
  margin-bottom: 0;
  width: 100%;
  font-family: ${theme.fontFamily.RobotoSlab};
`;

const GlossaryItems = ({ t }) => {
  const items = [];
  for (let i = 1; i <= 11; i++) {
    items.push(
      <Row>
        <Col sm={3} className="colStyle d-flex">
          <Text className="text-center"><strong>{t(`item.${i}.label`)}</strong></Text>
        </Col>
        <Col className="px-2 pb-4">
          <Text>{t(`item.${i}.description`)}</Text>
        </Col>
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
    <style global jsx>
      {`
        .colStyle{
          border-right: 0.5px solid;
          }
      `}
    </style>
  </>
);

export default withTranslation('glossary')(Glossary);
