/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
  blue, blue1, gray1, txt, white,
} from '../../../theme/colors';
import { grayBck } from '../../../styles/colors';
import { Button } from '../../layout/Button';
import { withTranslation, useTranslation } from '../../../i18n';
import FormInput from '../../layout/FormInput';

const minYear = 2010;
const maxYear = new Date().getFullYear();

const parseSeparator = (value, locales = navigator.languages) => {
  const localeFormat = Intl.NumberFormat(locales).format('1.1');
  const cleanPattern = new RegExp(`[^-+0-9${localeFormat.charAt(1)}]`, 'g');
  const normalized = value.replace(cleanPattern, '.');

  return parseFloat(normalized);
};

const calculateIndex = (numeratorInputName, denominatorInputName, resultInputName) => {
  const numerator = document.getElementsByName(numeratorInputName)[0]?.value;
  if (!numerator) {
    return;
  }

  const denominator = document.getElementsByName(denominatorInputName)[0]?.value;
  if (!denominator) {
    return;
  }

  const resultInput = document.getElementsByName(resultInputName)[0];
  if (!resultInput) {
    return;
  }

  const index = Math.round((parseSeparator(numerator) / parseSeparator(denominator)) * 100000) / 100000;
  resultInput.value = index;
};

const calculateGpi = () => {
  calculateIndex('female', 'male', 'gpi');
};

const calculateGlpi = () => {
  calculateIndex('rural', 'urban', 'glpi');
};

const calculateSespi = () => {
  calculateIndex('q1', 'q5', 'sespi');
};

const YearSelect = React.forwardRef((props, ref) => {
  const {
    excludeYears, year, label, sm, required,
  } = props;


  const options = [];
  for (let i = minYear; i <= maxYear; i++) {
    const isDisabled = excludeYears.includes(i);
    options.push(<option disabled={isDisabled} key={i} value={i}>{i}</option>);
  }

  return (
    <Col sm={sm} className="form-group">
      <label className="form-label mr-2">
        {label}
        {required
          && <span className="text-danger"> * </span>}
      </label>

      <select ref={ref} disabled={year} className="form-control" name="year">
        {options}
      </select>

      <style jsx>
        {`
            .form-control {
                position: relative;
                box-sizing: border-box;
                border-color: ${blue1};
                background-color: ${white};
                border-radius: 0;
            }
            .form-control:focus {
              z-index: 2;
            }
             .form-control:disabled {
              background-color: ${gray1};
              cursor: not-allowed;
            }
            .form-label{
                font-size: 1.2em;
                font-weight: bold;
                font-family: "Roboto Slab", sans-serif;  
                color: ${txt} 
            }

        `}

      </style>
    </Col>
  );
});

const CustomCheckbox = React.forwardRef((props, ref) => {
  const { name } = props;
  const [t] = useTranslation('common');
  return (
    <>
      <label className="label">
        <input {...props} type="checkbox" />
        <span className="checkmark" />
        {`${t(`include${name}`)}`}
      </label>
      <style jsx>
        {`
        .label {
          position: relative;
          padding-left: 35px;
          margin-bottom: 12px;
          cursor: pointer;
          font-size: 1.2em ;
          user-select: none;
          color: ${txt}
        }

        .label input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 25px;
          width: 25px;
          background-color: ${gray1};
          border: ${blue} solid 1px;
          margin-top:0.12em;
        }

        .label:hover input ~ .checkmark {
          background-color: ${grayBck};
        }

        .label input:checked ~ .checkmark {
          background-color: ${blue};
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .label input:checked ~ .checkmark:after {
          display: block;
        }

        .label .checkmark:after {
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }`}
      </style>
    </>
  );
});
const FieldsGroup = React.forwardRef(({
  visible, groupName, children, expanded, onExpandedChange,
}, ref) => {
  const [fieldsVisible, setFieldsVisible] = useState(expanded);
  const toggleFields = () => setFieldsVisible(!fieldsVisible);
  const handleExpandChange = (isGroupExpanded) => {
    onExpandedChange(
      {
        [groupName]: Boolean(isGroupExpanded),
      },
    );
  };

  useEffect(() => {
    handleExpandChange(fieldsVisible);
  }, [fieldsVisible, expanded]);

  return (
    <Row hidden={!visible} className={`field-group ${groupName} mt-2 pt-3 mb-2`}>
      <Col sm={12}>
        <CustomCheckbox
          ref={ref}
          defaultChecked={fieldsVisible}
          className="mr-2"
          name={groupName}
          defaultValue={groupName}
          onChange={toggleFields}
        />
      </Col>
      {fieldsVisible && children}
      <style>
        {`
        .field-group{
          background-color: ${gray1};
        } 
        .field-group .col:last-child{         
          border-left: 1px solid ${txt};
        }
      `}
      </style>
    </Row>

  );
});

const IndexInput = React.forwardRef((props, ref) => {
  const {
    name, errors,
  } = props;
  return (
    <FormInput {...props} name={name.toLowerCase()} label={name.toUpperCase()} ref={ref} errors={errors} />
  );
});

const FieldGroupIndexes = React.forwardRef((props, ref) => {
  const {
    index, indexes, errors,
  } = props;
  const name = index.toLowerCase();
  const adjustedName = `${name}a`;
  const errorMessage = errors && errors[name] && errors[name]?.message;
  return (
    <>
      {indexes.includes(index.toUpperCase()) && (
        <IndexInput
          {...props}
          className={`border-right ${errorMessage && 'is-invalid'}`}
          name={index.toLowerCase()}
          ref={ref}
          errors={errors}
        />
      )}
      {indexes.includes(adjustedName.toUpperCase()) && (
        <FormInput
          {...props}
          className={`border-right ${errorMessage && 'is-invalid'}`}
          name={adjustedName}
          ref={ref}
          errors={errors}
        />
      )}
    </>
  );
});

const ManualDataForm = ({
  t, variation, visualizations, indexes, data, onSubmit, onCancel, year, edit,
}) => {
  const [defaultData] = edit ? data.filter((row) => row.year === year) : [{}];
  const defaultValues = { ...defaultData, ...year };

  const [expandedGroups, setExpandedGroups] = useState([]);


  const {
    handleSubmit, register, formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  const handleExpandedGroups = (groups) => {
    const g = Object.assign(expandedGroups, groups);
    setExpandedGroups(g);
  };

  const validateMaxPercentage = (fieldValue) => parseSeparator(fieldValue) <= 100 || t('dataShouldNotSurpass');
  const validateTotal = (value) => parseSeparator(value) <= 100 || t('dataShouldNotBeGreater');
  const validatePresence = (field, message) => ({ value: expandedGroups[field], message });
  const validate = {
    positiveNumber: (value) => parseSeparator(value) > 0 || t('invalidFormat'),
  };
  const btnLabelAction = defaultValues.total ? 'edit' : 'add';
  const btnLabel = `${t(btnLabelAction)} ${t('data')}  +`;

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="variation" value={variation || ''} />
      <Row className="mb-2">
        {year ? (
          <FormInput
            sm={4}
            name="year"
            label="Year"
            ref={register}
            disabled
            value={year}
          />
        ) : (

          <YearSelect
            sm={4}
            name="year"
            label={t('year')}
            excludeYears={data.map((row) => parseInt(row.year, 10))}
            year={year}
            ref={register({
              required: t('fieldRequiredMessage'),
            })}
            required
          />
        ) }

      </Row>

      <Row className=" mt-2 mb-2" hidden={!visualizations.includes('total')}>
        <FormInput
          sm={4}
          name="total"
          label="Total"
          ref={register({
            required: t('fieldRequiredMessage'),
            validate: validateTotal,
          })}
          required
          errors={errors}
        />
      </Row>

      <FieldsGroup
        visible={visualizations.includes('sex')}
        expanded={defaultValues.female || defaultValues.male}
        groupName="sex"
        onExpandedChange={(groupStatus) => handleExpandedGroups(groupStatus)}
      >
        <FormInput
          name="male"
          label={t('male')}
          ref={register({
            required: validatePresence('sex', t('fieldRequiredMessage')),
            validate: validateMaxPercentage,

          })}
          errors={errors}
          onBlur={calculateGpi}
        />
        <FormInput
          name="female"
          label={t('female')}
          ref={register({
            required: validatePresence('sex', t('fieldRequiredMessage')),
            validate: validateMaxPercentage,

          })}
          errors={errors}
          onBlur={calculateGpi}
        />
        <FieldGroupIndexes
          index="GPI"
          indexes={indexes}
          ref={register({
            required: validatePresence('sex', t('fieldRequiredMessage')),
            validate,
          })}
          errors={errors}
        />
      </FieldsGroup>

      <FieldsGroup
        visible={visualizations.includes('location')}
        expanded={defaultValues.urban || defaultValues.rural}
        groupName="location"
        onExpandedChange={(groupStatus) => handleExpandedGroups(groupStatus)}
      >
        <FormInput
          name="rural"
          label={t('rural')}
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('location', t('fieldRequiredMessage')),
          })}
          errors={errors}
          onBlur={calculateGlpi}
        />
        <FormInput
          name="urban"
          label={t('urban')}
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('location', t('fieldRequiredMessage')),
          })}
          errors={errors}
          onBlur={calculateGlpi}
        />
        <FieldGroupIndexes
          index="GLPI"
          indexes={indexes}
          ref={register({
            required: validatePresence('location', t('fieldRequiredMessage')),
            validate,
          })}
          errors={errors}

        />
      </FieldsGroup>

      <FieldsGroup
        visible={visualizations.includes('wealth-quintile')}
        expanded={defaultValues.q1 || defaultValues.q2 || defaultValues.q3 || defaultValues.q4 || defaultValues.q5}
        groupName="wealth-quintile"
        onBlur={calculateSespi}
        onExpandedChange={(groupStatus) => handleExpandedGroups(groupStatus)}
      >
        <FormInput
          name="q1"
          label="Q1"
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('wealth-quintile', t('fieldRequiredMessage')),
          })}
          errors={errors}
        />
        <FormInput
          name="q2"
          label="Q2"
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('wealth-quintile', t('fieldRequiredMessage')),
          })}
          errors={errors}
        />
        <FormInput
          name="q3"
          label="Q3"
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('wealth-quintile', t('fieldRequiredMessage')),
          })}
          errors={errors}
        />
        <FormInput
          name="q4"
          label="Q4"
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('wealth-quintile', t('fieldRequiredMessage')),
          })}
          errors={errors}
        />
        <FormInput
          name="q5"
          label="Q5"
          errors={errors}
          ref={register({
            validate: validateMaxPercentage,
            required: validatePresence('wealth-quintile', t('fieldRequiredMessage')),
          })}
          onBlur={calculateSespi}
        />
        <FieldGroupIndexes
          index="SESPI"
          indexes={indexes}
          errors={errors}
          ref={register({
            required: validatePresence('wealth-quintile', t('fieldRequiredMessage')),
            validate,
          })}
        />
      </FieldsGroup>
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

ManualDataForm.defaultProps = {
  i18nNamespaces: ['common', 'indicators'],
};

export default withTranslation('common')(ManualDataForm);
