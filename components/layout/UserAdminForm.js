/* eslint-disable no-param-reassign */
import { withTranslation } from '../../i18n';

const handleOnChange = (setUser, user) => (e) => {
  user[e.target.name] = e.target.value;
  setUser(user);
};

const UserAdminForm = ({
  t, countries, user, onSave, setUser, editing = false,
}) => {
  if (!editing) {
    user.country = countries[0].code.toUpperCase();
    user.role = 'admin';
  }

  setUser(user);

  return (
    <form onSubmit={onSave}>
      <label htmlFor="country">Country</label>
      <select name="country" onBlur={handleOnChange(setUser, user)}>
        {countries.map((country) => (
          <option
            key={country.code}
            value={country.code.toUpperCase()}
            selected={country.code.toUpperCase() === user.country}
          >
            {t(`countries.${country.code}`)}

          </option>
        ))}
      </select>
      <label htmlFor="first_name">First Name</label>
      <input name="first_name" defaultValue={user?.first_name} onBlur={handleOnChange(setUser, user)} />
      <label htmlFor="last_name">Last Name</label>
      <input name="last_name" defaultValue={user?.last_name} onBlur={handleOnChange(setUser, user)} />
      <label htmlFor="email">Email</label>
      <input name="email" defaultValue={user?.email} onBlur={handleOnChange(setUser, user)} />
      {!editing && (
      <>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onBlur={handleOnChange(setUser, user)} />
      </>
      )}
      <label htmlFor="role">Role</label>
      <select name="role" onBlur={handleOnChange(setUser, user)}>
        <option value="admin" selected={user.role === 'admin'}>Admin</option>
        <option value="country-admin" selected={user.role === 'country-admin'}>Country Admin</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};

export default withTranslation('countries')(UserAdminForm);
