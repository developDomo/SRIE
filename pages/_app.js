import React from 'react';
import App from 'next/app';
import Layout from '../components/layout/Layout';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { appWithTranslation } from '../i18n';

import globalStyles from '../styles/global';
import 'katex/dist/katex.min.css';

const SrieApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
    <style jsx global>
      {globalStyles}
    </style>
  </Layout>
);

SrieApp.getInitialProps = async (appContext) => {
  const recursiveNamespaces = (component, acc = []) => {
    const ns = component.defaultProps?.i18nNamespaces;
    const a = (typeof ns === 'string') ? [...acc, ns] : [...acc, ...(ns || [])];
    const wrappedComponent = component.WrappedComponent;
    if (wrappedComponent) {
      return recursiveNamespaces(wrappedComponent, a);
    } return a;
  };

  const appProps = await App.getInitialProps(appContext);
  const namespaces = recursiveNamespaces(appContext.Component);
  return {
    ...appProps,
    pageProps: {
      namespacesRequired: [...namespaces],
    },
  };
};

SrieApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(SrieApp);
