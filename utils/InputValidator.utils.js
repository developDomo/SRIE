import Validator from 'fastest-validator';

const validator = new Validator();

export default {
  /**
     * Gets a new validator based on the provided schema
     *
     * @param {object} schema Object schema to be validated. More info here {@link https://www.npmjs.com/package/fastest-validator}
     */
  getInputValidator: (schema) => validator.compile(schema),

  /**
     * Validate the input
     *
     * @param {FastestValidator} inputValidator Validator to be used
     * @param {object} input Input to be validated
     * @param {*} res Response object
     */
  validate: (inputValidator, input, res) => {
    const isInputValid = inputValidator(input);

    if (typeof isInputValid === 'boolean' && isInputValid) {
      return true;
    }

    res.status(400).json({ error: true, status: 400, errors: isInputValid });
    return false;
  },
};
