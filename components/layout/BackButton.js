import React from 'react';
import { useTranslation } from 'react-i18next';
import { Back } from './Icons';

export default (props) => {
  const [t] = useTranslation();
  return (
    <>
      <button
        type="button"
        className="btn btn-link"
        {...props}
      >
        <Back />
        {t('common:goBack')}
      </button>
      <style jsx>
        {`
            .btn {
                padding: 0
            }
        `}
      </style>
    </>
  );
};
