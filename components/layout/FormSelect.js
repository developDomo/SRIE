import { Col } from 'react-bootstrap';
import React from 'react';
import { blue1, txt, white } from '../../theme/colors';

export default React.forwardRef((props, ref) => {
  const {
    name, label, options, onChange, sm, required,
  } = props;
  return (
    <Col sm={sm} className="form-group">
      <label className="form-label mr-2">
        {label}

        {required
          && <span className="text-danger"> * </span>}
      </label>
      <select ref={ref} className="form-control" name={name} onChange={onChange}>
        {options && options.map((option, i) => (
          <option selected={option.selected} key={i} value={option.value}>{option.label}</option>
        ))}
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
