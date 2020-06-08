import { Container, Breadcrumb } from 'react-bootstrap';
import { withTranslation } from '../../i18n';

const BreadcrumbBar = ({ t, country, navigation }) => (
  <Container className="p-0 pb-4">
    <Breadcrumb className="bg-white-ol">
      <Breadcrumb.Item key="home" className="bg-white  roboto font-size-14 font-blue" href="/">
        {t('navigation.pages.home')}
      </Breadcrumb.Item>
      <Breadcrumb.Item key="country" href={`/${country.short_name}`} className="roboto font-size-14 font-blue">
        {t(`countries:countries.${country.code}`)}
      </Breadcrumb.Item>
      {navigation.map((navItem) => {
        const breadcrumbAttributes = {};
        if (navItem.url) {
          breadcrumbAttributes.href = navItem.url;
        } else {
          breadcrumbAttributes.active = true;
        }
        return (
          <Breadcrumb.Item key={navItem.key} className="truncate roboto font-size-14 " {...breadcrumbAttributes}>
            {t(`${navItem.key}`)}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>

    <style type="text/css">
      {`
        .truncate {
          display: inline-block;
          max-width: 50%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bg-white-ol > ol {
          background:white;
          padding:0;
        }
      `}

    </style>

  </Container>
);

BreadcrumbBar.getInitialProps = async () => ({
  namespacesRequired: ['navigation', 'countries'],
});

export default withTranslation(['navigation', 'countries', 'indicators'])(BreadcrumbBar);
