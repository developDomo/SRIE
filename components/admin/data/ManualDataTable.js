import Link from 'next/link';
import { useRouter } from 'next/router';
import { Table } from 'react-bootstrap';
import { blue } from '../../../theme/colors';
import { Edit } from '../../layout/Icons';
import { withTranslation, useTranslation } from '../../../i18n';

const TableHeaders = ({ visualizations, indexes }) => {
  const [t] = useTranslation('common');
  return (
    <thead>
      <tr>
        <th>{t('year')}</th>
        {visualizations.includes('total') && <th>Total</th>}
        {visualizations.includes('sex') && (
        <>
          <th>{t('male')}</th>
          <th>{t('female')}</th>
        </>
        )}
        {visualizations.includes('location') && (
        <>
          <th>{t('rural')}</th>
          <th>{t('urban')}</th>
        </>
        )}
        {visualizations.includes('wealth-quintile') && (
        <>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
          <th>Q4</th>
          <th>Q5</th>
        </>
        )}
        {indexes.map((index) => (
          <>
            <th key={index}>{index}</th>
          </>
        ))}
        <th>{t('actions')}</th>
      </tr>
      <style jsx>
        {`
      th {
        background-color: ${blue};
        color: white;
        text-align: center;
        vertical-align: center;
        line-height: 2em;
      }   
    `}
      </style>
    </thead>
  );
};

const TableRows = (props) => {
  const { visualizations, indexes, data } = props;
  const router = useRouter();

  const { id } = router.query;
  const fix = (i) => i && parseInt(i, 10).toFixed(2);
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.year}>
          <td>{row.year}</td>
          {visualizations.includes('total') && <td>{fix(row.total)}</td>}
          {visualizations.includes('sex') && (
          <>
            <td>{fix(row.male)}</td>
            <td>{fix(row.female)}</td>
          </>
          )}
          {visualizations.includes('location') && (
          <>
            <td>{fix(row.rural)}</td>
            <td>{fix(row.urban)}</td>
          </>
          )}
          {visualizations.includes('wealth-quintile') && (
          <>
            <td>{fix(row.q1)}</td>
            <td>{fix(row.q2)}</td>
            <td>{fix(row.q3)}</td>
            <td>{fix(row.q4)}</td>
            <td>{fix(row.q5)}</td>
          </>
          )}
          {indexes.map((index) => (
            <td>{row[index.toLowerCase()]}</td>
          ))}
          <td>
            <Link href={`/admin/data/${id}/edit/${row.year}`}>
              <a className="btn btn-light">
                <Edit />
              </a>
            </Link>
          </td>
        </tr>
      ))}
      <style jsx>
        {`
      td {
        text-align: center;
        padding: 5px 10px;
        line-height: 2em;

      }
    `}
      </style>
    </tbody>
  );
};

const ManualDataTable = (props) => {
  const [t] = useTranslation('common');

  const {
    visualizations, indexes, data,
  } = props;

  const TableBody = () => {
    if (!visualizations || !indexes) {
      return (
        <tr>
          <td>{t('noData')}</td>
        </tr>
      );
    }
    return (
      <>
        <TableHeaders visualizations={visualizations} indexes={indexes} />
        <TableRows visualizations={visualizations} indexes={indexes} data={data} />
      </>
    );
  };

  return (
    <div>
      <Table responsive="lg" {...props}>
        <TableBody />
      </Table>
    </div>
  );
};

export default ManualDataTable;
