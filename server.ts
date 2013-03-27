///<reference path='node.d.ts'/>
import http = module("http");


// Query with explicit connection
var sql = require('node-sqlserver');
var conn_str = "Driver={SQL Server Native Client 11.0};Server=88.198.7.228\descartes,1984;Database=testNode;UID=sa;PWD=MaxStirner.1";

sql.open(conn_str, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    conn.queryRaw("SELECT 1", function (err, results) {
        if (err) {
            console.log("Error running query!");
            return;
        }
        http.createServer(function (req, res) {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end(err || results);
        }).listen(process.env.PORT);

        })
    });





