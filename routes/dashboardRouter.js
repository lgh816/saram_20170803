// Author: sanghee park <novles@naver.com>
// Create Date: 2014.1.22

var express = require('express');
var _ = require("underscore"); 
var debug = require('debug')('dashboardRouter');
var sessionManager = require('../lib/sessionManager');
var router = express.Router();
var Dashboard = require('../service/Dashboard.js');
var moment = require('moment');
var Vacation = require('../service/Vacation.js');
var Statistics = require('../service/StatisticsService.js');
var Message = require('../service/Message.js');

router.route('/workingSummary')
.get(function(req, res) {

    var _dashboard= new Dashboard();
    var _userId=sessionManager.get(req.cookies.saram).user.id;

    if (sessionManager.get(req.cookies.saram).user.admin >= 1) {
      if (req.query.id !== undefined) {
        _userId = req.query.id;
      }
    }
    var params={
        start:req.query.start,
        end:req.query.end,
        year:req.query.start.substr(0,4),
        userId:_userId
    };
    
    _dashboard.getWorkingSummary(params).then(function (result) {
      var targetYear = moment().format('YYYY');
      var params2 = {year: targetYear, id: _userId};
      // 근태 정보가 없는 경우 빈값을 생성해야 함. 사장님 및 임원의 경우 없음.
      if (result.length === 0) {
        result[0] = {};
      }
      Vacation.getVacationById(params2).then(function (vacationResult) {
        if (vacationResult.length === 1) {
          // 2019.07.26 주석
          // if (result.length === 0) {
          //   result[0] = {};
          //   result[0].total_working_day = "00"; ???
          // }
          result[0].vacation_year = targetYear;
          result[0].vacation_year_remain = vacationResult[0].total_day - vacationResult[0].used_holiday;
        }

        Statistics.selectAvgInOutTime(req.query.start.substr(0,4), req.query.start, req.query.end.substr(0,10), _userId).then(function(resultAvg) {
          if (resultAvg[0].in_time_avg !== null) {
            result[0].in_time_avg = resultAvg[0].in_time_avg;
            result[0].out_time_avg = resultAvg[0].out_time_avg;
          }

          // cleanday 정보 추가
          Message.getCleanDay().then(function (resultCleanDay) {
            if (resultCleanDay[0].visible === 1) {
              result[0].cleanDay = resultCleanDay[0].text;
            }
            res.send(result);
          });
        });
      });
    }).catch(function (e) {
      console.error(e);
      res.send(e);
      });
});

router.route('/commuteSummary')
.get(function(req, res){
    var _dashboard= new Dashboard();
    var _userId=sessionManager.get(req.cookies.saram).user.id;

    if (sessionManager.get(req.cookies.saram).user.admin >= 1) {
      if (req.query.id !== undefined) {
        _userId = req.query.id;
      }
    }
    
    var params={
        start:req.query.start,
        end:req.query.end,
        userId:_userId
    };

    _dashboard.getCommuteSummary(params).then(function(result){
        debug("Complete Select CommuteSummary.");
        res.send(result);
    }).catch(function(e){
        debug("Error Select CommuteSummary.");
        res.send(e);
    });
});

router.route('/attendance')
.get(function(req, res){
    var _dashboard= new Dashboard();
    var _userId=sessionManager.get(req.cookies.saram).user.id;

    if (sessionManager.get(req.cookies.saram).user.admin >= 1) {
      if (req.query.id !== undefined) {
        _userId = req.query.id;
      }
    }

    var params={
        start:req.query.start,
        end:req.query.end,
        userId:_userId
    };

    _dashboard.getAttendacne(params).then(function(result){
        debug("Complete Select Attendance.");
        res.send(result);
    }).catch(function(e){
        debug("Error Select Attendance.");
        res.send(e);
    });
});
module.exports = router;



