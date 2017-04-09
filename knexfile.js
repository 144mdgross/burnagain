'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/burnagain_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/burnagain_test'
  },

  production: {
    client:'pg',
    connection:process.env.DATABASE_URL
  }
};
