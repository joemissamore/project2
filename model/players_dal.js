/**
 * Created by Joe on 11/16/16.
 */
var mysql  = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM team_view;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(players_id, callback) {
    var query = 'SELECT * FROM players WHERE player_id = ?';
    var queryData = [players_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};

exports.delete = function(players_id, callback){
    var query = 'DELETE FROM players where player_id = ?';
    var queryData = [players_id];

    connection.query(query, queryData, function(err, result){
        callback(err, result);
    });
};

//
exports.insert = function(params, callback) {
    var query = 'INSERT INTO players (first_name, last_name, year, team_id, position) VALUES (?, ?, ?, ?, ?)';
    var queryData = [params.first_name, params.last_name, params.year, params.team_id, params.position];

    connection.query(query,queryData, function(err, result){
        callback(err, result);
    });
}

