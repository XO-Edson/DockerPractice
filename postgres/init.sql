CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    version VARCHAR(20) NOT NULL
);

INSERT INTO projects (name, version) VALUES
    ('Fullstack Practice', '1.0.0'),
    ('Docker Learning', '2.0.0'),
    ('Postgres Demo', '3.0.0');