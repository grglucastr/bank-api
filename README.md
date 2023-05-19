# Bank API - Version 1

The Bank API is an ongoing project developed using TypeScript and NestJS. It aims to provide a robust and scalable API for banking operations, allowing users to manage their accounts, make transactions, and perform various financial activities.

Please note that this README is a work in progress and will be updated as the project progresses. It currently provides an overview of the project, its features, and instructions for installation and setup.

## Features

- User authentication and authorization.
- Account management (create, update, and delete accounts).
- Transaction operations (deposit, withdrawal, transfer).
- Transaction history and statements.
- Account balance and transaction validation.

## Installation

To run the Bank API locally, please follow the steps below:

1. Ensure you have [Node.js](https://nodejs.org) installed (version 18 or higher).

2. Clone the repository:

   ```
   git clone https://github.com/vinybergamo/bank-api.git
   ```

3. Navigate to the project directory:

   ```
   cd bank-api
   ```

4. Install the dependencies:

   ```
   yarn install
   ```

5. Set up the environment variables. Create a `.env` file in the project's root directory and provide the following variables:

   ```
   PORT=3333
   DATABASE_URL=<your-database-url>
   JWT_SECRET=<your-jwt-secret>
   ```

   Replace `<your-database-url>` with the URL of your PostgreSQL database, and `<your-jwt-secret>` with a secure secret for JSON Web Tokens.

6. Start the application:

   ```
   yarn start:dev
   ```

   The Bank API will now be running locally on port 3000 (or the specified port in the `.env` file).

## API Endpoints

The following endpoints are currently available in the Bank API (prefixed with `/api/v1`)

- `POST /api/v1/auth/signup`: Register a new user.
- `POST /api/v1/auth/login`: Authenticate a user and retrieve an access token.
- `GET /api/v1/accounts`: Retrieve a list of accounts.
- `GET /api/v1/accounts/:id`: Retrieve details of a specific account.
- `POST /api/v1/accounts`: Create a new account.
- `PATCH /api/v1/accounts/:id`: Update an existing account.
- `DELETE /api/v1/accounts/:id`: Delete an account.
- `POST /api/v1/transactions/deposit`: Deposit funds into an account.
- `POST /api/v1/transactions/withdraw`: Withdraw funds from an account.
- `POST /api/v1/transactions/transfer`: Transfer funds between accounts.
- `GET /api/v1/transactions/:id`: Retrieve details of a specific transaction.
- `GET /api/v1/transactions/history/:accountId`: Retrieve transaction history for a specific account.
- `GET /api/v1/transactions/statements/:accountId`: Retrieve account statements for a specific account.

Please note that this documentation is subject to change as the project evolves.

## Examples

Examples of how to use the Bank API will be provided in future updates of this README.

## Contributing

Contributions to the Bank API are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```
   git checkout -b my-feature
   ```

3. Make your changes and ensure the code follows the project's coding style.

4. Commit your changes and push the branch to your forked repository:

   ```
   git commit -m "feat: Add new feature"
   git push origin my-feature
   ```

5. Open a pull request against the main repository, describing your changes and their purpose.

## License

The Bank API is released under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, please contact the project maintainer at [contato@vinybergamo.com](mailto:contato@vinybergamo.com)

Thank you for using the
