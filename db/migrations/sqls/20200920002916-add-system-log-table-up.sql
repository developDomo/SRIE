CREATE TABLE events (
    country VARCHAR(2) REFERENCES countries,
    user_email VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP DEFAULT now_utc(),
    action TEXT
);