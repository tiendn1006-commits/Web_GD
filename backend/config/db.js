const sql = require('mssql');

const config = {
  server: 'localhost\\SQLEXPRESS',
  database: 'Web_GD',
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true
  },
  authentication: {
    type: 'default',
    options: {
      userName: '',
      password: ''
    }
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('✅ Connected to SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('❌ Database Connection Failed:', err);
    throw err;
  });

module.exports = {
  sql,
  poolPromise
};
