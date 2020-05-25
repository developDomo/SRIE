import Head from 'next/head';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Roboto:ital,wght@0,300;0,400;0,700;0,900;1,300&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/93f079ed62.js"
      />
    </Head>
    {/* <Header /> */}
    <div className="content">{children}</div>
    <Footer />
    <style jsx>
      {`
      .layout {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        font-family: 'Roboto';
      }

      .content {
        flex: auto;
      }
    `}
    </style>
  </div>
);

export default Layout;
