const mysql=require("mysql2");

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node_complete',
    password: 'Admin123'
});

module.exports=pool.promise();