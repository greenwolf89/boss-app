CREATE table accounts
(
	id BIGINT NOT NULL,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
    password VARCHAR(65) NOT NULL,
	PRIMARY KEY(id)
);
