(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b925"],{FTQU:function(t,e,a){"use strict";a.r(e);var n=a("wk8/"),r=a("6Uqi"),s=a("meRd"),i=a("7Qib"),u={name:"getTargetDayCount",components:{PageTable:r.a,query:s.a},data:function(){return{tableList:[{label:"代理商名称",width:"160",name:"productAgentName",checked:!0},{label:"手机号",width:"160",name:"mobile",checked:!0},{label:"日期",name:"date",width:"120",checked:!0},{label:"任务名称",name:"taskName",width:"120",checked:!0},{type:"popover",label:"任务类型",name:"taskType",width:"120",checked:!0},{type:"clickNumber",label:"待达标(人)",width:"100",name:"number",checked:!0}],listQuery:{agentFindType:3,agentsaletaskId:"",productAgentId:"",status:0,pageNum:1,pageSize:10,startDate:new Date((new Date).setDate((new Date).getDate()-7)),endDate:new Date},searchForm:[{type:"agentBox",tag:3},{type:"select",text:"任务名称",array:[],name:"agentsaletaskId",length:6,show:!0},{type:"select",text:"任务状态",array:[{text:"待达标",value:0},{text:"已达标",value:1},{text:"未达标",value:3}],name:"status",length:3,show:!0},{type:"time",page:"getTargetDayCount",array:[{text:"日期",value:1}],defaultDate:{day:0,availableDay:1},show:!0,disType:!0},{type:"searchBtn",text:"查询",name:"searchBtn"}],targetData:{list:[],pageNum:1,pageSize:10,total:0,loading:!1},selectData:[]}},watch:{"listQuery.productAgentId":function(t){this.listQuery.agentsaletaskId="",this.searchForm.map(function(t){"agentsaletaskId"==t.name&&(t.array=[])}),t&&this.GetAgentTask_ComboxFoo()},"listQuery.status":function(t){this.searchForm.map(function(e){"time"==e.type&&(0==t?(e.defaultDate={day:0,availableDay:1},e.disType=!0):(e.defaultDate={day:7,availableDay:30},e.disType=!1))})}},mounted:function(){},methods:{search:function(){this.targetData.pageNum=this.listQuery.pageNum=1,this.targetData.pageSize=this.listQuery.pageSize=10,this.select_query()},select_query:function(){var t=this;if(this.listQuery.productAgentId){var e={agentFindType:this.listQuery.agentFindType,agentsaletaskId:this.listQuery.agentsaletaskId,endDate:Object(i.g)(this.listQuery.endDate)+" 23:59:59",productAgentId:this.listQuery.productAgentId,startDate:Object(i.g)(this.listQuery.startDate)+" 00:00:00",status:this.listQuery.status,pageNum:this.listQuery.pageNum,pageSize:this.listQuery.pageSize};Object(n.e)(e).then(function(e){t.targetData.loading=!1,t.targetData.list=e.rows,t.targetData.total=e.total,t.tableList.map(function(e){"number"==e.name&&(0==t.listQuery.status?e.label="待达标(人)":1==t.listQuery.status?e.label="已达标(人)":3==t.listQuery.status&&(e.label="未达标(人)"))})}).catch(function(e){t.targetData.loading=!1})}else this.$message.warning("请选择一个代理商")},handleSelectionChange:function(t){this.selectData=t},sizeChange:function(t){this.targetData.pageSize=this.listQuery.pageSize=t,this.select_query()},currentChange:function(t){this.targetData.pageNum=this.listQuery.pageNum=t,this.select_query()},GetAgentTask_ComboxFoo:function(){var t=this;Object(n.a)({productAgentId:this.listQuery.productAgentId}).then(function(e){var a=[];e.rows.map(function(t){a.push({text:t.taskName,value:t.taskId})}),t.searchForm.map(function(t){"agentsaletaskId"==t.name&&(t.array=a)}),t.listQuery.agentsaletaskId=a[0].value}).catch(function(t){})},btnClickHandle:function(t){switch(t){case"export":this.getCheckData("商户任务达标日统计",this.selectData,this.tableList)}},handleJump:function(t,e,a){"number"==a.name&&this.pushPage("rewardManage/rewardStatistics",{status:this.listQuery.status,agentId:e.productAgentId,startDate:e.date,endDate:e.date,beforePage:"getTargetDayCount"})}}},l=a("KHd+"),o=Object(l.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("query",{attrs:{page:"labelManage",searchForm:t.searchForm,listQuery:t.listQuery,table_data:t.targetData},on:{handleFilter:t.search}}),t._v(" "),a("PageTable",{attrs:{tableList:t.tableList,tableData:t.targetData},on:{handleSelectionChange:t.handleSelectionChange,sizeChange:t.sizeChange,currentChange:t.currentChange,btnClickHandle:t.btnClickHandle,clickData:t.handleJump}})],1)},[],!1,null,null,null);o.options.__file="getTargetDayCount.vue";e.default=o.exports},"RU/L":function(t,e,a){a("Rqdy");var n=a("WEpk").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},Rqdy:function(t,e,a){var n=a("Y7ZC");n(n.S+n.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},SEkw:function(t,e,a){t.exports={default:a("RU/L"),__esModule:!0}},YEIV:function(t,e,a){"use strict";e.__esModule=!0;var n=function(t){return t&&t.__esModule?t:{default:t}}(a("SEkw"));e.default=function(t,e,a){return e in t?(0,n.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},"wk8/":function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"c",function(){return s}),a.d(e,"d",function(){return i}),a.d(e,"g",function(){return u}),a.d(e,"a",function(){return l}),a.d(e,"e",function(){return o}),a.d(e,"h",function(){return c}),a.d(e,"i",function(){return d}),a.d(e,"f",function(){return g});var n=a("t3Un");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({url:"/api/User/GetProductAgentRewardCXP",method:"post",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({url:"/api/User/GetProductAgentRewardCXYF",method:"post",data:t})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({url:"/api/User/GetProductAgentRewardYFT",method:"post",data:t})}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({url:"/api/User/getBankElementsLogList",method:"post",data:t})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({url:"/api/User/GetAgentTask_Combox",method:"post",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({url:"/api/User/GetUserTaskStatistics",method:"post",data:t})}function c(t){return Object(n.a)({url:"/api/User/getUserCouponCount",method:"post",data:t})}function d(t){return Object(n.a)({url:"/api/User/getUserMoneySettleBalance",method:"post",data:t})}function g(t){return Object(n.a)({url:"/api/User/SetUserAgentLoginStatus",method:"post",data:t})}}}]);