import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { withTranslation } from '../../../i18n';
import Title from '../../layout/Title';
import EventsAdminList from '../../layout/EventsAdminList';
import {
  blue, gray1,
} from '../../../theme/colors';
import { grayBck, orange, orangeLink } from '../../../styles/colors';

const AdminDashboard = (props) => {
  const { t, events } = props;
  const {
    isLoading, handlePagination, page, totalPages,
  } = props;
  return (
    <Container fluid>
      <Container className="pt-4 pb-4">
        <Row className="mt-4 mb-4">
          <div className="col-lg-12 pr-0 text-center">
            <Title color="blueTitle" type="title">
              {t('Dashboard')}
            </Title>
          </div>
        </Row>
        <Row>
          <Col md={{
            span: 10,
            offset: 1,
          }}
          >
            <Title color="txt" type="caption">{t('systemLogbook')}</Title>
            <EventsAdminList events={events} loading={isLoading} />

          </Col>
          <div
            className="pagination-container col-md-10 offset-1"
          >
            <ReactPaginate
              previousLabel="&laquo;"
              nextLabel="&raquo;"
              breakLabel="..."
              breakClassName="break-me"
              activeClassName="active"
              containerClassName="pagination justify-content-center mb-0"
              subContainerClassName="pages pagination"
              pageLinkClassName="page-link"
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              initialPage={page - 1}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePagination}
            />
          </div>
        </Row>

      </Container>
      <style>
        {`
            .pagination-container {
                background-color: ${gray1};
            }
            .page-link{
                background-color: transparent;
                border:0;
                color: ${blue} !important;
            }
            .page-item:hover .page-link{
                background-color: transparent;
                border-bottom: ${orange} solid 1px;
                padding-bottom: 0;
                margin-bottom:.5rem;
            }
            .page-item.active .page-link{
                background-color: transparent;
                border-bottom: ${orangeLink} solid 1px;
                padding-bottom: 0;
                margin-bottom:.5rem;
            }
            .page-item.disabled .page-link{
                background-color: transparent;
                color: ${grayBck} !important;
            }
            .page-item:hover.disabled .page-link{
                border-bottom: 0;
            }
        `}
      </style>
    </Container>
  );
};

AdminDashboard.defaultProps = {
  i18nNamespaces: ['common'],
};

export default withTranslation('common')(AdminDashboard);
