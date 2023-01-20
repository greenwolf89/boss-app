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
	items VARCHAR(255) [],
	account_id BIGINT NOT NULL UNIQUE REFERENCES accounts("id"),
	PRIMARY KEY(id)
);
