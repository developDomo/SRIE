
import { Container } from 'react-bootstrap';
import Header from '../components/layout/Header';
import CountryHeader from '../components/countries/CountryHeader';
// import IndEducativo from "../components/layout/IndEducativo";

export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    const pa = pathname;
    return { pa };
  }

  render() {
    return (
      <>
        <Container>
          <h2>Glosario</h2>
          <p>Pronto disponible.</p>
        </Container>
      </>
    );
  }
}
