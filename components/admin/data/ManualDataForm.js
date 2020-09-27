/* eslint-disable no-param-reassign */
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import {
  Col, Container, Form, Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import sum from 'lodash/sum';
import {
  blue, blue1, blue4, borders, gray1, gray2, green, green2, txt, white,
} from '../../../theme/colors';
import { grayBck } from '../../../styles/colors';
import { Button } from '../../layout/Button';
import { withTranslation } from '../../../i18n';
import needsAuth from '../../../lib/needsAuth';
import FetchUtils from '../../../utils/Fetch.utils';
import FormInput from '../../layout/FormInput';

const minYear = 2010;
const maxYear = new Date().getFullYear();

const handleOnChange = (setFormData, formData) => (e) => {
  formData[e.target.name] = parseFloat(e.target.value);
  setFormData(formData);
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

  const index = Math.round((numerator / denominator) * 100000) / 100000;
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
    excludeYears, setFormData, formData, year, label, sm,
  } = props;
  if (year) {
    return <input ref={ref} name="year" type="hidden" value={year} />;
  }

  const options = [];
  for (let i = minYear; i <= maxYear; i++) {
    const isDisabled = excludeYears.includes(i);
    options.push(<option disabled={isDisabled} key={i} value={i}>{i}</option>);
    if (!formData.year) {
      formData.year = i;
    }
  }

  setFormData(formData);

  return (
    <Col sm={sm} className="form-group">
      <label className="form-label mr-2">
        {label}
      </label>
      <select ref={ref} className="form-control" name="year" onChange={handleOnChange(setFormData, formData)}>
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


const CustomCheckbox = (props) => {
  const { name } = props;
  return (
    <>
      <label className="label">
        <input {...props} type="checkbox" />
        <span className="checkmark" />
        {`Include ${name}`}
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
};

const FieldsGroup = ({
  visible, groupName, children, setFormData, formData, expanded,
}) => {
  const [fieldsVisible, setFieldsVisible] = useState(expanded);
  const toggleFields = () => setFieldsVisible(!fieldsVisible);
  const onFieldGroupChecked = () => (e) => {
    toggleFields();
    setFormData(formData);
  };
  return visible && (
  <Row className={`field-group ${groupName} mt-2 pt-3 mb-2`}>
    <Col sm={12}>
      <CustomCheckbox checked={fieldsVisible} className="mr-2" name={groupName} value={groupName} onChange={onFieldGroupChecked(setFormData, formData)} />
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
};

const IndexInput = ({
  name, setFormData, formData,
}) => (
  <FormInput name={name.toLowerCase()} label={name.toUpperCase()} setFormData={setFormData} formData={formData} />
);

const FieldGroupIndexes = ({
  index, indexes, setFormData, formData, errors,
}) => {
  const adjusted = `${index}A`;

  return (
    <>
      {indexes.includes(index.toUpperCase()) && (
        <IndexInput name={index.toLowerCase()} setFormData={setFormData} formData={formData} errors={errors} />
      )}
      {indexes.includes(adjusted.toUpperCase()) && (
        <FormInput className="border-right" name={adjusted.toLowerCase()} setFormData={setFormData} formData={formData} errors={errors} />
      )}
    </>
  );
};

const ManualDataForm = ({
  t, variation, visualizations, indexes, data, onSubmit, setFormData, formData, year,
}) => {
  const [defaultData] = data ?? [{}];
  const defaultValues = { ...defaultData, ...formData, ...year };

  const { handleSubmit, register, errors } = useForm({
    defaultValues,
  });

  const parseSeparator = (val) => val.replace(',', '.');

  const totalIsGreater = (total, ...fields) => {
    const fieldsTotal = sum(fields.map((f) => Math.fround(f)));
    return (Math.fround(fieldsTotal) < Math.fround(total));
  };

  return (
    <form method="post" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="variation" value={variation} />
      <Row className="mb-2">
        <YearSelect
          sm={4}
          label={t('year')}
          excludeYears={data.map((row) => parseInt(row.year, 10))}
          setFormData={setFormData}
          formData={formData}
          year={year}
          ref={register({
            required: true,
          })}
        />
      </Row>

      <Row className=" mt-2 mb-2" hidden={!visualizations.includes('total')}>
        <FormInput
          sm={4}
          name="total"
          label="Total"
          onChange={handleOnChange(setFormData, formData)}
          ref={register({
            required: true,
            validate: (value) => parseSeparator(value) <= 100 || 'Dato ingresado no puede ser mayor a 100. Use "coma" (,) como separador',
          })}
          errors={errors}
        />
      </Row>

      <FieldsGroup
        visible={visualizations.includes('sex')}
        expanded={defaultValues.female || defaultValues.male}
        groupName="sex"
        setFormData={setFormData}
        formData={formData}
      >
        <FormInput
          name="male"
          label="Masculino"
          onChange={handleOnChange(setFormData, formData)}

          disabled={!year}
          ref={register({
            validate: (value) => totalIsGreater(defaultValues.total, parseSeparator(value), defaultValues.female) || 'Datos no pueden sobrepasar el 100%',
          })}
          errors={errors}
          onBlur={calculateGpi}

        />
        <FormInput
          name="female"
          label="Femenino"
          onChange={handleOnChange(setFormData, formData)}

          disabled={!year}
          ref={register({
            validate: (value) => totalIsGreater(defaultValues.total, parseSeparator(value), defaultValues.female) || 'Datos no pueden sobrepasar el 100%',
          })}
          errors={errors}
          onBlur={calculateGpi}

        />
        <FieldGroupIndexes index="GPI" indexes={indexes} setFormData={setFormData} formData={formData} />
      </FieldsGroup>

      <FieldsGroup
        visible={visualizations.includes('location')}
        expanded={defaultValues.urban || defaultValues.rural}
        groupName="location"
        onChange={handleOnChange(setFormData, formData)}
      >
        <FormInput
          name="rural"
          label="Rural"
          onChange={handleOnChange(setFormData, formData)}
          disabled
          ref={register({
            validate: (value) => totalIsGreater(defaultValues.total, parseSeparator(value), defaultValues.urban) || 'Datos no pueden sobrepasar el 100%',
          })}

          errors={errors}
          onBlur={calculateGlpi}
        />
        <FormInput
          name="urban"
          label="Urban"
          onChange={handleOnChange(setFormData, formData)}
          disabled
          ref={register({
            validate: (value) => totalIsGreater(defaultValues.total, parseSeparator(value), defaultValues.rural) || 'Datos no pueden sobrepasar el 100%',
          })}

          errors={errors}
          onBlur={calculateGlpi}
        />
        <FieldGroupIndexes index="GLPI" indexes={indexes} setFormData={setFormData} formData={formData} />
      </FieldsGroup>

      <FieldsGroup
        visible={visualizations.includes('wealth-quintile')}
        expanded={defaultValues.q1 || defaultValues.q2 || defaultValues.q3 || defaultValues.q4 || defaultValues.q5}
        groupName="wealth-quintile"
        setFormData={setFormData}
        formData={formData}
        onBlur={calculateSespi}
      >
        <FormInput
          name="q1"
          label="Q1"
          onChange={handleOnChange(setFormData, formData)}
          disabled
        />
        <FormInput
          name="q2"
          label="Q2"
          onChange={handleOnChange(setFormData, formData)}
          disabled
        />
        <FormInput
          name="q3"
          label="Q3"
          onChange={handleOnChange(setFormData, formData)}
          disabled
        />
        <FormInput
          name="q4"
          label="Q4"
          onChange={handleOnChange(setFormData, formData)}
          disabled
        />
        <FormInput
          name="q5"
          label="Q5"
          onChange={handleOnChange(setFormData, formData)}
          disabled
          onBlur={calculateSespi}
        />
        <FieldGroupIndexes
          index="SESPI"
          indexes={indexes}
          onChange={handleOnChange(setFormData, formData)}
        />
      </FieldsGroup>
      <Row className="mt-4">
        <Col sm={{
          span: 4,
          offset: 4,
        }}
        >
          <Button type="submit" className="btn-add-data" color="blue">
            <a>
              {t('save')}
              {' '}
              &#43;
            </a>
          </Button>
        </Col>
      </Row>
    </form>
  );
};

ManualDataForm.getInitialProps = async () => ({
  namespacesRequired: ['common', 'indicators'],
});

export default withTranslation('common')(ManualDataForm);
