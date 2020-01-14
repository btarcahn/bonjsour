/**
 * FILE: database_create.js
 * File contains: recipe to create the backend
 * model database for bonjsour project.
 * This file follows the tutorial: https://www.codementor.io/@olawalealadeusi896/
 * building-a-simple-api-with-nodejs-expressjs-and-postgresql-db-masuu56t7
 * @author Bach Tran
 * @since 1.0
 * @licence GPL-3.0
 */
const {Pool} = require('postgres');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_DEVELOPMENT
});

pool.on('connect', () => {
   console.log('Connected to DB_DEVELOPMENT.');
});

// CREATE TABLES

const createTables = () => {
    const queryText =
        `CREATE TABLE IF NOT EXISTS
        reflections(
            id UUID PRIMARY KEY,
            success VARCHAR(128) NOT NULL,
            low_point VARCHAR(128) NOT NULL,
            take_away VARCHAR(128) NOT NULL,
            created_date TIMESTAMP,
            modified_date TIMESTAMP
        )`;
    pool.query(queryText)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        })
};

// DROP TABLES
const dropTables = () => {
  const queryText = 'DROP TABLE IF EXISTS reflections';
  pool.query(queryText)
      .then((res) => {
          console.log(res);
          pool.end();
      })
      .catch((err) => {
          console.log(err);
          pool.end();
      });
};

pool.on('remove', () => {
    console.log('Client removed.');
    process.exit(0);
});

module.exports = {
    createTables,
    dropTables
};