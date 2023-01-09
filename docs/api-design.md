# API Endpoints

### Log in

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: varchar
  * password: varchar

* Response: Account information and a token
* Response shape (JSON):
    `{
      "user": {
        «key»: type»,
      },
      "token": varchar
    }'

### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    `
    true
    `

### Sign up

* Endpoint path: /users
* Endpoint method: POST

* Request shape (form):
  * firstName: varchar
  * lastName: varchar
  * username: varchar
  * password: varchar
  * email: varchar
  * phone: varchar

* Response: Always true
* Response shape (JSON):
    `
    {
      "accountId": smallint,
      "firstName": varchar,
      "lastName": varchar,
      "username": varchar,
      "password": varchar,
      "email": varchar,
      "phone": varchar,
      "accessToken": varchar
    }
    `

### User Link Single Institution to Plaid

* Endpoint path: /link/token/create
* Endpoint method: POST

* Request shape(form):
  * username: varchar
  * password: varchar
  * 2fa Code (if applicable): smallint

* Response: Link token, Expiration, Request ID
* Response shape(JSON)
'{
  "link_token": "link-sandbox-af1a0311-da53-4636-b754-dd15cc058176",
  "expiration": "2020-03-27T12:56:34Z",
  "request_id": "XQVgFigpGHXkb0b"
}'

### User Exchange Link Public Token for API Access Token

* Endpoint path: /item/public_token/exchange
* Endpoint method: POST

* Request shape(form)
  * public_token: publicToken

* Response shape(JSON)
'{
  "access_token": "access-sandbox-de3ce8ef-33f8-452c-a685-8671031fc0f6",
  "item_id": "M5eVJqLnv3tbzdngLDp9FL5OlDNxlNhlE55op",
  "request_id": "Aim3b"
}'

### Update User Institutions Property With Plaid API Access Token

* Endpoint path: /api/account/{account_id}
* Endpoint method: PUT

* Request shape(form)
  * "accessToken": "access-sandbox-de3ce8ef-33f8-452c-a685-8671031fc0f6"

* Response shape(JSON)
  {
      "accountId": 5165,
      "firstName": Waylen,
      "lastName": Roche,
      "username": waylenroche,
      "password": 237bfh32b87f,
      "email": waylenroche@gmail.com,
      "phone": 8505093794,
      "accessToken": "access-sandbox-de3ce8ef-33f8-452c-a685-8671031fc0f6",
    }

### User Get Accounts Info From Plaid

* Endpoint path: /accounts/get
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response Shape(JSON):
'{
  "accounts": [
    {
      "account_id": "A3wenK5EQRfKlnxlBbVXtPw9gyazDWu1EdaZD",
      "balances": {
        "available": 100,
        "current": 110,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "subtype": "checking",
      "type": "depository"
    },
    {
      "account_id": "GPnpQdbD35uKdxndAwmbt6aRXryj4AC1yQqmd",
      "balances": {
        "available": 200,
        "current": 210,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "1111",
      "name": "Plaid Saving",
      "official_name": "Plaid Silver Standard 0.1% Interest Saving",
      "subtype": "savings",
      "type": "depository"
    },
    {
      "account_id": "nVRK5AmnpzFGv6LvpEoRivjk9p7N16F6wnZrX",
      "balances": {
        "available": null,
        "current": 1000,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "2222",
      "name": "Plaid CD",
      "official_name": "Plaid Bronze Standard 0.2% Interest CD",
      "subtype": "cd",
      "type": "depository"
    }
    ...
  ],
  "item": {
    "available_products": [
      "assets",
      "balance",
      "identity",
      "investments",
      "transactions"
    ],
    "billed_products": ["auth"],
    "consent_expiration_time": null,
    "error": null,
    "institution_id": "ins_12",
    "item_id": "gVM8b7wWA5FEVkjVom3ri7oRXGG4mPIgNNrBy",
    "webhook": "https://requestb.in"
  },
  "request_id": "C3IZlexgvNTSukt"
}'

## Retrieve Transaction Data

* Endpoint path: /transactions/get
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request Shape(Plaid)
  * access_token: accessToken,
  * start_date: '2018-01-01',
  * end_date: '2020-02-01'

* Response Shape(JSON):
  '{
  "accounts": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "balances": {
        "available": 110,
        "current": 110,
        "iso_currency_code": "USD",
        "limit": null,
        "unofficial_currency_code": null
      },
      "mask": "0000",
      "name": "Plaid Checking",
      "official_name": "Plaid Gold Standard 0% Interest Checking",
      "subtype": "checking",
      "type": "depository"
    }
  ],
  "transactions": [
    {
      "account_id": "BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp",
      "amount": 2307.21,
      "iso_currency_code": "USD",
      "unofficial_currency_code": null,
      "category": [
        "Shops",
        "Computers and Electronics"
      ],
      "category_id": "19013000",
      "check_number": null,
      "date": "2017-01-29",
      "datetime": "2017-01-27T11:00:00Z",
      "authorized_date": "2017-01-27",
      "authorized_datetime": "2017-01-27T10:34:50Z",
      "location": {
        "address": "300 Post St",
        "city": "San Francisco",
        "region": "CA",
        "postal_code": "94108",
        "country": "US",
        "lat": 40.740352,
        "lon": -74.001761,
        "store_number": "1235"
      },
      "name": "Apple Store",
      "merchant_name": "Apple",
      "payment_meta": {
        "by_order_of": null,
        "payee": null,
        "payer": null,
        "payment_method": null,
        "payment_processor": null,
        "ppd_id": null,
        "reason": null,
        "reference_number": null
      },
      "payment_channel": "in store",
      "pending": false,
      "pending_transaction_id": null,
      "account_owner": null,
      "transaction_id": "lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje",
      "transaction_code": null,
      "transaction_type": "place"
    }
  ],
  "item": {
    "available_products": [
      "balance",
      "identity",
      "investments"
    ],
    "billed_products": [
      "assets",
      "auth",
      "liabilities",
      "transactions"
    ],
    "consent_expiration_time": null,
    "error": null,
    "institution_id": "ins_3",
    "item_id": "eVBnVMp7zdTJLkRNr33Rs6zr7KNJqBFL9DrE6",
    "update_type": "background",
    "webhook": "https://www.genericwebhookurl.com/webhook"
  },
  "total_transactions": 1,
  "request_id": "45QSn"
}'

## Create Instance For Transactions Database With User's Transaction Data

* Endpoint path: /api/transactions
* Endpoint method: POST

* Request shape(form)
  * account_id: accountId
  * "transactions": [
    {
      "category": [
        "Shops",
        "Computers and Electronics"
      ],
      "authorized_date": "2017-01-27",
      "merchant_name": "Apple"
      }

* Response shape(JSON)
  '{
    "id": 1,
    "accountId": 5165,
    "transactions": [
    {
      "category": [
        "Shops",
        "Computers and Electronics"
      ],
      "authorized_date": "2017-01-27",
      "merchant_name": "Apple"
      }
  }'

## Update Transaction's Database With Daily Transactions Data

* Endpoint path: /api/transactions/{account_id}
* Endpoint method: PUT

* Request shape(form)
  * account_id: accountId
  * "transactions": [
    {
      "category": [
        "Shops",
        "Computers and Electronics"
      ],
      "authorized_date": "2017-01-27",
      "merchant_name": "Apple"
      }

* Response shape(JSON)
  '{
    "id": 1,
    "accountId": 5165,
    "transactions": [
    {
      "category": [
        "Shops",
        "Computers and Electronics"
      ],
      "authorized_date": "2017-01-27",
      "merchant_name": "Apple"
      }
  }'
