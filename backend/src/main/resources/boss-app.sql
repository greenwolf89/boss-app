CREATE table accounts
(
	id BIGINT NOT NULL,
	username VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
);

CREATE table transactions
(
	id BIGINT NOT NULL UNIQUE,
	accountId BIGINT NOT NULL UNIQUE REFERENCES accounts("id"),
	amount BIGINT NOT NULL,
	category VARCHAR(255),
	merchant VARCHAR(255),
	date DATE NOT NULL,
	PRIMARY KEY(id)
);
