/**
 * SQL: Setting up MySQL Server Locally and Working with Databases
 *
 * This guide provides steps for setting up a MySQL server locally, as well as common SQL queries to work with databases.
 */

/**
 * 1. Installing MySQL Server and MySQL Workbench
 *
 * To set up MySQL locally, follow the installation steps:
 * - **MySQL Server**: Download and install MySQL server from the official website: https://dev.mysql.com/downloads/mysql/
 * - **MySQL Workbench**: Download and install MySQL Workbench (a GUI tool to interact with MySQL) from: https://dev.mysql.com/downloads/workbench/
 *
 * During the MySQL server installation, you will be asked to set a root password.
 * - **Tip**: Ensure the password contains only numbers and alphabets. Avoid using spaces or special characters.
 */

/**
 * 2. Connecting to MySQL Server via Terminal
 *
 * After installation, you can connect to MySQL from the terminal using the following command:
 *
 * const command = "/usr/local/mysql/bin/mysql -u root -p";
 *
 * Note: The path `/usr/local/mysql/bin/mysql` may differ based on your operating system. You should replace it with the correct path where MySQL is installed.
 */

/**
 * 3. Using MySQL Workbench for GUI-based Connection
 *
 * If you prefer a GUI interface, use MySQL Workbench to connect to your local or remote MySQL server:
 * - Open MySQL Workbench
 * - Create a new connection or use the default connection (localhost with root user)
 * - Enter the root password and connect to your MySQL server
 */

/**
 * 4. Working with Databases
 *
 * Below are common commands for listing, creating, and deleting databases.
 */

/**
 * 4.1. Listing Databases
 *
 * You can view all available databases in MySQL by running:
 *
 * const listDatabasesQuery = `SHOW DATABASES;`;
 *
 * Expected Output:
 *
 * +--------------------+
 * | Database           |
 * +--------------------+
 * | information_schema |
 * | mysql              |
 * | performance_schema |
 * | sys                |
 * +--------------------+
 * */

/**
 * 4.2. Creating a Database
 *
 * To create a new database called `classicmodels`:
 *
 * const createDatabaseQuery = `CREATE DATABASE classicmodels;`;
 *
 * - This will create the database if it does not exist already.
 *
 * To confirm that the database was created, you can list all databases:
 *
 * const showDatabasesQuery = `SHOW DATABASES;`;
 *
 * This should now include the `classicmodels` database.
 */

/**
 * 4.3. Creating a Database If It Doesn't Already Exist
 *
 * If you want to create a database only if it doesn't already exist, use:
 *
 * const createIfNotExistsQuery = `CREATE DATABASE IF NOT EXISTS classicmodels;`;
 *
 * This prevents errors if the `classicmodels` database already exists.
 */

/**
 * 4.4. Selecting a Database
 *
 * To start working with a specific database, use the `USE` command:
 *
 * const useDatabaseQuery = `USE classicmodels;`;
 *
 * After selecting a database, any subsequent SQL commands like creating tables, inserting data, etc., will affect that selected database.
 */

/**
 * 4.5. Deleting a Database
 *
 * To delete a database and all its associated data, use the `DROP DATABASE` command:
 *
 * const dropDatabaseQuery = `DROP DATABASE classicmodels;`;
 *
 * - **Warning**: This will permanently delete the database and its contents, so use with caution.
 *
 * After deletion, verify the database is gone by listing databases again using `SHOW DATABASES;`.
 */
