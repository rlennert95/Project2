var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection  = mysql.createConnection({
        host: 'op2hpcwcbxb1t4z9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'my8h9q7qlmnpqpz8',
        password: 'gmyedys86gawwiy7',
        database: 'JAWSDB_URL'
    });
};

connection.connect();
module.exports = connection;
