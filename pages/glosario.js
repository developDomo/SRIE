import { Container } from 'react-bootstrap';

export default class extends React.Component {
  static async getInitialProps({ pathname }) {
    const pa = pathname;
    return { pa };
  }

  render() {
    const { pa } = this.props;
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
