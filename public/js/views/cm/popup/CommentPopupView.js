/**
 * 근태 자료 comment 등록 팝업
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'util',
	'resulttimefactory',
	'schemas',
	'grid',
	'dialog',
	'datatables',
	'cmoment',
	'i18n!nls/common',
	'lib/component/form',
	'core/BaseView',
	'models/sm/UserModel',
	'models/cm/CommentModel',
	'code',
	'models/sm/SessionModel',
	'collection/common/HolidayCollection',
	'text!templates/default/datepickerChange.html',
], function(
	$, _, Backbone, Util, ResultTimeFactory, Schemas, Grid, Dialog, Datatables, Moment,
	i18nCommon, Form,
	BaseView,
	UserModel, CommentModel, Code, SessionModel, HolidayCollection,
	DatePickerChangeHTML
) {

	var CommentPopupView = Backbone.View.extend({
		initialize: function(data) {
			this.selectData = data;
			console.log(this.selectData);
		},
		render: function(el) {
			var dfd = new $.Deferred();

			if (!_.isUndefined(el)) this.el = el;
			var _view = this;

			var userModel = new UserModel({
				id: this.selectData.id
			});

			var overtimeCollection = [];
			for(var i=0; i<= 40; i++){
				overtimeCollection.push({
					key : i*10,
					value : i*10
				});
			}

			userModel.fetch().done(function(result) {
				if (result.length > 0) {
					var formop = {
						el: _view.el,
						form: undefined,
						group: [{
							name: "destInfo",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.GROUP_DEST,
							initOpen: true,
							type: 'detail',
							titleVisible : false
						}, {
							name: "modifyItem",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.GROUP_NEW,
							initOpen: true,
							titleVisible : false
						}, {
							name: "overtimeItem",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.GROUP_OVERTIME,
							initOpen: true,
							titleVisible : false
						}],

						childs: [{
							type: "input",
							name: "date",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.DATE,
							value: _view.selectData.date,
							group: "destInfo",
							disabled: true
						}, {
							type: "input",
							name: "department",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.DEPARTMENT,
							value: _view.selectData.department,
							group: "destInfo",
							disabled: true
						}, {
							type: "input",
							name: "name",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.NAME,
							value: _view.selectData.name,
							group: "destInfo",
							disabled: true
						}, {
							type: "checkBox",
							name: "normal",
							checkLabel: '근태 정상처리 요청',
							value: false,
							group: "modifyItem",
							full: true
						}, {
							type: "input",
							name: "inTimeBefore",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.IN_TIME_BEFORE,
							value: _view.selectData.in_time,
							group: "modifyItem",
							disabled: true
						}, {
							type: "datetime",
							name: "inTimeAfter",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.IN_TIME_AFTER,
							format: "YYYY-MM-DD HH:mm",
							group: "modifyItem"
						}, {
							type: "input",
							name: "outTimeBefore",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.OUT_TIME_BEFORE,
							value: _view.selectData.out_time,
							group: "modifyItem",
							disabled: true
						}, {
							type: "datetime",
							name: "outTimeAfter",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.OUT_TIME_AFTER,
							format: "YYYY-MM-DD HH:mm",
							group: "modifyItem"
						}, {
							type: "text",
							name: "comment",
							label: i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.FORM.COMMENT,
							group: "modifyItem"
						}, {
							type: "input",
							name: "approval",
							label: "결재자",
							value: result[0].approval_name,
							disabled: true,
							group: "modifyItem"
						}, {
							type: "checkBox",
							name: "approvalOvertime",
							checkLabel: '야근 상신 여부',
							value: false,
							group: "overtimeItem",
							full: true
						}, {
							type:"combo",
							name:"except",
							label:"제외시간(분)",
							collection : overtimeCollection,
							value: 0,
							group:"overtimeItem"
						}, {
							type:"input",
							name:"overtimeReason",
							label:"야근 상신 사유",
							group:"overtimeItem",
							full: true
						// }, {
						// 	type:"input",
						// 	name:"changeOverTime",
						// 	label:"초과근무(분)",
						// 	value:_view.selectData.over_time,
						// 	disabled: true,
						// 	group:"overtimeItem"
						
						// }, {
						// 	type: "combo",
						// 	name: "comment_type",
						// 	label: "유형",
						// 	data : 0,
						// 	collection : [
						// 		{key : 0, value : "-"},
						// 		{key : 1, value : "결재"},
						// 		{key : 2, value : "일반"}
						// 	],
						// 	group: "modifyItem",
						}]
					};

					var _form = new Form(formop);

					_form.render().done(function() {
						_view.form = _form;
						var normal = _view.form.getElement("normal");
						var overtime = _view.form.getElement("approvalOvertime");
						var inTimeAfter = $(_view.form.getElement("inTimeAfter")).find("input");
						var outTimeAfter = $(_view.form.getElement("outTimeAfter")).find("input");
						$(_view.form.getElement("approval")).data("id", result[0].approval_id);
						
						$(normal).click(function(evt) {
							if ($(evt.currentTarget).find("input").is(":checked")) {
								$(inTimeAfter).attr("disabled", "true");
								$(inTimeAfter).val('');
								$(outTimeAfter).attr("disabled", "true");
								$(outTimeAfter).val('');
								$(overtime).find('input[type=checkbox]').prop("checked", false);
								$(overtime).next().hide();
								$(overtime).find('input[type=checkbox]').attr("disabled", true);
							}else {
								$(inTimeAfter).removeAttr("disabled");
								$(outTimeAfter).removeAttr("disabled");
								$(overtime).find('input[type=checkbox]').removeAttr("disabled");
							}
						});

						// 야근 상신 여부
						$(overtime).next().hide();
						$(overtime).next().next().hide();
						$(overtime).click(function(evt) {
							if ($(evt.currentTarget).find("input").is(":checked")) {
								$(this).next().show();
								$(this).next().next().show();
							}
							else {
								$(this).next().hide();
								$(this).next().next().hide();
							}
						});
						
						_view.form.getElement("overtimeReason").find('label').css('margin-top', '10px');

						_view.holidayCollection = new HolidayCollection();
						_view.holidayCollection.fetch({
							data :  {
								year : Moment().year()
							}
						}).done(function(){
							console.log(_view.holidayCollection);
							var day = Moment().hour(0).minute(0).second(0);
							var holidays = _view.holidayCollection.pluck("date");
							
							var overTimeApprovalDate = "";
							for(var count = 0 ; ; day.add(-1,"days")){
								if(day.day() == 0 || day.day() == 6 || _.indexOf(holidays,day.format("YYYY-MM-DD")) > -1){
									
								} else {
									console.log(day.format("YYYY-MM-DD"));
									count ++;
									if ( count == 4 ) {
										overTimeApprovalDate = day.format("YYYY-MM-DD");
										break;
									}
								}
							}
							if ( overTimeApprovalDate > _view.selectData.date ) {
								$(overtime).remove();
							}
						});


						// var type = $(_view.form.getElement("comment_type"));
						// type.find("select").change(function(evt){
						// 	var value = $(this).val();
							
						// 	switch(value){
						// 		case "0" :
						// 		case "1" :
						// 			$(normal).find("input").removeAttr("disabled", "true");
						// 			if($(normal).find("input").is(":checked")){
						// 				$(inTimeAfter).attr("disabled", "true");
						// 				$(outTimeAfter).attr("disabled", "true");	
						// 			}else{
						// 				$(inTimeAfter).removeAttr("disabled");
						// 				$(outTimeAfter).removeAttr("disabled");
						// 			}
						// 			break;
						// 		case "2" :
						// 			$(normal).find("input").attr("disabled", "true");
						// 			$(inTimeAfter).attr("disabled", "true");
						// 			$(outTimeAfter).attr("disabled", "true");
						// 			break;
						// 	}
						// });
						dfd.resolve();
					}).fail(function() {
						dfd.reject();
					});
				}
			});


			return dfd.promise();
		},
		insertComment: function(opt) {
			this.getInsertData(opt);
		},
		
		getInsertData: function(opt) {
			var data = this.form.getData();
			var newData = {
				comment: data.comment,
				date: this.selectData.date,
				id: this.selectData.id,
				year: this.selectData.year,
				approval_name: data.approval,
				approval_id: $(this.form.getElement("approval")).data("id"),
				want_in_time : null,
				want_out_time : null,
				want_normal : 0,
				appr_overtime: data["approvalOvertime"]
			};

			if( data["approvalOvertime"] && data["overtimeReason"] == "" ){
				Dialog.warning("야근 상신 사유를 입력하여 주시기 바랍니다.");
				return null;
			}

			// switch(data.comment_type){
			// 	case "0" :
			// 		Dialog.warning("Comment 유형을 선택해 주십시오 <br> (정상처리, 출퇴근시간 변경시 결재, 이외의 경우는 일반)");
			// 		break;
			// 	case "1" : // approval
			if (data.inTimeAfter != "") {
				newData.want_in_time = data.inTimeAfter;
			}

			if (data.outTimeAfter != "") {
				newData.want_out_time = data.outTimeAfter;
			}

			var normal = this.form.getElement("normal");
			
			if(!_.isUndefined(normal)){
				if (normal.find("input").is(":checked")) {
					newData.want_normal = 1;
					newData.want_in_time = null;
					newData.want_out_time = null;
				}
				else {
					newData.want_normal = 0;
				}
			}
			newData.before_in_time = this.selectData.in_time;
			newData.before_out_time = this.selectData.out_time;
			
			if( newData["want_normal"] == 0
				&&  _.isNull(newData["want_in_time"]) 
				&& _.isNull(newData["want_out_time"])){
				Dialog.warning("근태 정상처리요청, 출퇴근 수정요청중 한가지는 입력되어야 합니다.");
				return null;
			}

			// case "2" : // normal
			if (newData.comment.length == 0) {
				Dialog.warning(i18nCommon.COMMUTE_RESULT_LIST.COMMENT_DIALOG.MSG.EMPTY_COMMENT_ERR);
				return null;
			}
			
			var need_confirm = 0
			if (newData.want_in_time !== null) {
				// 출근시간 : 당일 06:00 ~ 18:00 이외의 시간에 경고 문구 출력
				var limitTimeA = Moment(newData.date+' 06:00').format('YYYY-MM-DD HH:mm')
				var limitTimeB = Moment(newData.date+' 18:00').format('YYYY-MM-DD HH:mm')
				if (newData.want_in_time < limitTimeA || newData.want_in_time > limitTimeB) {
					need_confirm = 1
				}
			}

			if (newData.want_out_time !== null) {
				// 퇴근시간 : 당일 11:00 ~ 다음날 12:00 이외의 시간에 경고 문구 출력
				var limitTimeA = Moment(newData.date+' 11:00').format('YYYY-MM-DD HH:mm')
				var limitTimeB = Moment(newData.date+' 12:00').add(1, 'days').format('YYYY-MM-DD HH:mm')
				if (newData.want_out_time < limitTimeA || newData.want_out_time > limitTimeB) {
					need_confirm = 1
				}
			}
			
			if (need_confirm === 1) {
				Dialog.confirm({
					msg : "근태일자와 수정요청 시간의 차이가 큽니다. 이대로 등록을 할까요?",
					action:function(){
						newData["state"] = i18nCommon.COMMENT.STATE.ACCEPTING;
						var commentModel = new CommentModel();
						return commentModel.save(newData, opt);
					},
					actionCallBack:function(res){//response schema
					},
					errorCallBack:function(){
					}
				});
			} else {
				newData["state"] = i18nCommon.COMMENT.STATE.ACCEPTING;
				var commentModel = new CommentModel();
				commentModel.save(newData, opt);
			}
		},
		
		getData: function(){
			return _.extend(this.form.getData());
		}
	});

	return CommentPopupView;
});
