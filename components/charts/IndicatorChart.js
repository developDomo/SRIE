import React, { useState, useEffect } from 'react';
import {
  Tabs, Tab, Container, Row, Col, Button, Modal,
} from 'react-bootstrap';
import Link from 'next/link';
import styled from 'styled-components';
import Latex from 'react-latex';
import { InlineMath, BlockMath } from 'react-katex';
import { withTranslation } from '../../i18n';
import { DisplayTypes, ChartTypes } from './types/ChartTypes';
import TotalChart from './TotalChart';
import SexChart from './SexChart';
import ChartTypeControls from './controls/ChartTypeControls';
import IndexesChart from './indexesChart';
import { hasSomeData } from './helpers/ChartDataHelper';
import GeoChart from './GeoChart';
import WealthQuintilleChart from './WealthQuintilleChart';



const ChartContent = styled.div`
  width: 100%;
  height: 700px;
  // background-color: #EAEEF2;
`;

const TapTitle = styled.span`
  &::before {
    content: url(${(props) => props.iconUrl});
    display:block;
    width: 20px;
    margin: 0 10px;
    float: left;
  }
`;

const SidebarIcon = styled.span`
  &::before {
    content: url(${(props) => props.iconUrl});
    color: red;
    display:block;
    width: 20px;
    margin: 0 10px;
    float: left;
  }
`;

const FooterSource = styled.div`
  color: #727EAB;
  padding-top: 1em;
`;

const SideBarIcons = styled.div`
  margin-top: 2.9em;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: 2px solid #AABAC3;
   & > p {
    max-width: 30px;
    text-align: center;
    background: rgba(255,255,255,0.5);
    margin: .25rem;
    padding: .25rem;
   }
`;

const SideBarDownloadContainer = styled.div`
margin-top: 1.4em;
margin-left: 1em;

 & > h5 {
  color: #5E7C8B;
 }
`;
const SideBarDescriptionContainer = styled.div`
  border-top: 2px solid #AABAC3;
  margin-top: 2em;
  padding: 1em;
`;

const IndicatorTitleH3 = styled.h3`
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 700;
  margin-top: 40px;
`;

const separateParagraphs = (text) => text.split('\n').map((c, index) => (<div dangerouslySetInnerHTML={{ __html: c }} key={index} />));

const DataSheetTitle = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: rgb(68, 149, 205)
`;

const DataSheetParagraph = styled.p`
  font-family: Roboto;
  color: rgb(108, 117, 125);
`;
const DataSheetFormula = styled.p`
  color: #007BFF;
`;


const InfoModal = ({
  onHide, show, translation, indicator,
}) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton />
    <Modal.Body>
      <DataSheetTitle>{translation(`indicators:indicators.${indicator}.metadata.title`)}</DataSheetTitle>
      <strong>
        {translation('common:definition')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.definition`, { joinArrays: '\n' }))}
      </DataSheetParagraph>
      <strong>
        {translation('common:purpose')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.purpose`, { joinArrays: '\n' }))}
      </DataSheetParagraph>
      <strong>
        {translation('common:method')}
        :
      </strong>

      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.method`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

      <Row className="h-100">
        <Col className="col-sm-5 my-auto">
          <DataSheetFormula>
            <BlockMath math={JSON.stringify(translation(`indicators:indicators.${indicator}.metadata.formula`)).slice(1, -1)} />
          </DataSheetFormula>

        </Col>
        <Col>
          <DataSheetParagraph>
            {translation('common:where')}
            :
          </DataSheetParagraph>
          <DataSheetParagraph>
            {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.formulaExplanation`, { joinArrays: '\n' }))}
          </DataSheetParagraph>
        </Col>
      </Row>
      <strong>
        {translation('common:interpretation')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.interpretation`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

      <strong>

        {translation('common:datasourceType')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.datasourceType`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

      <strong>
        {translation('common:datasourceType')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.datasourceType`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

      <strong>
        {translation('common:periodicity')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.periodicity`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

      <strong>
        {translation('common:limitationsAndComments')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.limitationsAndComments`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

      <strong>
        {translation('common:licenseAndCopyrights')}
        :
      </strong>
      <DataSheetParagraph>
        {separateParagraphs(translation(`indicators:indicators.${indicator}.metadata.licenseAndCopyrights`, { joinArrays: '\n' }))}
      </DataSheetParagraph>

    </Modal.Body>
  </Modal>
);

const ShareModal = ({ show, onHide, indicator }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Share
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>
        Centered Modal
        {indicator}
      </h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

const IndicatorChart = ({
  t, data, indicator, indicatorSource, share, hideSideBar, type, tabNumber, period, country, chart, countryCode,
}) => {
  const [chartType, setChartType] = useState(DisplayTypes.CHART.description === type ? DisplayTypes.CHART : DisplayTypes.CHART || DisplayTypes.TABLE);
  const [chartData, setChartData] = useState(data[indicatorSource.code]);
  const [infoModalShow, setInfoModalShow] = useState(false);
  const [downloadModalShow, setDownloadModalShow] = useState(false);
  const tabsToShow = [...Object.keys(chartData.visualizations), ...['indexes']];

  const handleInfoModalClose = () => setInfoModalShow(false);
  const handleInfoModalShow = () => setInfoModalShow(true);

  const showTotalTab = () => {
    if (tabsToShow.indexOf('total') !== -1) {
      return (
        <Tab
          eventKey="total"
          disabled={hasSomeData(chartData.visualizations?.total)}
          title={<TapTitle iconUrl="/img/home/ico-total.svg">{t('total')}</TapTitle>}
        >
          <TotalChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showSexTab = () => {
    if (tabsToShow.indexOf('sex') !== -1) {
      return (
        <Tab
          eventKey="sex"
          disabled={hasSomeData(chartData.visualizations?.sex)}
          title={<TapTitle iconUrl="/img/home/ico-sexo.svg">{t('sex')}</TapTitle>}
        >
          <SexChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showGeoZoneTab = () => {
    if ((tabsToShow.indexOf('location') !== -1)
        && chartData.visualizations.location.historical.length > 0
        && chartData.visualizations.location.latest.length > 0) {
      return (
        <Tab eventKey="geoZone" title={<TapTitle iconUrl="/img/home/ico-zona.svg">{t('geoZone')}</TapTitle>}>
          <GeoChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showSocioeconomicLevelTab = () => {
    if ((tabsToShow.indexOf('wealth-quintille') !== -1)
        && chartData.visualizations['wealth-quintille'].historical.length > 0
        && chartData.visualizations['wealth-quintille'].latest.length > 0) {
      return (
        <Tab eventKey="socioeconomicLevel" title={<TapTitle iconUrl="/img/home/icon_total_line.svg">{t('socioeconomicLevel')}</TapTitle>}>
          <WealthQuintilleChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showIndexesTab = () => {
    if (tabsToShow.indexOf('indexes') !== -1) {
      return (
        <Tab eventKey="Indexes" disabled={hasSomeData(chartData.indexes)} title={<TapTitle iconUrl="/img/home/ico-indices.svg">{t('indexes')}</TapTitle>}>
          <IndexesChart data={chartData} chartType={chartType} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showContent = () => (
    <Tabs defaultActiveKey={tabsToShow[tabNumber - 1 || 0] || ''} className="indicatorChartTabs">
      {showTotalTab()}
      {showSexTab()}
      {showGeoZoneTab()}
      {showSocioeconomicLevelTab()}
      {showIndexesTab()}
    </Tabs>
  );

  const VariationTitle = ({ isVariation, translationKey }) => {
    if (isVariation) {
      return (
        <IndicatorTitleH3>
          {t(`indicators:variations.${translationKey}`)}
        </IndicatorTitleH3>
      );
    }
    return (<></>);
  };

  return (
    <>
      <Container key={chart.code}>
        <Row>
          <Col lg="9">
            <VariationTitle isVariation={chart.isVariation} translationKey={chart.translation_key} />
          </Col>
        </Row>
        <Row>
          <Col xs lg={hideSideBar === 'true' ? 12 : 9}>
            <ChartContent>
              <ChartTypeControls setChartType={setChartType} activeState={chartType} />
              {showContent()}
              <FooterSource>
                {t('source')}
                : Lorem ipsum dolor sit amet.
              </FooterSource>
            </ChartContent>
          </Col>
          <Col md="auto" lg="3" hidden={hideSideBar === 'true'}>
            <SideBarIcons>

              <SidebarIcon iconUrl="/img/home/icon_table_1.svg" onClick={handleInfoModalShow} />
              <InfoModal
                translation={t}
                show={infoModalShow}
                indicator={indicator}
                onHide={handleInfoModalClose}
              />

              <SidebarIcon iconUrl="/img/home/icon_table_2.svg" onClick={() => setDownloadModalShow(true)} />
              <ShareModal
                show={downloadModalShow}
                indicator={indicator}
                onHide={() => setDownloadModalShow(false)}
              />
            </SideBarIcons>
            <SideBarDownloadContainer>
              <h5>
                {t('sideBar.downloads')}
                :
              </h5>
              <div>
                <a
                  href="/#"
                >
                  <a>{t('sideBar.formats.PDF')}</a>
                </a>
              </div>
              <div>

                <a href="/#">{t('sideBar.formats.PNG')}</a>

              </div>
              <div>
                {' '}
                <a href={`${process.env.API_URL}/api/indicators/csv?country=${countryCode.toUpperCase()}&code=${chart.code}`}>{t('sideBar.formats.CSV')}</a>
                {' '}
              </div>
            </SideBarDownloadContainer>
            <SideBarDescriptionContainer>
              Spicy jalapeno bacon ipsum dolor amet leberkas venison drumstick pork loin meatball, ham salami swine prosciutto.
              Sirloin biltong buffalo, spare ribs chicken alcatra short loin andouille meatball turducken. Landjaeger turkey sausage beef.
              Tongue landjaeger andouille, fatback shank t-bone
            </SideBarDescriptionContainer>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
        .nav-link.active,
        .nav-item.show .nav-link {
          color: red;
          background-color: red;
          border-color: red;
        }
      `}
      </style>
    </>

  );
};

IndicatorChart.getInitialProps = async ({
  data, indicatorSource, t, share, hideSideBar, type, tabNumber, country, indicator, period, countryCode, chart,
}) => ({
  namespacesRequired: ['charts', 'indicators', 'common'],
  data,
  t,
  indicator,
  indicatorSource,
  share,
  hideSideBar,
  type,
  tabNumber,
  period,
  country,
  chart,
  countryCode,
});

export default withTranslation('charts', 'indicators', 'common')(IndicatorChart);
