import db from "../db/index";

export default {
  getByCode: code => {
    return db.queryForObject("SELECT * FROM countries WHERE code = $1", [
      code.toUpperCase()
    ]);
  },
  getCountries: () => {
    return db.query("SELECT * FROM countries", []);
  }
};
