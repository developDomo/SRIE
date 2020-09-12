import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminMenu from '../../../../components/admin/AdminMenu';
import ManualDataForm from '../../../../components/admin/data/ManualDataForm';
import { withTranslation } from '../../../../i18n';
import needsAuth from '../../../../lib/needsAuth';

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};

const AdminDataNewForm = ({
  id, user, visualizations, indexes, data, variation, code,
}) => {
  const postUrl = `/api/indicators/${id}/manual-data`;
  const redirectUrl = `/admin/data/${code}`;

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
      />
    </div>
  );
};

export const getServerSideProps = needsAuth(async ({ user, query }) => {
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
      data: indicator.data,
      variation: variation || null,
      id,
      code: query.id,
    },
  });
});

export default withTranslation('common')(AdminDataNewForm);
