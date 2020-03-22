CREATE TABLE countries (
    code VARCHAR(2) PRIMARY KEY,
    name VARCHAR(64),
    flag VARCHAR(64)
);

INSERT INTO countries(code, name, flag) VALUES
('BZ', 'Belice', 'bandera-belice.png'),
('CR', 'Costa Rica', 'bandera-costa_rica.png'),
('ES', 'El Salvador', 'bandera-el_salvador.png'),
('GT', 'Guatemala', 'bandera-guatemala.png'),
('HN', 'Honduras', 'bandera-honduras.png'),
('NI', 'Nicaragua', 'bandera-nicaragua.png'),
('PA', 'Panamá', 'bandera-panama.png'),
('DO', 'Rep. Dominicana', 'bandera-rep_dominicana.png');