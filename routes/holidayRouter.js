var express = require('express');
var debug = require('debug')('holidayRouter');
var router = express.Router();
var Holiday = require('../service/Holiday.js');


router.route('/')
.get(function(req, res){
    var holiday = new Holiday({year:req.query.year});
    
    holiday.getHolidayList().then(function(result){
        debug(result);
        res.send(result);    
    });
    
}).post(function(req, res){
    // Insert user infomation (PUT)
    debug(req.body);
     
    var holiday = new Holiday(req.body);
    debug(req.body);
    holiday.insertHoliday().then(function(){
        res.send({msg : "Insert Data Success", count : 1});    
    });
});

router.route('/bulk')
.post(function(req,res){
    var count = 0;
    for(var key in req.body){
        var holiday = new Holiday(req.body[key]);
        debug(req.body[key]);
        holiday.insertHoliday();
        count ++;
    }
    res.send({msg : "Insert Data Success", count : count});
})

router.route('/:date')
.delete(function(req,res){
    debug(req.params.date);
    
    var holiday = new Holiday({date: req.params.date});
    
    holiday.deleteHoliday().then(function(){
        res.send({msg : "Delete Data Success", count: 1});    
    });
    
    
});

module.exports = router;
