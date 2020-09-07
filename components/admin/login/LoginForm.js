import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from '../../layout/Button';
import {
  green2, white, green,
} from '../../../theme/colors';
import Title from '../../layout/Title';
import { withTranslation } from '../../../i18n';

const LoginForm = ({ t, errorMessage, onSubmit }) => (
  <Card className="col-md-8 offset-md-2">
    <Card.Body className="d-flex m-1 justify-content-center">
      <form onSubmit={onSubmit} className="login-form col-md-9 text-center">
        <Title type="subtitle" color="blue" className="mb-4  p-0">
          { t('enterLoginCredentials')}
        </Title>
        <label className="mb-0" htmlFor="email">
          { t('email')}
          :
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control mt-0 mb-4"
          placeholder="Email address"
          required
        />
        <label className="mb-0" htmlFor="password">
          { t('password')}
          :
        </label>
        <input type="password" name="password" id="password" className="form-control mt-0 mb-4" placeholder="Password" required />
        <Button textTransform="uppercase" color="blue" type="submit">{ t('login')}</Button>
        {errorMessage && <p className="error bg-danger">{errorMessage}</p>}
        <div className="support mt-5">
          <p className="m-0">{ t('problemsLoginIn')}</p>
          <p className="m-0 changeme"><a href="mailto:suport@changeme.com">{ t('contactAdmin')}</a></p>
        </div>
      </form>

    </Card.Body>

    <style jsx>
      {`
            form{
                display: flex;
                flex-flow: column;
            }
            .error {
              color: ${white};
              margin: 1rem 0 0;
            }
            .form-control {
                position: relative;
                box-sizing: border-box;
                height: auto;
            }
            .form-control:focus {
              z-index: 2;
            }
            label{
                font-size: 1em;
                font-weight: bold;
                color: ${green};
            }
            input{
             border-color: ${green2};
             background-color: ${white};
             border-radius: 0;
            }
       
        `}

    </style>
  </Card>

);

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default withTranslation('common')(LoginForm);
