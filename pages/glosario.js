import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Header from '../components/layout/Header';
// import IndEducativo from "../components/layout/IndEducativo";

export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    const pa = pathname;
    return { pa };
  }

  render() {
    const { pa } = this.props;
    return (
      <>
        <Header path={pa} />
        <Container>
          <h2>Glosario</h2>
          <p>Pronto disponible.</p>
        </Container>
        <style jsx />
      </>
    );
  }
}
