(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20e8"],{"21bm":function(n,e,t){"use strict";t.r(e);var a=t("X4fA"),r=t("7Qib"),i=t("Gh03"),u=t("6Uqi"),l=t("meRd"),o={name:"labelFlow",components:{PageTable:u.a,query:l.a},data:function(){return{tableList:[{label:"开始吉亚序列号(UUID)",width:"160px",name:"startuuid",checked:!0},{label:"结束吉亚序列号(UUID)",width:"210px",name:"enduuid",checked:!0},{label:"数量",width:"140px",name:"num",checked:!0},{label:"状态",width:"100px",name:"record",checked:!0},{label:"操作人",width:"100px",name:"operatorName",checked:!0},{label:"操作时间",width:"220px",name:"operatorDate",checked:!0},{label:"备注",width:"220px",name:"content",checked:!0}],labelData:{list:[],pageNum:1,pageSize:10,total:0,loading:!1},listQuery2:{},listQuery:{jyuuid:"",lastId:"",pageNum:1,pageSize:10,startDate:new Date((new Date).setFullYear((new Date).getFullYear()-3)),endDate:new Date,type:0},searchForm:[{type:"input",text:"吉亚序列号",name:"jyuuid",length:6,show:!0},{type:"select",text:"状态",array:[{text:"全部",value:0},{text:"入库",value:1},{text:"下拨",value:2},{text:"绑定",value:3},{text:"回收",value:4}],name:"type",length:3,show:!0},{type:"time",page:"labelFlow",array:[{text:"操作时间",value:1}],show:!0},{type:"searchBtn",text:"查询",name:"searchBtn"}]}},mounted:function(){this.userType=Object(a.f)()},methods:{search:function(){this.labelData.pageNum=this.listQuery.pageNum=1,this.labelData.pageSize=this.listQuery.pageSize=10,this.select_query()},select_query:function(){var n=this;this.listQuery2=this.copy_obj(this.listQuery),this.listQuery2.startDate=Object(r.g)(this.listQuery.startDate)+" 00:00:00",this.listQuery2.endDate=Object(r.g)(this.listQuery.endDate)+" 23:59:59",this.labelData.loading=!0,Object(i.g)(this.listQuery2).then(function(e){n.labelData.loading=!1,n.labelData.list=0==e.rows.length?[]:e.rows[0].datas,n.labelData.total=e.total}).catch(function(e){n.labelData.loading=!1})},handleSelectionChange:function(n){this.selectData=n},sizeChange:function(n){this.labelData.pageSize=this.listQuery.pageSize=n,this.select_query()},currentChange:function(n){this.labelData.pageNum=this.listQuery.pageNum=n,this.select_query()}}},c=(t("L/r4"),t("KHd+")),s=Object(c.a)(o,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"app-container"},[t("query",{attrs:{page:"labelManage",searchForm:n.searchForm,listQuery:n.listQuery,table_data:n.labelData,isQuery:!0},on:{handleFilter:n.search}}),n._v(" "),t("PageTable",{attrs:{indexID:!0,noIndex:!0,tableList:n.tableList,tableData:n.labelData},on:{handleSelectionChange:n.handleSelectionChange,sizeChange:n.sizeChange,currentChange:n.currentChange}})],1)},[],!1,null,"7e34aafa",null);s.options.__file="labelFlow.vue";e.default=s.exports},"8vhF":function(n,e,t){(n.exports=t("I1BE")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},Gh03:function(n,e,t){"use strict";t.d(e,"n",function(){return r}),t.d(e,"j",function(){return i}),t.d(e,"l",function(){return u}),t.d(e,"i",function(){return l}),t.d(e,"e",function(){return o}),t.d(e,"a",function(){return c}),t.d(e,"b",function(){return s}),t.d(e,"c",function(){return d}),t.d(e,"f",function(){return h}),t.d(e,"h",function(){return p}),t.d(e,"m",function(){return f}),t.d(e,"o",function(){return m}),t.d(e,"g",function(){return b}),t.d(e,"d",function(){return y}),t.d(e,"k",function(){return g});var a=t("t3Un");function r(n){return Object(a.a)({url:"/api/Terminal/getSysDeviceOrderList",method:"post",data:n})}function i(n){return Object(a.a)({url:"/api/Terminal/deliverSysDevice",method:"post",data:n})}function u(n){return Object(a.a)({url:"/api/Terminal/deliverSysDeviceUser",method:"post",data:n})}function l(n){return Object(a.a)({url:"/api/Terminal/UpdateOrderStatus",method:"post",data:n})}function o(n){return Object(a.a)({url:"/api/Terminal/GetBindTerminalList",method:"post",data:n})}function c(n){return 1==n.type?Object(a.a)({url:"/api/Terminal/AddPayTag",method:"post",data:n}):Object(a.a)({url:"/api/Terminal/AddPayTag",method:"post",headers:{"Content-Type":"multipart/form-data"},data:n})}function s(n){return Object(a.a)({url:"/api/Terminal/AddPayTagMore",method:"post",data:n})}function d(n){return Object(a.a)({url:"/api/Terminal/AllocatePayTag",method:"post",data:n})}function h(n){return Object(a.a)({url:"/api/Terminal/GetPayTags",method:"post",data:n})}function p(n){return Object(a.a)({url:"/api/Terminal/RecoveryPayTags",method:"post",data:n})}function f(n){return Object(a.a)({url:"/api/Terminal/getDeductionMoneyPlanList",method:"post",data:n})}function m(n){return Object(a.a)({url:"/api/Terminal/updateExeDate",method:"post",data:n})}function b(n){return Object(a.a)({url:"/api/Terminal/PayTagRecording",method:"post",data:n})}function y(n){return Object(a.a)({url:"/api/Terminal/CopyPosManufacturerModel",method:"post",data:n})}function g(n){return Object(a.a)({url:"/api/Terminal/deliverSysDeviceTag",method:"post",data:n})}},"L/r4":function(n,e,t){"use strict";var a=t("gRC4");t.n(a).a},"RU/L":function(n,e,t){t("Rqdy");var a=t("WEpk").Object;n.exports=function(n,e,t){return a.defineProperty(n,e,t)}},Rqdy:function(n,e,t){var a=t("Y7ZC");a(a.S+a.F*!t("jmDH"),"Object",{defineProperty:t("2faE").f})},SEkw:function(n,e,t){n.exports={default:t("RU/L"),__esModule:!0}},YEIV:function(n,e,t){"use strict";e.__esModule=!0;var a=function(n){return n&&n.__esModule?n:{default:n}}(t("SEkw"));e.default=function(n,e,t){return e in n?(0,a.default)(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}},gRC4:function(n,e,t){var a=t("8vhF");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t("SZ7m").default)("f74f46a2",a,!0,{})}}]);