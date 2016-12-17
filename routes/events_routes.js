/**
 * Created by Joe on 11/17/16.
 */
var express = require('express');
var router = express.Router();
var events_dal = require('../model/events_dal.js');
// var players_dal = require('../model/players_dal');
// var skill_dal = require('../model/skill_dal');
// var company_dal = require('../model/company_dal');
// var team_dal = require('../model/team_dal');


// View All eventss
// WHATS UP WITH /all
router.get('/all', function(req, res) {
    events_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('events/eventsViewAll', { 'result':result });
        }
    });

});

// View the events for the given id
router.get('/', function(req, res){
    if(req.query.events_id == null) {
        res.send('events_id is null');
    }
    else {
        events_dal.getById(req.query.events_id, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('events/eventsViewById', {'result': result});
            }
        });
    }
});

// router.get('/add', function(req, res){
//      players_dal.getAll(function(err, players){
//         skill_dal.getAll(function(err, skill){
//             company_dal.getAll(function(err, company){
//                 team_dal.getAll(function(err, team){
//                         if (err) {
//                             res.send(err);
//                         }
//                         else {
//                             res.render('events/eventsAdd', { 'players': players, 'skill': skill, 'company': company, 'team': team });
//
//
//                         }
//
//                     });
//                 });
//             });
//      });
// });
//
// router.get('/edit', function (req, res) {
//     if (req.query.events_id == null) {
//         res.send('events_id is null');
//     }
//     else {
//         events_dal.getById(req.query.events_id, function (err, events) {
//             if (err) {
//                 res.send(err);
//             }
//             else {
//                 res.render('events/eventsUpdate', {'events': events});
//             }
//
//         });
//     }
// });
//
// // router.get('/edit', function (req, res) {
// //     players_dal.getAll(function (err, players) {
// //         skill_dal.getAll(function (err, skill) {
// //             company_dal.getAll(function (err, company) {
// //                 team_dal.getAll(function (err, team) {
// //                     events_dal.getById(function(err, events) {
// //                         if (err) {
// //                             res.send(err);
// //                         }
// //                         else {
// //                             res.render('events/eventsUpdate', {'players': players, 'skill': skill, 'company': company, 'team': team, 'events': events });
// //
// //
// //                         }
// //                     });
// //                 });
// //             });
// //         });
// //     });
// // });
//
//
// router.get('/insert', function(req, res){
//     if (req.query.events_name == null) {
//         res.send('events Name must be provided.');
//     }
//     else if (req.query.players_id == null) {
//         res.send('An players must be selected');
//     }
//     else if (req.query.skill_id == null) {
//         res.send('A skill name must be entered');
//     }
//     else if (req.query.company_id == null) {
//         res.send('A company name must be entered');
//     }
//     else if (req.query.team_id == null) {
//         res.send('A team name must be entered');
//     }
//     else {
//         events_dal.insert(req.query, function(err, result){
//             if(err) {
//                 res.send(err);
//             }
//             else {
//                 res.redirect(302, '/events/all');
//             }
//         });
//
//     }
// });
//
//
// // update example
// // router.get('/update', function(req, res) {
// //     company_dal.update(req.query, function(err, result){
// //         res.redirect(302, '/company/all');
// //     });
// // });
//
//
//
// // router.get('/update', function(req, res){
// //     if (req.query.events_name == null) {
// //         res.send('events Name must be provided.');
// //     }
// //     else if (req.query.players_id == null) {
// //         res.send('An players must be selected');
// //     }
// //     else if (req.query.skill_id == null) {
// //         res.send('A skill name must be entered');
// //     }
// //     else if (req.query.company_id == null) {
// //         res.send('A company name must be entered');
// //     }
// //     else if (req.query.team_id == null) {
// //         res.send('A team name must be entered');
// //     }
// //     else {
// //         events_dal.insert(req.query, function(err, result){
// //             if(err) {
// //                 res.send(err);
// //             }
// //             else {
// //                 res.redirect(302, '/events/all');
// //             }
// //         });
// //
// //     }
// // });
//
// router.get('/delete', function(req, res){
//     if (req.query.events_id == null) {
//         res.send('events_id is null');
//     }
//     else {
//         events_dal.delete(req.query.events_id, function(err, result){
//             if(err){
//                 res.send('events_id is null');
//             }
//             else {
//                 res.redirect(302, '/events/all');
//             }
//         });
//     }
// });
//
module.exports = router;
