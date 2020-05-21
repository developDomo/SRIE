import { Row,Col } from "react-bootstrap";

export default class BannerOds extends React.Component {
    render() {
    
    return(
    <Row className="BannerOds container-fluid">
        <Row className="align-items-center">
            <Col xs={12} sm={6} >
                <h3>Esta es una plataforma de monitoreo de cumplimiento del Objetivo de Desarrollo Sostenible 4</h3>
            </Col>
            <Col xs={8} sm={4} >
                <Row className="d-flex">
                    <Col className="px-1 col-2 pr-xs-2"><p className="txt-nun">4</p>
                    </Col>
                    <Row className="px-3 col-10 d-flex align-items-center txt-descrip"><p>Educación <br/> de calidad</p></Row>
                </Row>
            </Col>
            <Col xs={4} sm={2} >
                <img src="/img/home/ico-libro-banner-ODS4.svg" className="img-fluid" alt="ODS4"/>
            </Col>
        </Row>

        <style type="text/css">{`
            
            .BannerOds {
                background-image: url(/img/home/bannerODS4.jpg);
                background-size: cover;
                color: white;
                margin: 2em 0;
                padding: 15px;
            }
            h3 {
                font-size: 1.4em;
            }
            .txt-nun{
                font-size: 4em;
            }
            p{
                margin-bottom: 0;
            }
            .txt-descrip p{
                font-size: 1.8em;
                line-height: 32px;
                text-transform: uppercase;
            }
        `}</style>
    </Row>
    )}
}



