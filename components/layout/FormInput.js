import React from 'react';
import { Col } from 'react-bootstrap';
import { blue1, white } from '../../theme/colors';

export default React.forwardRef((props, ref) => {
  const {
    name, label, value, errors, sm, onChange, onBlur, type, required, show = true,
  } = props;
  const errorMessage = errors && errors[name] && errors[name].message;
  const defaultFieldType = 'text';
  const fieldType = type || defaultFieldType;
  return show && (

    <Col className={
            `col-sm-${sm} form-group`
        }
    >
      <label className="form-label mr-2">
        {label}

        {required
          && <span className="text-danger"> * </span>}
      </label>
      <input
        ref={ref}
        className={`form-control ${errorMessage && 'is-invalid'}`}
        type={fieldType}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      <span className="invalid-feedback">
        {errorMessage}
      </span>

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
            }

        `}

      </style>
    </Col>
  );
});
