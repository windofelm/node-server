var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "laravel_project"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("SELECT * FROM languages", function (err, result, fields) {
        if (err) throw err;
        console.log(result[0].cldr_display_name);
    });
});