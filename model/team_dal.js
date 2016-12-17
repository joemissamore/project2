var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

/*
 create or replace view team_view as
 select s.*, a.street, a.zipcode from team s
 join address a on a.address_id = s.address_id;

 */

exports.getAll = function(callback) {
    var query = 'SELECT * FROM team;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(team_id, callback) {
    var query = 'SELECT * FROM team_view WHERE team_id = ?';
    var queryData = [team_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};
//
exports.insert = function(params, callback) {
    var query = 'INSERT INTO team (team_name, gender, category) VALUES (?, ?, ?)';

    // the question marks in the sql query above will be replaced by the values of the
    // the data in queryData
    var queryData = [params.team_name, params.gender, params.category];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

}
//
// exports.delete = function(team_id, callback) {
//     var query = 'DELETE FROM team WHERE team_id = ?';
//     var queryData = [team_id];
//
//     connection.query(query, queryData, function(err, result) {
//         callback(err, result);
//     });
//
// };