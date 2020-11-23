import React from 'react';
import { useTranslation } from '../../i18n';
import { Back } from './Icons';

const BackButton = (props) => {
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

export default BackButton;
