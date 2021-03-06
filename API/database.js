const Pool = require("pg").Pool;

let database = "projectdb";

if (process.env.NODE_ENV === "test") {
  database = "testdb";
}

let connectionParams = {
  user: "postgres",
  host: "localhost",
  database: database,
  password: "admin",
  port: 5432,
};

if (process.env.DATABASE_URL) {
  connectionParams = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
}


const connection = new Pool({
  ...connectionParams,
});

module.exports = connection;
