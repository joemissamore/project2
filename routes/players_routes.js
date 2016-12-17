/**
 * Created by Joe on 11/16/16.
 */
var express = require('express');
var router = express.Router();
var players_dal = require('../model/players_dal');


// View All playerss
// WHATS UP WITH /all
router.get('/all', function(req, res) {
    players_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('players/playersViewAll', { 'result':result });
        }
    });

});

// View the team for the given id
router.get('/', function(req, res){
    if(req.query.player_id == null) {
        res.send('player_id is null');
    }
    else {
        players_dal.getById(req.query.player_id, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('players/playersViewById', {'result': result});
            }
        });
    }
});

router.get('/insert', function(req, res){
  if (req.query.first_name == null) {
      res.send ('First Name must be provided.');
  }
  else if (req.query.last_name == null) {
      res.send ('Last Name must be provided.');
  }
  else if (req.query.year == null) {
      res.send('Year must be provided');
  }
  else if (req.query.position == null) {
      res.send('Position must be provided');
  }
  else if (req.query.team_id == null) {
      res.send('A team must be selected');
  }
  else {
      players_dal.insert(req.query, function(err, result){
          if(err) {
              res.send(err);
          }
          else {
              res.redirect(302, '/players/all');
          }
      });
  }
});

router.get('/delete', function(req, res){
    if (req.query.player_id == null) {
        res.send('player_id is null');
    }
    else {
        players_dal.delete(req.query.player_id, function(err, result){
            if (err){
                res.send('player_id is null');
            }
            else {
                res.redirect(302, '/players/all');
            }
        });
    }
});

router.get('/add', function(req, res){
    players_dal.getAll(function(err, result){
        if (err) {
            res.send(err);
        }
        else {
            res.render('players/playersAdd', {'players': result});
        }
    });
});

module.exports = router;
