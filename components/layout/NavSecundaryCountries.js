import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import countries from '../../pages/api/countries-data';

export default class extends React.Component {
  render() {
    const { path, idCountry } = this.props;

    return (
      <>
        <div className="box_linkC">
          <Container>
            <Row>
              <Col sm={5}>
                <p className="p-select text-right">
                  Seleccione otro país que desee consultar:
                </p>
              </Col>
              <Col sm={7} className="d-flex">
                {countries.map((country) => (
                  <Link
                    href="/country/[code]"
                    as={`/country/${country.code}`}
                    key={country.code}
                  >
                    <a
                      href="#0"
                      title={country.title}
                      id={`link_${country.code}`}
                      className={`linkCountry active_${idCountry}`}
                    >
                      {/* backgroundimage: url(); */}
                      {/* <img src={country.img} /> */}
                      <span className="cy-link">{country.title}</span>
                    </a>
                  </Link>
                ))}
              </Col>
            </Row>
          </Container>
          <style type="text/css">
            {`
        .p-select {
            color: #1D2D49;
            line-height: 46px;
            margin: 0;
        }
                .box_linkC {
                    background: #cccccc;
                    padding: 10px 0px;
                    margin: 0 0 2em 0;
                }
                a.linkCountry{
                    font-size: 0;
                    width: 45px;
                    display: block;
                    height: 45px;
                    background-size: 100%;
                    margin: 0 5px;
                    border-radius: 50%;
                    border: 2px solid white;
                    transition: 0.2s;
                }
                a.linkCountry:hover{
                    font-size: 0;
                    width: 45px;
                    display: block;
                    height: 45px;
                    background-size: 100%;
                    margin: 0 5px;
                    border-radius: 50%;
                    transform: scale(1.1);
                }
                a#link_bh {
                    background-image: url(/img/home/bandera-belice-BN.png);
                }
                a#link_cr {
                    background-image: url(/img/home/bandera-costa_rica-BN.png);
                }
                a#link_su {
                    background-image: url(/img/home/bandera-el_salvador-BN.png);
                }
                a#link_gt {
                    background-image: url(/img/home/bandera-guatemala-BN.png);
                }
                a#link_ho {
                    background-image: url(/img/home/bandera-honduras-BN.png);
                }
                a#link_nu {
                    background-image: url(/img/home/bandera-nicaragua-BN.png);
                }
                a#link_pm {
                    background-image: url(/img/home/bandera-panama-BN.png);
                }
                a#link_dr {
                    background-image: url(/img/home/bandera-rep_dominicana-BN.png);
                }
                a#link_bh:hover, a#link_bh.active_bh {
                    background-image: url(/img/home/bandera-belice.png);
                }
                a#link_cr:hover, a#link_cr.active_cr {
                    background-image: url(/img/home/bandera-costa_rica.png);
                }
                a#link_es:hover, a#link_su.active_su {
                    background-image: url(/img/home/bandera-el_salvador.png);
                }
                a#link_gt:hover, a#link_gt.active_gt {
                    background-image: url(/img/home/bandera-guatemala.png);
                }
                a#link_ho:hover, a#link_ho.active_ho {
                    background-image: url(/img/home/bandera-honduras.png);
                }
                a#link_nu:hover, a#link_nu.active_nu {
                    background-image: url(/img/home/bandera-nicaragua.png);
                }
                a#link_pm:hover, a#link_pm.active_pm {
                    background-image: url(/img/home/bandera-panama.png);
                }
                a#link_dr:hover, a#link_dr.active_dr {
                    background-image: url(/img/home/bandera-rep_dominicana.png);
                }
            `}
          </style>
        </div>
      </>
    );
  }
}
