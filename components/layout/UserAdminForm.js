/* eslint-disable no-param-reassign */
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import { withTranslation } from '../../i18n';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { Button } from './Button';

const UserAdminForm = ({
  t, countries, user, onSubmit, onCancel, editing = false,
}) => {
  const defaultValues = user || {};

  if (!editing) {
    defaultValues.country = countries[0].code.toUpperCase();
    defaultValues.role = 'admin';
  }

  const { handleSubmit, register, errors } = useForm({
    defaultValues,
  });

  const btnLabelAction = user ? 'edit' : 'add';
  const btnLabel = `${t(btnLabelAction)} ${t('user')}  +`;

  const countryOptions = Array.from(
    countries.map((option) => {
      const code = option.code.toUpperCase();
      return {
        value: code,
        label: t(`countries:countries.${option.code}`),
      };
    }),
  );

  const roleOptions = [
    {
      value: 'admin',
      label: t('roleAdmin'),
    },
    {
      value: 'country-admin',
      label: t('roleCountryAdmin'),
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Row className=" mt-2 mb-2">
        <FormSelect
          label={`${t('country')} :`}
          name="country"
          options={countryOptions}
          ref={register({
            required: t('fieldRequiredMessage'),
          })}
          required
          errors={errors}
        />
      </Row>

      <Row className=" mt-2 mb-2">
        <FormInput
          name="first_name"
          label={`${t('firstName')} :`}
          ref={register({
            required: t('fieldRequiredMessage'),
          })}
          errors={errors}
          required
        />
      </Row>
      <Row className=" mt-2 mb-2">
        <FormInput
          name="last_name"
          label={`${t('lastName')} :`}
          ref={register({
            required: t('fieldRequiredMessage'),
          })}
          errors={errors}
          required
        />
      </Row>

      <Row className=" mt-2 mb-2">
        <FormInput
          name="email"
          label="Email:"
          type="email"
          ref={register({
            required: t('fieldRequiredMessage'),
          })}
          errors={errors}
          required
        />
      </Row>

      <Row hidden={editing} className=" mt-2 mb-2">
        <FormInput
          name="password"
          type="password"
          label={`${t('password')} :`}
          ref={register({
            required: t('fieldRequiredMessage'),
          })}
          errors={errors}
          required
          show={!editing}
        />
      </Row>

      <Row className=" mt-2 mb-2">
        <FormSelect
          label={`${t('role')} :`}
          name="role"
          options={roleOptions}
          ref={register({
            required: t('fieldRequiredMessage'),
          })}
        />
      </Row>
      <Row className="mt-4">
        <Col
          xs={12}
          sm={{
            span: 10,
            offset: 1,
          }}
          lg={{
            span: 8,
            offset: 2,
          }}
        >
          <Row>
            <Button
              type="submit"
              className="btn-add-data col-12 col-sm-7 mx-sm-1 mb-2 mb-sm-0"
              color="blue"
            >
              {t(btnLabel)}
            </Button>
            <Button
              outline
              type="button"
              className="col-12 col-sm-4 mx-sm-1"
              color="blue"
              onClick={onCancel}
            >
              {t('cancel')}
            </Button>
          </Row>
        </Col>
      </Row>
    </form>
  );
};

UserAdminForm.defaultProps = {
  i18nNamespaces: ['common', 'countries'],
};

export default withTranslation(['common', 'countries'])(UserAdminForm);
