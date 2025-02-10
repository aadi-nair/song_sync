CREATE TABLE IF NOT EXISTS songs (
    index SERIAL PRIMARY KEY,
    id VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    danceability NUMERIC NOT NULL,
    energy NUMERIC NOT NULL,
    mode INTEGER NOT NULL,
    acousticness NUMERIC NOT NULL,
    tempo NUMERIC NOT NULL,
    duration_ms INTEGER NOT NULL,
    num_sections INTEGER NOT NULL,
    num_segments INTEGER NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
);