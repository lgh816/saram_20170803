var debug = require('debug')('ChangeHistoryDao');
var util = require('util');
var db = require('../lib/dbmanager.js');

var ChangeHistoryDao = function () {
}

// 변경 이력 조회 
ChangeHistoryDao.prototype.selectChangeHistory =  function (data) {
	var queryStr = db.getQuery('changeHistory', 'selectChangeHistory');
    debug(queryStr);
    return db.queryV2(queryStr, [data.id, data.date, data.change_column]);
}

//퇴퇴근 변경 이력 조회 
ChangeHistoryDao.prototype.selectInOutChangeCount =  function (data) {
	var queryStr = db.getQuery('changeHistory', 'selectInOutChangeCount');
    debug(queryStr);
    return db.queryV2(queryStr, [data.year, data.id, data.date, data.year, data.id, data.date]);
}

//변경 이력 등록
ChangeHistoryDao.prototype.inserChangeHistory =  function (data) {
	var queryStr = db.getQuery('changeHistory', 'inserChangeHistory');
    debug(queryStr);
    return db.queryV2(queryStr, [data.year, data.id,  data.date,  data.change_column, data.change_before, data.change_after, data.change_id]);
}

module.exports = new ChangeHistoryDao();