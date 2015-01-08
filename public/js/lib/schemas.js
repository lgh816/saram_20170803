// Author: sanghee park <novles@naver.com>
// Create Date: 2014.12.18
define([
  'jquery',
  'underscore', 
  'backbone',
  'log',
  'util'
], function($, _, Backbone, log, Util){
    var LOG=log.getLogger('Schemas');
    var _defaultSchema = {
        //Model
        session:{
            user:null,
            id:null,
            auth:null,
            isLogin:false,
            init:false,
            msg:null
        },
        user: {
            id: null,
            name: null,
            password: null,
            department: null,
            name_commute: null,
            join_company: null,
            leave_compan: null,
            privilege: null,
            admin : null
        },
        auth:{
        },
        //UI 
        headTemp:{
            title:"",
            subTitle:""
        },
        //ICON
        glyphicon:{
            refresh:"glyphicon-refresh",
            add:"glyphicon-plus",
            remove:"glyphicon-remove"
        },
        
        //API
        grid:{
            el:null,
            id:null,
            column:[],
            collection:null,
            dataschema:[],
            buttons:[]
        }
    }
    
    //Singleton SessionManager;
    var Schemas=function(schemaName){
        var _schema=_.noop();
        _schema=_defaultSchema[schemaName];
        
        //data에 있는 값을 schema에 있는 key에 존재하는 값만 셋팅해서 반환한다.
        var _generator = function (data) {  
            data = data || {};
            var defauls=_.defaults(data, _schema);
            var keys= _.keys(_schema);
            var a=_.pick(_.defaults(data, _schema), _.keys(_schema)); 
           // console.log(a);
            return _.pick(_.defaults(data, _schema), _.keys(_schema)); 
        }
        
        //설정되지 않은 값은 기본값으로 셋팅된 객체 반환
        var __defaultGenerator = function(data){    
            data = data || {};
            return _.defaults(data, _schema);
        }
        var _getDefaultValue = function(fieldName){
            if (_.has(_schema, fieldName)){
                return _schema[fieldName]
            } else {
                LOG.debug("Not find Field:"+fieldName);
            }
        }
		return {
		    value:_getDefaultValue,
		    get:_generator,
		    getDefault:__defaultGenerator
		}
    };
     var _getSchema = function (schemaName) {
        if (_.has(_defaultSchema, schemaName)){
            return new Schemas(schemaName);
        } else {
            LOG.debug("Not find Schema:"+schemaName);
        }
    }
    return {
        getSchema:_getSchema
    }
});