CREATE FUNCTION now_utc() RETURNS TIMESTAMP as $$
SELECT now() at time zone 'utc';
$$ LANGUAGE sql;

-- update trigger
CREATE FUNCTION update_updated_at_column() RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now_utc();
  RETURN NEW;
END;
$$;

CREATE SEQUENCE users_sequence;

CREATE TABLE users (
    id SMALLINT DEFAULT nextval('users_sequence') PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(32),
    country VARCHAR(2) REFERENCES countries NOT NULL,
    last_login TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT now_utc(),
    updated_at TIMESTAMP DEFAULT now_utc()
);

CREATE TRIGGER users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();

INSERT INTO users (email, password, role, country) VALUES ('dev@eldomo.net', '$2b$10$Yaewtq/5CPRInHYMIYamnuDqnif/e0VZ9oONxZE0eAAoLWk.dGvQu', 'admin', 'CR');