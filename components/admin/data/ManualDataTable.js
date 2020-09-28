import Link from 'next/link';
import { useRouter } from 'next/router';
import { Table } from 'react-bootstrap';
import { blue } from '../../../theme/colors';

const TableHeaders = ({ visualizations, indexes }) => (
  <thead>
    <tr>
      <th>Year</th>
      {visualizations.includes('total') && <th>Total</th>}
      {visualizations.includes('sex') && (
        <>
          <th>Masculino</th>
          <th>Femenino</th>
        </>
      )}
      {visualizations.includes('location') && (
        <>
          <th>Rural</th>
          <th>Urbano</th>
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
          <th>{index}</th>
        </>
      ))}
      <th>Actions</th>
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

const TableRows = (props) => {
  const { visualizations, indexes, data } = props;
  const router = useRouter();

  const { id } = router.query;
  return (
    <tbody>
      {data.map((row) => (
        <tr>
          <td>{row.year}</td>
          {visualizations.includes('total') && <td>{row.total}</td>}
          {visualizations.includes('sex') && (
          <>
            <td>{row.male}</td>
            <td>{row.female}</td>
          </>
          )}
          {visualizations.includes('location') && (
          <>
            <td>{row.rural}</td>
            <td>{row.urban}</td>
          </>
          )}
          {visualizations.includes('wealth-quintile') && (
          <>
            <td>{row.q1}</td>
            <td>{row.q2}</td>
            <td>{row.q3}</td>
            <td>{row.q4}</td>
            <td>{row.q5}</td>
          </>
          )}
          {indexes.map((index) => (
            <td>{row[index.toLowerCase()]}</td>
          ))}
          <td>
            <Link href={`/admin/data/${id}/edit/${row.year}`} replace>
              <a>Edit</a>
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
  const { visualizations, indexes, data } = props;

  return (
    <Table responsive="lg" {...props}>
      <TableHeaders visualizations={visualizations} indexes={indexes} />
      <TableRows visualizations={visualizations} indexes={indexes} data={data} />
    </Table>
  );
};

export default ManualDataTable;
