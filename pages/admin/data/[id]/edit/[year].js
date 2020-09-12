import { useState } from 'react';
import { useRouter } from 'next/router';
import { withTranslation } from '../../../../../i18n';
import AdminMenu from '../../../../../components/admin/AdminMenu';
import ManualDataForm from '../../../../../components/admin/data/ManualDataForm';
import needsAuth from '../../../../../lib/needsAuth';

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const AdminDataEdit = ({
  id, user, visualizations, indexes, data, variation, year,
}) => {
  const variationQueryParam = variation ? `variation=${variation}` : '';
  const postUrl = `/api/indicators/${id}/manual-data/edit`;
  const redirectUrl = `/admin/data/${id}?${variationQueryParam}`;

  const router = useRouter();
  const [formData, setFormData] = useState({});
  formData.country = user.country;
  formData.variation = variation;

  const handleSubmit = preventDefault(() => {
    fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) router.push(redirectUrl);
    });
  });

  return (
    <div>
      <AdminMenu user={user} />
      <ManualDataForm
        variation={variation}
        visualizations={visualizations}
        indexes={indexes}
        data={data}
        onSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        year={year}
      />
    </div>
  );
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
  const { year } = query;
  const [id, variation] = query.id.split('-');

  const variationUrl = (variation) ? `variation=${variation}` : '';
  const url = `${process.env.API_URL}/api/indicators/${id}/manual-data?country=${user.country}&${variationUrl}`;

  const res = await fetch(url);
  const indicator = await res.json();

  return ({
    props: {
      namespacesRequired: ['common'],
      user,
      visualizations: indicator.visualizations,
      indexes: indicator.indexes,
      data: indicator.data.filter((row) => row.year === year),
      variation,
      id,
      year,
    },
  });
});

export default withTranslation('common')(AdminDataEdit);
