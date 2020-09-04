import Link from 'next/link';

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
        padding: 5px 10px;
        background-color: black;
        color: white;
      }
          
    `}

    </style>
  </thead>
);

const TableRows = ({ visualizations, indexes, data }) => (
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
          <Link href={`/admin/data/12/edit/${row.year}?variation=c`}>
            <a>Edit</a>
          </Link>
        </td>
      </tr>
    ))}
    <style jsx>
      {`
      td {
        padding: 5px 10px;
      }
          
    `}

    </style>
  </tbody>
);

const ManualDataTable = ({ visualizations, indexes, data }) => (
  <div>
    <table>
      <TableHeaders visualizations={visualizations} indexes={indexes} />
      <TableRows visualizations={visualizations} indexes={indexes} data={data} />
    </table>
  </div>
);

export default ManualDataTable;
