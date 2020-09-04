/* eslint-disable no-param-reassign */
const minYear = 2010;
const maxYear = new Date().getFullYear();

const handleOnChange = (setFormData, formData) => (e) => {
  formData[e.target.name] = parseFloat(e.target.value);
  setFormData(formData);
};

const YearHiddenInput = ({ year }) => (
  <div>
    <input name="year" type="hidden" value={year} />
  </div>
);

const YearSelect = ({
  excludeYears, setFormData, formData, year,
}) => {
  if (year) {
    return <YearHiddenInput year={year} />;
  }

  const options = [];
  for (let i = minYear; i <= maxYear; i++) {
    if (!excludeYears.includes(i)) {
      options.push(<option key={i} value={i}>{i}</option>);
      if (!formData.year) {
        formData.year = i;
      }
    }
  }

  setFormData(formData);

  return (
    <div>
      <label htmlFor="year">
        Year
        <select name="year" onChange={handleOnChange(setFormData, formData)}>
          {options}
        </select>
      </label>
    </div>
  );
};

const FormInput = ({
  name, label, value, disabled, setFormData, formData,
}) => (
  <div className="form-field">
    <label htmlFor={name}>
      {label}
      <input type="text" name={name} value={value} disabled={disabled} onChange={handleOnChange(setFormData, formData)} />
    </label>
  </div>
);

const onFieldGroupChecked = (setFormData, formData) => (e) => {
  const fieldGroup = e.target.parentNode.parentNode;
  const inputs = fieldGroup.querySelectorAll('.form-field input');

  inputs.forEach((input) => {
    input.disabled = !e.target.checked;
    if (e.target.checked) {
      formData[input.name] = input.value;
    } else {
      delete formData[input.name];
    }
  });
  setFormData(formData);
};

const FieldsGroup = ({
  groupName, children, setFormData, formData,
}) => (
  <div className={`field-group ${groupName}`}>
    <label htmlFor={groupName}>
      <input type="checkbox" name={groupName} value={groupName} onChange={onFieldGroupChecked(setFormData, formData)} />
      Include
      {' '}
      {groupName}
    </label>
    {children}
  </div>
);

const IndexInput = ({
  name, setFormData, formData,
}) => (
  <FormInput name={name.toLowerCase()} label={name.toUpperCase()} setFormData={setFormData} formData={formData} disabled />
);

const FieldGroupIndexes = ({
  index, indexes, setFormData, formData,
}) => {
  const adjusted = `${index}A`;

  return (
    <>
      {indexes.includes(index.toUpperCase()) && (
        <IndexInput name={index.toLowerCase()} setFormData={setFormData} formData={formData} />
      )}
      {indexes.includes(adjusted.toUpperCase()) && (
        <FormInput name={adjusted.toLowerCase()} setFormData={setFormData} formData={formData} />
      )}
    </>
  );
};

const ManualDataForm = ({
  variation, visualizations, indexes, data, onSubmit, setFormData, formData, year,
}) => (
  <div>
    <form method="post" onSubmit={onSubmit}>
      <input type="hidden" name="variation" value={variation} />
      <YearSelect excludeYears={data.map((row) => parseInt(row.year, 10))} setFormData={setFormData} formData={formData} year={year} />
      {visualizations.includes('total') && (
      <FormInput name="total" label="Total" setFormData={setFormData} formData={formData} />
      )}
      {visualizations.includes('sex') && (
      <FieldsGroup groupName="sex" setFormData={setFormData} formData={formData}>
        <FormInput name="male" label="Male" setFormData={setFormData} formData={formData} disabled={!year} />
        <FormInput name="female" label="Female" setFormData={setFormData} formData={formData} disabled={!year} />
        <FieldGroupIndexes index="GPI" indexes={indexes} setFormData={setFormData} formData={formData} />
      </FieldsGroup>
      )}
      {visualizations.includes('location') && (
      <FieldsGroup groupName="location" setFormData={setFormData} formData={formData}>
        <FormInput name="rural" label="Rural" setFormData={setFormData} formData={formData} disabled />
        <FormInput name="urban" label="Urban" setFormData={setFormData} formData={formData} disabled />
        <FieldGroupIndexes index="GLPI" indexes={indexes} setFormData={setFormData} formData={formData} />
      </FieldsGroup>
      )}
      {visualizations.includes('wealth-quintile') && (
      <FieldsGroup groupName="wealth-quintile" setFormData={setFormData} formData={formData}>
        <FormInput name="q1" label="Q1" setFormData={setFormData} formData={formData} disabled />
        <FormInput name="q2" label="Q2" setFormData={setFormData} formData={formData} disabled />
        <FormInput name="q3" label="Q3" setFormData={setFormData} formData={formData} disabled />
        <FormInput name="q4" label="Q4" setFormData={setFormData} formData={formData} disabled />
        <FormInput name="q5" label="Q5" setFormData={setFormData} formData={formData} disabled />
        <FieldGroupIndexes index="SESPI" indexes={indexes} setFormData={setFormData} formData={formData} />
      </FieldsGroup>
      )}
      <button type="submit">Save</button>
    </form>
  </div>
);

export default ManualDataForm;
