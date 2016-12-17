/**
 * Created by Joe on 11/16/16.
 */
var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM event_view;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

// exports.getById = function(events_id, callback) {
//     var query = 'SELECT * FROM events WHERE events_id = ?';
//     var queryData = [events_id];
//
//     connection.query(query, queryData, function(err, result) {
//         callback(err, result);
//     });
// };


// var eventsteamInsert = function (_query, events_id, teamIdArray, callback) {
//     var query = _query;
//     var eventsteamData = [];
//
//     if (teamIdArray instanceof Array)
//     {
//         for (var i = 0; i < teamIdArray.length; i++) {
//
//             eventsteamData.push([events_id, teamIdArray[i]]);
//             // console.log(events_id + ', ' + teamIdArray[i]);
//
//         }
//     }
//     else
//     {
//         eventsteamData.push([events_id, teamIdArray]);
//     }
//
//     connection.query(query, [eventsteamData], function (err, result) {
//         callback(err, result);
//     });
//
//
// }; // End eventsteamIntent
//
//
//
// var eventsSkillInsert = function (_query, events_id, skillIdArray, callback) {
//     var query = _query;
//     var eventsSkillData = [];
//
//     if (skillIdArray instanceof Array)
//     {
//         for (var i = 0; i < skillIdArray.length; i++) {
//             eventsSkillData.push([events_id, skillIdArray[i]]);
//         }
//     }
//
//     else
//     {
//         eventsSkillData.push([events_id, skillIdArray]);
//     }
//
//
//     connection.query(query, [eventsSkillData], function (err, result) {
//         callback(err,result);
//     });
//
//
// }; // End eventsSKillInsert
//
//
//
// var eventsCompanyInsert = function(_query, events_id, eventsCompanyArray, callback) {
//     var query = _query;
//     var eventsCompanyData = [];
//
//     if (eventsCompanyArray instanceof Array)
//     {
//         for (var i=0; i < eventsCompanyArray.length; i++) {
//             eventsCompanyData.push([events_id, eventsCompanyArray[i]]);
//
//         }
//     }
//     else
//     {
//         eventsCompanyData.push([events_id, eventsCompanyArray]);
//     }
//
//     connection.query(query, [eventsCompanyData], function (err, result) {
//         callback(err, result);
//     });
//
//
// }; // End eventsCompanyInsert
//
//
//         /* Module Exports */
// module.exports.eventsteamInsert = eventsteamInsert;
// module.exports.eventsCompanyInsert = eventsCompanyInsert;
// module.exports.eventsSkillInsert = eventsSkillInsert;
//         /* Module Exports */
//
//
//
//
// exports.insert = function (params, callback) {
//     var query = 'INSERT INTO events (events_name, players_id) VALUES (?, ?)';
//     var queryData = [params.events_name, params.players_id];
//
//     connection.query(query, queryData, function (err, result) {
//         var eventsCompanyInsertQuery = 'INSERT INTO events_company (events_id, company_id) VALUES ?';
//         var eventsSkillInsertQuery = 'INSERT INTO events_skill (events_id, skill_id) VALUES ?';
//         var eventsteamInsertquery = 'INSERT INTO events_team (events_id, team_id) VALUES ?';
//         var events_id_ = result.insertId;
//
//         eventsteamInsert(eventsteamInsertquery, events_id_, params.team_id, function (err, result) {
//             eventsCompanyInsert(eventsCompanyInsertQuery, events_id_, params.company_id, function (err, result) {
//                 eventsSkillInsert(eventsSkillInsertQuery, events_id_, params.skill_id, function (err, result) {
//                 callback(err, result);
//
//                 });
//             });
//         });
//
//
// exports.updateevents = function(params, callback) {
//     var query = 'UPDATE events set players_id = (?) where events_id = (?)';
//     var queryData = [params.players_id, params.events_id];
//
//     connection.query(query, queryData, function (err, result) {
//
//     });
// };
//
//
//
//
//
//         /* events team DATA */
//         // var eventsteamData = [];
//         //  for (var i=0; i < params.team_id.length; i++) {
//         //  eventsteamData.push([events_id, params.team_id[i]]);
//         //  console.log('team_id:' + params.team_id);
//         //  console.log(params);
//         //  }
//         //  connection.query(query1, [eventsteamData], function (err, result) {
//         //  // callback(err, result);
//         //  });
//
//
//         /* events team DATA */
//         // var eventsCompanyData = [];
//         // for (var i=0; i < params.company_id.length; i++) {
//         //     eventsCompanyData.push([events_id, params.company_id[i]]);
//         //     console.log('company_id: ' + params.company_id[i]);
//         // }
//         // connection.query(query2, [eventsCompanyData], function(err, result){
//         // });
//
//         /* events team DATA */
//
//
//         //         /* events SKILL DATA */
//         //         var eventsSkillData = [];
//         //         for (var i=0; i < params.skill_id.length; i++) {
//         //             eventsSkillData.push([events_id, params.skill_id[i]]);
//         //         }
//         //         connection.query(query3, [eventsSkillData], function (err, result) {
//         //             callback(err, result);
//         //         });
//         //
//         //     });
//         //
//     });
//
// };
//
//
//
// exports.delete = function(events_id, callback) {
//     var query = 'DELETE FROM events where events_id = ?';
//     var queryData = [events_id];
//
//     connection.query(query, queryData, function(err, result){
//         callback(err, result);
//     });
// };
//
// exports.update = function(params, callback) {
//     var query = 'UPDATE events SET events_name = ? WHERE events_id = ?';
//
//     var queryData = [params.events_name, params.events_id];
//
//     connection.query(query, queryData, function(err, result) {
//         callback(err, result);
//
//     });
// };