var db = require('../lib/dbmanager.js');
var _ = require('underscore');
var group = "usage";

var OfficeItemUsageDao = function () {
};

OfficeItemUsageDao.prototype.selectUsageDetailList = function(data){
    if (_.isUndefined(data) || data.user == "Excel") {
        return db.query(group, "selectUsageDetailListAll");
    } else if (data.user == "") {
        return db.query(group, "selectUsageDetailListbyDept", [data.dept]);
    } else {
        return db.query(group, "selectUsageDetailList", [data.user]);
    }
};

OfficeItemUsageDao.prototype.selectUsageList = function(data, id) {
    if(id !== "%") {
        return db.query(group, 'selectUsageListbyUser', [id])
    }

    if(_.isUndefined(data.dept) || data.dept == "전체") {
        return db.query(group, 'selectUsageListALL');
    } else {
        return db.query(group, 'selectUsageList', [data.dept, data.dept]);
    }
};

module.exports = new OfficeItemUsageDao();