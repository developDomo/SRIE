import Link from 'next/link';
import { withTranslation } from '../../../../i18n';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataTable from '../../../../components/admin/data/ManualDataTable';
import needsAuth from '../../../../lib/needsAuth';


const AdminDataDetails = ({
  user, id, visualizations, indexes, data, addDataUrl,
}) => (
  <div>
    <AdminMenu user={user} />
    <h2>
      Indicator data for
      {' '}
      {id}
    </h2>
    <ManualDataTable visualizations={visualizations} indexes={indexes} data={data} />
    <Link href={addDataUrl}>
      <a>Add Data</a>
    </Link>
  </div>
);

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const { id, variation } = query;

  const variationUrl = (variation) ? `variation=${variation}` : '';
  const url = `${process.env.API_URL}/api/indicators/${id}/manual-data?country=${user.country}&${variationUrl}`;

  const res = await fetch(url);
  const indicator = await res.json();

  return {
    props: {
      namespacesRequired: ['common'],
      user,
      id,
      visualizations: indicator.visualizations,
      indexes: indicator.indexes,
      data: indicator.data,
      variation,
      addDataUrl: `/admin/data/${id}/add?${variationUrl}`,
    },
  };
});

export default withTranslation('common')(AdminDataDetails);
