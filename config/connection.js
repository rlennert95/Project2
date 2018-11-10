if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection  = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'JAWSDB_URL'
    });
};

connection.connect();
module.exports = connection;
