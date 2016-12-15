/**
 * Created by Joe on 11/17/16.
 */
var express = require('express');
var router = express.Router();
var resume_dal = require('../model/resume_dal.js');
var account_dal = require('../model/account_dal');
var skill_dal = require('../model/skill_dal');
var company_dal = require('../model/company_dal');
var school_dal = require('../model/school_dal');


// View All resumes
// WHATS UP WITH /all
router.get('/all', function(req, res) {
    resume_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('resume/resumeViewAll', { 'result':result });
        }
    });

});

// View the resume for the given id
router.get('/', function(req, res){
    if(req.query.resume_id == null) {
        res.send('resume_id is null');
    }
    else {
        resume_dal.getById(req.query.resume_id, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('resume/resumeViewById', {'result': result});
            }
        });
    }
});

router.get('/add', function(req, res){
     account_dal.getAll(function(err, account){
        skill_dal.getAll(function(err, skill){
            company_dal.getAll(function(err, company){
                school_dal.getAll(function(err, school){
                        if (err) {
                            res.send(err);
                        }
                        else {
                            res.render('resume/resumeAdd', { 'account': account, 'skill': skill, 'company': company, 'school': school });


                        }

                    });
                });
            });
     });
});

router.get('/edit', function (req, res) {
    if (req.query.resume_id == null) {
        res.send('resume_id is null');
    }
    else {
        resume_dal.getById(req.query.resume_id, function (err, resume) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('resume/resumeUpdate', {'resume': resume});
            }

        });
    }
});

// router.get('/edit', function (req, res) {
//     account_dal.getAll(function (err, account) {
//         skill_dal.getAll(function (err, skill) {
//             company_dal.getAll(function (err, company) {
//                 school_dal.getAll(function (err, school) {
//                     resume_dal.getById(function(err, resume) {
//                         if (err) {
//                             res.send(err);
//                         }
//                         else {
//                             res.render('resume/resumeUpdate', {'account': account, 'skill': skill, 'company': company, 'school': school, 'resume': resume });
//
//
//                         }
//                     });
//                 });
//             });
//         });
//     });
// });


router.get('/insert', function(req, res){
    if (req.query.resume_name == null) {
        res.send('Resume Name must be provided.');
    }
    else if (req.query.account_id == null) {
        res.send('An account must be selected');
    }
    else if (req.query.skill_id == null) {
        res.send('A skill name must be entered');
    }
    else if (req.query.company_id == null) {
        res.send('A company name must be entered');
    }
    else if (req.query.school_id == null) {
        res.send('A school name must be entered');
    }
    else {
        resume_dal.insert(req.query, function(err, result){
            if(err) {
                res.send(err);
            }
            else {
                res.redirect(302, '/resume/all');
            }
        });

    }
});


// update example
// router.get('/update', function(req, res) {
//     company_dal.update(req.query, function(err, result){
//         res.redirect(302, '/company/all');
//     });
// });



// router.get('/update', function(req, res){
//     if (req.query.resume_name == null) {
//         res.send('Resume Name must be provided.');
//     }
//     else if (req.query.account_id == null) {
//         res.send('An account must be selected');
//     }
//     else if (req.query.skill_id == null) {
//         res.send('A skill name must be entered');
//     }
//     else if (req.query.company_id == null) {
//         res.send('A company name must be entered');
//     }
//     else if (req.query.school_id == null) {
//         res.send('A school name must be entered');
//     }
//     else {
//         resume_dal.insert(req.query, function(err, result){
//             if(err) {
//                 res.send(err);
//             }
//             else {
//                 res.redirect(302, '/resume/all');
//             }
//         });
//
//     }
// });

router.get('/delete', function(req, res){
    if (req.query.resume_id == null) {
        res.send('resume_id is null');
    }
    else {
        resume_dal.delete(req.query.resume_id, function(err, result){
            if(err){
                res.send('resume_id is null');
            }
            else {
                res.redirect(302, '/resume/all');
            }
        });
    }
});

module.exports = router;
