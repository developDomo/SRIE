import { Container, Breadcrumb } from 'react-bootstrap';
import { withTranslation } from '../../i18n';

const BreadcrumbBar = ({ t, page, navigation }) => (
  <Container className="p-0 pb-0 mb-0 mt-2 w-100">
    <Breadcrumb className="bg-white-ol mb-0">
      <Breadcrumb.Item key="home" className="bg-white  breadcrum-item mb-0" href="/">
        {t('navigation.pages.home')}
      </Breadcrumb.Item>
      <Breadcrumb.Item key="country" href={`/${page.url}`} className="breadcrum-item mb-0" active>
        {t(page.name)}
      </Breadcrumb.Item>
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
          margin:0;
        }
      `}

    </style>

  </Container>
);

BreadcrumbBar.getInitialProps = async () => ({
  namespacesRequired: ['navigation', 'countries'],
});

export default withTranslation(['navigation', 'countries', 'indicators'])(BreadcrumbBar);
