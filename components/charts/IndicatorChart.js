import React, { useState, useEffect } from 'react';
import {
  Tabs, Tab, Container, Row, Col, Button, Modal,
} from 'react-bootstrap';
import styled from 'styled-components';
import { InlineMath, BlockMath } from 'react-katex';
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,

} from 'react-share';
import { isEmpty } from 'lodash';
import { instanceOf } from 'prop-types';
import { withTranslation } from '../../i18n';
import { DisplayTypes } from './types/ChartTypes';
import TotalChart from './TotalChart';
import SexChart from './SexChart';
import ChartTypeControls from './controls/ChartTypeControls';
import IndexesChart from './indexesChart';
import { hasSomeData } from './helpers/ChartDataHelper';
import GeoChart from './GeoChart';
import WealthQuintileChart from './WealthQuintileChart';
import { blueButton, blueButtonRoll } from '../../styles/colors';

const ChartContent = styled.div`
  width: 100%;
  height: auto;
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
    cursor: pointer;
  }
  &:hover ,:focus{
    &::before {
      content: url(${(props) => props.iconHover});
    }
  }
  
`;

const FooterSource = styled.div`
  color: #727EAB;
  padding-top: 1em;
  font-style: italic;
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

const ShareTitle = styled.p`
 
`;

const ButtonSubmit = styled(Button)`
  border-radius: 0;
  background: ${blueButton};
  & :hover{
    background: ${blueButtonRoll};
  }
`;


// eslint-disable-next-line react/no-danger
const separateParagraphs = (text) => text.split('\n').map((c, index) => (<div dangerouslySetInnerHTML={{ __html: c }} key={index} />));

const explanationInline = (formula, text) => formula.split('\n').map((c, index) => (
  <>
    <strong><InlineMath math={c} /></strong>
    {text.split('\n')[index]}
    <br />
  </>
));

const DataSheetTitle = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: bold;
  font-size: 1.1em;
  color: rgb(68, 149, 205);
`;

const DataSheetParagraph = styled.p`
  font-family: Roboto;
  color: rgb(108, 117, 125);
`;
const DataSheetFormula = styled.p`
  color: #007BFF;
`;

const IframeText = styled.textarea`
 width: 100%;
 
`;
const DoubleLine = styled.hr`
  width:100%; 
  border-top:5px double; 
`;

const showFormula = (formula) => {
  if (!isEmpty(formula)) {
    return (
      <DataSheetFormula>
        {formula.split('\n').map((f) => (
          <BlockMath math={f} />
        ))}
      </DataSheetFormula>
    );
  }
  return (<></>);
};

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
          {showFormula(translation(`indicators:indicators.${indicator}.metadata.formula`, { joinArrays: '\n' }))}
        </Col>
        <Col>
          <DataSheetParagraph>
            {translation('common:where')}
            :
          </DataSheetParagraph>
          <DataSheetParagraph>
            {explanationInline(
              translation(`indicators:indicators.${indicator}.metadata.formulaExplanation`, { joinArrays: '\n' }),
              translation(`indicators:indicators.${indicator}.metadata.formulaExplanationText`, { joinArrays: '\n' }),
            )}
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
        {separateParagraphs(translation('indicators:copyright'))}
      </DataSheetParagraph>

    </Modal.Body>
  </Modal>
);

const ShareModal = ({
  show, onHide, indicator, t, absolutePath, countryCode, variation, title,
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
      <ShareTitle>
        {t('common:shareLink')}
        :
      </ShareTitle>
      <Row>
        <Col className="col-sm-1 pr-0 d-flex justify-content-center">
          <FacebookShareButton
            url={absolutePath}
            quote={title}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Col>
        <Col className="col-sm-1 p-0 d-flex justify-content-center">
          <TwitterShareButton
            url={absolutePath}
            title={title}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Col>
        <Col className="col-sm-1 p-0 d-flex justify-content-center">
          <WhatsappShareButton
            url={absolutePath}
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Col>
        <Col className="col-sm-1 p-0 d-flex justify-content-center">
          <EmailShareButton
            url={absolutePath}
            subject={title}
            body="body"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Col>
      </Row>

      <div>
        <DoubleLine />
      </div>

      <ShareTitle>
        {t('common:copyLink')}
        :
      </ShareTitle>
      <div>
        <IframeText rows="1" type="text" value={absolutePath} readOnly width="500px" />
      </div>
      <Row>
        <ButtonSubmit
          className="ml-auto"
          style={{ marginRight: '1em' }}
          onClick={() => navigator.clipboard.writeText(absolutePath)}
        >
          {t('common:copyLink')}
        </ButtonSubmit>
      </Row>
      <div>
        <ShareTitle>
          {t('common:embedCode')}
          :
        </ShareTitle>
      </div>

      <div>
        {t('common:iframeCode')}
        :
      </div>
      <p>
        <IframeText
          rows="4"
          readOnly
          // eslint-disable-next-line  max-len
          value={`<iframe src="${process.env.API_URL}/${countryCode}/indicator-share/${indicator}?share=true&hideSideBar=true&type=table${variation?.code ? `&indicatorVariation=${variation.code}` : ''}" scrolling="no" frameBorder="0" height="100%" width="600"/>`}
        />
      </p>
    </Modal.Body>
  </Modal>
);

const IndicatorChart = ({
  t, data, indicator, indicatorSource, share, hideSideBar, type, tabNumber, country, chart, countryCode, unitMeasure, defaultChartMetrics, indexe,
}) => {
  const [chartType, setChartType] = useState(DisplayTypes.CHART.description === type ? DisplayTypes.CHART : DisplayTypes.CHART || DisplayTypes.TABLE);
  const [chartData, setChartData] = useState(share ? data[indicatorSource] : data[indicatorSource.code]);
  const [showMore, setShowMore] = useState(false);
  const [indexes, setIndexes] = useState(false);

  const [infoModalShow, setInfoModalShow] = useState(false);
  const [downloadModalShow, setDownloadModalShow] = useState(false);
  const tabsToShow = [...Object.keys(chartData?.visualizations), ...['indexes']];
  const [absolutePath, setAbsolutePat] = useState();
  const [activeTab, setActiveTab] = useState(tabsToShow[tabNumber - 1 || 0]);
  const handleInfoModalClose = () => setInfoModalShow(false);
  const handleInfoModalShow = () => setInfoModalShow(true);
  const scale = t(`indicators:indicators.${indicator}.scale`);
  useEffect(() => {
    setAbsolutePat(window.location.href);
  }, []);


  const showTotalTab = () => {
    if (tabsToShow.indexOf('total') !== -1) {
      return (
        <Tab
          eventKey="total"
          disabled={hasSomeData(chartData.visualizations?.total)}
          title={<TapTitle iconUrl="/img/home/ico-total.svg">{t('total')}</TapTitle>}
        >
          <TotalChart
            data={chartData}
            chartType={chartType}
            unitMeasure={unitMeasure}
            defaultChartMetrics={defaultChartMetrics}
            share={share}
            domain={scale}
          />
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
          <SexChart data={chartData} chartType={chartType} defaultChartMetrics={defaultChartMetrics} unitMeasure={unitMeasure} share={share} domain={scale} />
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
          <GeoChart data={chartData} chartType={chartType} defaultChartMetrics={defaultChartMetrics} unitMeasure={unitMeasure} share={share} domain={scale} />
        </Tab>
      );
    }
    return (<></>);
  };

  const showSocioeconomicLevelTab = () => {
    if ((tabsToShow.indexOf('wealth-quintile') !== -1)
        && chartData.visualizations['wealth-quintile'].historical.length > 0
        && chartData.visualizations['wealth-quintile'].latest.length > 0) {
      return (
        <Tab eventKey="socioeconomicLevel" title={<TapTitle iconUrl="/img/home/icon_total_line.svg">{t('socioeconomicLevel')}</TapTitle>}>
          <WealthQuintileChart
            data={chartData}
            chartType={chartType}
            defaultChartMetrics={defaultChartMetrics}
            unitMeasure={unitMeasure}
            share={share}
            domain={scale}
          />
        </Tab>
      );
    }
    return (<></>);
  };

  const showIndexesTab = () => {
    if (tabsToShow.indexOf('indexes') !== -1) {
      return (
        <Tab eventKey="indexes" disabled={hasSomeData(chartData.indexes)} title={<TapTitle iconUrl="/img/home/ico-indices.svg">{t('indexes')}</TapTitle>}>
          <IndexesChart
            data={chartData}
            chartType={chartType}
            defaultChartMetrics={defaultChartMetrics}
            unitMeasure={unitMeasure}
            share={share}
            indexe={indexe}
            getSelectedIndex={setIndexes}
          />
        </Tab>
      );
    }
    return (<></>);
  };

  const showContent = () => (
    <Tabs defaultActiveKey={tabsToShow[tabNumber - 1 || 0] || ''} className="indicatorChartTabs" onSelect={(e) => setActiveTab(e)}>
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
      <Container key={chart.code} fluid={share}>
        <Row>
          <Col lg="9">
            <VariationTitle isVariation={chart.isVariation} translationKey={chart.translation_key} />
          </Col>
        </Row>
        <Row>
          <Col xs lg={hideSideBar === 'true' ? 12 : 9}>
            <ChartContent>
              <ChartTypeControls setChartType={setChartType} activeState={chartType} share={share} />
              <div>
                {showContent()}
              </div>
              <FooterSource>
                <Row>
                  <Col lg="1">
                    {t('source')}
                    :
                  </Col>
                  <Col>

                    {separateParagraphs(t(`indicators:indicators.${indicator}.metadata.datasourceType`, { joinArrays: '\n' }))}

                  </Col>
                </Row>
              </FooterSource>
            </ChartContent>
          </Col>
          <Col md="auto" lg="3" hidden={hideSideBar === 'true'}>
            <SideBarIcons>

              <SidebarIcon iconUrl="/img/home/icon_table_1.svg" iconHover="/img/home/icon_table_1_rollover.svg" onClick={handleInfoModalShow} />
              <InfoModal
                translation={t}
                show={infoModalShow}
                indicator={indicator}
                onHide={handleInfoModalClose}
              />

              <SidebarIcon iconUrl="/img/home/icon_table_2.svg" iconHover="/img/home/icon_table_2_rollover.svg" onClick={() => setDownloadModalShow(true)} />
              <ShareModal
                show={downloadModalShow}
                indicator={indicator}
                t={t}
                absolutePath={absolutePath}
                countryCode={country.short_name}
                onHide={() => setDownloadModalShow(false)}
                variation={indicatorSource}
                title={chart.isVariation ? t(`indicators:variations.${chart.translation_key}.purpose`) : t(`indicators:indicators.${indicator}.name`)}
              />
            </SideBarIcons>
            <SideBarDownloadContainer>
              <h5>
                {t('sideBar.downloads')}
                :
              </h5>
              <div>
                <a
                  href={
                    `/indicators/${country.code}/${indicator}/${activeTab}${indicatorSource.code !== indicator
                      ? country.code.replace(`${indicator}.`, '-')
                      : ''}${activeTab === 'indexes' ? `-${indexes}` : ''}.pdf`
                  }
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  <a>{t('sideBar.formats.PDF')}</a>
                </a>
              </div>
              <div>

                <a
                  href={
                    `/indicators/${country.code}/${indicator}/${activeTab}${indicatorSource.code !== indicator
                      ? country.code.replace(`${indicator}.`, '-')
                      : ''}${activeTab === 'indexes' ? `-${indexes}` : ''}.png`
                  }
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  {t('sideBar.formats.PNG')}
                </a>

              </div>
              <div>
                <a href={`${process.env.API_URL}/api/indicators/csv?country=${countryCode.toUpperCase()}&code=${chart.code}`}>{t('sideBar.formats.CSV')}</a>
              </div>
            </SideBarDownloadContainer>
            <SideBarDescriptionContainer>
              {separateParagraphs(t(`indicators:indicators.${indicator}.metadata.purpose`, { joinArrays: '\n' }))}
            </SideBarDescriptionContainer>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .nav-link {
            display: block;
            padding: .5rem 0.95rem;
          }
        .nav-tabs .nav-link,.nav-tabs .nav-link.active{
          border-radius:0!important;
        }
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
  data, indicatorSource, t, share, hideSideBar, type, tabNumber, country, indicator, countryCode, chart, unitMeasure, defaultChartMetrics, indexe,
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
  country,
  chart,
  countryCode,
  unitMeasure,
  defaultChartMetrics,
  indexe,
});

export default withTranslation('charts', 'indicators', 'common')(IndicatorChart);
