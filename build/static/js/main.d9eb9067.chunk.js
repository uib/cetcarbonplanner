(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/emissionsguide.69c49c1a.jpg"},47:function(e,t,a){e.exports=a(73)},52:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(36),r=a.n(s),l=(a(52),a(15)),o=a(7),c=a(8),u=a(11),m=a(9),h=a(5),p=a(10),d=a(76),v=a(77),y=a(37),b=a(75),g=a(74),f=function(e){return i.a.createElement("label",{onClick:e.onclick},i.a.createElement(g.a,{size:"sm",variant:e.checked?{edit:"outline-info",delete:"outline-dark",include:"primary"}[e.type]:"outline-secondary",id:e.id},e.type))},w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleDelete=e.handleDelete.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object.keys(this.props.answerlist[0]);return this.buildTable(e,this.props.answerlist)}},{key:"buildTable",value:function(e,t){var a=this;return i.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,size:"sm",style:{fontSize:13}},i.a.createElement("tbody",null,t.map(function(t,n){return a.buildRow(e,t,n)})))}},{key:"buildRow",value:function(e,t,a){return i.a.createElement("tr",{key:"row"+a},e.map(function(e,a){return i.a.createElement("td",{key:a+"-"+e,className:"text-center align-middle"},t[e])}),i.a.createElement("td",{key:"del"+a},i.a.createElement(f,{type:"delete",id:a,onclick:this.handleDelete})))}},{key:"handleDelete",value:function(e){this.props.deleteFunction(e.target.id)}}]),t}(n.Component),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={quantity:1,answer:"",answerlist:[]},e.increase=function(){e.changeAmount(1)},e.decrease=function(){e.changeAmount(-1)},e.changeHours=e.changeAmount.bind(Object(h.a)(e)),e.saveListDataPoint=e.saveListDataPoint.bind(Object(h.a)(e)),e.radioSelect=e.radioSelect.bind(Object(h.a)(e)),e.submitAnswer=e.submitAnswer.bind(Object(h.a)(e)),e.deleteFromAnswerList=e.deleteFromAnswerList.bind(Object(h.a)(e)),e.handleTextInput=e.handleTextInput.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.q;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement(v.a,null,i.a.createElement(y.a,{xs:7},i.a.createElement("h3",null,e.heading),i.a.createElement("p",null,e.text),"name"===e.type&&this.getInputForm(e.type),("select"===e.type||"quantityselect"===e.type)&&this.getRadioSelectList(),("quantity"===e.type||"quantityselect"===e.type)&&this.quantityButtons(e.type),this.buttonRow(e.type)),i.a.createElement(y.a,null,"quantityselect"===e.type&&this.state.answerlist.length>0&&i.a.createElement(w,{answerlist:this.state.answerlist,deleteFunction:this.deleteFromAnswerList})))))}},{key:"componentDidMount",value:function(){void 0!==this.props.previousAnswer&&("quantityselect"===this.props.q.type?this.setState({answerlist:this.props.previousAnswer}):"quantity"===this.props.q.type?this.setState({quantity:this.props.previousAnswer}):this.setState({answer:this.props.previousAnswer}))}},{key:"deleteFromAnswerList",value:function(e){var t=Object(l.a)(this.state.answerlist);t.splice(e,1),this.setState({answerlist:t})}},{key:"getInputForm",value:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"text",value:this.state.answer,onChange:this.handleTextInput,placeholder:"name"===e?this.props.defaultName:""}))}},{key:"getRadioSelectList",value:function(){var e=this;return i.a.createElement("form",null,i.a.createElement("div",{className:"form-check"},this.props.q.alternatives.map(function(t){return i.a.createElement("div",{key:t},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{className:"form-check-input",type:"radio",value:t,checked:e.state.answer===t,onChange:e.radioSelect}),t))})))}},{key:"handleTextInput",value:function(e){this.setState({answer:e.target.value})}},{key:"radioSelect",value:function(e){e.persist(),this.setState({answer:e.target.value})}},{key:"saveListDataPoint",value:function(){var e=Object(l.a)(this.state.answerlist);e.push({mode:this.state.answer,quantity:this.state.quantity}),this.setState({answerlist:e})}},{key:"getAnswer",value:function(e){switch(e){case"quantityselect":return this.state.answerlist;case"quantity":return this.state.quantity;case"name":return""!==this.state.answer?this.state.answer:this.props.defaultName;default:return this.state.answer}}},{key:"buttonRow",value:function(e){var t="btn btn-outline-secondary ";return i.a.createElement("div",null,i.a.createElement("button",{className:t,onClick:this.props.previousQuestion,disabled:this.props.isFirstQ},"Previous"),i.a.createElement("button",{className:"btn btn-primary",onClick:this.submitAnswer,disabled:!("name"===e||"quantity"===e||"quantityselect"===e&&this.state.answerlist.length>0||"quantityselect"!==e&&this.state.answer.length>0)},"Next"),i.a.createElement("button",{className:t,onClick:this.props.cancel},"Cancel"))}},{key:"submitAnswer",value:function(){this.props.reportAnswerToSurvey(this.getAnswer(this.props.q.type),this.props.q.type)}},{key:"quantityButtons",value:function(e){var t="btn btn-outline-secondary ",a=this.state.quantity;return i.a.createElement("div",null,this.props.q.quantifier,":",i.a.createElement("br",null),i.a.createElement("button",{className:t,onClick:this.decrease},"-"),i.a.createElement("button",{className:t+"w-25"},a),i.a.createElement("button",{className:t,onClick:this.increase},"+"),"quantityselect"===e&&i.a.createElement("button",{className:t,onClick:this.saveListDataPoint,disabled:!this.state.answer},"Add"))}},{key:"changeAmount",value:function(e){var t=this.state.quantity+e;t>0&&this.setState({quantity:t})}}]),t}(n.Component),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={answers:[],nextQ:0,name:"",key:"",plot:void 0},e.receiveAnswerFromQuestion=e.receiveAnswerFromQuestion.bind(Object(h.a)(e)),e.previousQuestion=e.previousQuestion.bind(Object(h.a)(e)),e.returnToMain=e.returnToMain.bind(Object(h.a)(e)),e.cancel=e.cancel.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.nextQ>=this.props.surveydata.questions.length?this.surveyComplete():this.getQuestion()}},{key:"getQuestion",value:function(){return i.a.createElement(E,{cancel:this.cancel,key:"Q"+this.state.nextQ+":"+this.props.dataset.UUID,q:this.props.surveydata.questions[this.state.nextQ],reportAnswerToSurvey:this.receiveAnswerFromQuestion,previousQuestion:this.previousQuestion,previousAnswer:this.state.answers[this.state.nextQ]||this.props.dataset.answers[this.state.nextQ],isLastQ:this.state.nextQ===this.props.surveydata.questions.length-1,isFirstQ:0===this.state.nextQ,plotFunction:this.props.plotFunction,defaultName:this.props.defaultName})}},{key:"componentDidMount",value:function(){this.setState({key:this.props.dataset.UUID})}},{key:"componentDidUpdate",value:function(){this.props.dataset.UUID!==this.state.key&&this.setState({answers:[],nextQ:0,name:"",key:this.props.dataset.UUID})}},{key:"previousQuestion",value:function(){this.setState({nextQ:this.state.nextQ-1})}},{key:"receiveAnswerFromQuestion",value:function(e,t){var a=Object(l.a)(this.state.answers);a[this.state.nextQ]=e;var n={answers:a,nextQ:this.state.nextQ+1};"name"===t&&(n.name=""===e?this.props.defaultName:e),this.setState(n)}},{key:"returnToMain",value:function(){this.props.reportAnswers(this.props.dataset,this.state.name,this.state.answers)}},{key:"cancel",value:function(){this.props.reportAnswers()}},{key:"surveyComplete",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Click to save data. View CO2 charts on Summary page."),i.a.createElement("button",{className:"btn btn-primary ",onClick:this.returnToMain},"Save data"),i.a.createElement("button",{className:"btn btn-outline-primary ",onClick:this.cancel},"Cancel"))}}]),t}(n.Component),C=a(46),O=a(17),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if(this.props.data&&this.props.type){var e=this.calculateTotals(this.props.data),t=Object(C.a)(e,2),a=t[0],n=t[1],s=(n/this.props.limit*100).toFixed();return i.a.createElement("div",null,i.a.createElement("b",null,"Total emissions: ",n.toFixed(2)," tons CO2e emitted."),i.a.createElement("br",null),0===this.props.limit?this.noEmissionTarget():this.emissionTarget(s),i.a.createElement("br",null),i.a.createElement("small",null,"Kg CO2e"),this.getPlot(a))}return""}},{key:"emissionTarget",value:function(e){return i.a.createElement("b",null,e+"% of target for "+this.props.type+"s ("+this.props.limit+" tons CO2e).")}},{key:"noEmissionTarget",value:function(){return i.a.createElement("small",null,"Set emission targets in Settings")}},{key:"calculateTotals",value:function(e){var t=this.props.type,a=this.getModel(t),n=this.getPlotLabelMap(t),i=this.getPlotObject(Object.values(n)),s=!0,r=!1,l=void 0;try{for(var o,c=function(){var e=o.value,t=n[e.mode];i.find(function(e){return e.x===t}).y+=e.quantity*a[e.mode]},u=e[Symbol.iterator]();!(s=(o=u.next()).done);s=!0)c()}catch(b){r=!0,l=b}finally{try{s||null==u.return||u.return()}finally{if(r)throw l}}var m=0,h=!0,p=!1,d=void 0;try{for(var v,y=i[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){m+=v.value.y}}catch(b){p=!0,d=b}finally{try{h||null==y.return||y.return()}finally{if(p)throw d}}return[i,m/=1e3]}},{key:"getPlotLabelMap",value:function(e){return"trip"===e?{"Electric car":"EV",Train:"Train",Bus:"Bus",Car:"Car","Plane, regional":"Plane","Plane, international":"Plane","Express boat":"Boat"}:"meeting"===e?{"Short distance <45 min":"Short","Scandinavia 45 min - 2 hrs":"Scandinavia","Europe 2-4 hrs":"Europe","Rest of world 4-12 hrs":"World"}:void 0}},{key:"getPlotObject",value:function(e){var t=[],a={},n=!0,i=!1,s=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var o=r.value;a[o]||(t.push({x:o,y:0}),a[o]=!0)}}catch(c){i=!0,s=c}finally{try{n||null==l.return||l.return()}finally{if(i)throw s}}return t}},{key:"getModel",value:function(e){var t=this.props.model.model;return"trip"===e?t:"meeting"===e?{"Short distance <45 min":t["Plane, regional"],"Scandinavia 45 min - 2 hrs":2*t["Plane, international"],"Europe 2-4 hrs":6*t["Plane, international"],"Rest of world 4-12 hrs":16*t["Plane, international"]}:void 0}},{key:"getPlot",value:function(e){return i.a.createElement(O.a,{labelsStyle:{fontSize:9},height:400,width:420,xType:"ordinal",margin:{left:70,bottom:50}},i.a.createElement(O.d,null),i.a.createElement(O.b,null),i.a.createElement(O.e,null),i.a.createElement(O.f,null),i.a.createElement(O.c,{data:e,animation:!0}))}}]),t}(n.Component),j=a(79),D=function(e){return i.a.createElement(j.a,{variant:"pills",activeKey:"null",onSelect:function(t){return e.navigate(t)},className:"mb-3"},i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"home",href:"#/home"},"Home")),i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"trip",title:"Item"},"Plan trip")),i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"meeting",title:"Item"},"Organize meeting")),i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"view",disabled:!e.datasetLength},"Summary")),i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"settings",disabled:!1},"Settings")))},P=function(){return{"Electric car":1.5,Train:3.1,Bus:3.9,Car:5.6,"Plane, regional":110.5,"Plane, international":195.3,"Express boat":32.1}},L=function e(){Object(o.a)(this,e),this.model=P(),this.quantifier="Hours",this.alternatives=Object.keys(this.model)};function T(e,t,a,n,i){var s={type:e,heading:t,text:a};return n&&(s.alternatives=n),i&&(s.quantifier=i),s}function I(e,t){return T("name",e,t,!1,!1)}function N(e,t,a,n){return T("quantityselect",e,t,a,n)}function A(e,t,a){return T("quantity",e,t,!1,a)}function q(e,t){return T("select",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:["Yes","No"],!1)}var x=function(){function e(t){Object(o.a)(this,e),this.model=new L,this.id=t,this.questions="trip"===t?this.buildTripQuestions(this.model):this.buildMeetingQuestions(this.model)}return Object(c.a)(e,[{key:"buildMeetingQuestions",value:function(e){var t=[];return t.push(I("Name of meeting","Please register meetings that you organize that involves participants travelling by plane")),t.push(q("Type of meeting","",["Project meeting / workshop","Conference / symposium (national)","Conference / symposium (international)","Other"])),t.push(A("Number of participants","Please enter total number of participants at the meeting, i.e. not only those travelling by plane","Participants")),t.push(A("Duration of meeting","Please enter the duration of the meeting (hours)","Hours")),t.push(q("Is streaming or video attendance offered?","Video attendance / streaming should be offered when possible")),t.push(q("Importance","Please give your own assessment of the importance of organizing a physical meeting involving air travels",["Essential","Very important","Somewhat important","Less important"])),t.push(N("Flying participants.","Please enter number of participants travelling by plane for each category below. (In the calculations, these are assumed to be roundtrip travels)",["Short distance <45 min","Scandinavia 45 min - 2 hrs","Europe 2-4 hrs","Rest of world 4-12 hrs"],"Participants")),t}},{key:"buildTripQuestions",value:function(e){var t=[];return t.push(I("Enter name of trip","")),t.push(N("Purpose(s) of trip","Please select the purpose(s) and duration (in hrs) of the activities covered by the trip.  One trip may include several activities.",["Field work","Project meeting","Meeting with funders","Conference, presenting","Conference, not presenting","Other"],"Duration of activity (hours)")),t.push(q("Is streaming or video attendance offered?","Video attendance / streaming should be requested when possible")),t.push(q("Importance","Please give your own assessment of the importance of travelling to this/these activity/activities",["Essential","Very important","Somewhat important","Less important"])),t.push(N("Mode(s) of transport","Please enter overall duration for each mode of transport used during the trip",e.alternatives,e.quantifier)),t}}]),e}();var Q=function e(t,a,n,i){Object(o.a)(this,e),this.surveyID=t,a?(this.UUID=a,this.name=n,this.answers=i):(this.UUID=function(){for(var e=[],t=0;t<256;t++)e[t]=(t<16?"0":"")+t.toString(16);var a=(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(16));return a[6]=15&a[6]|64,a[8]=63&a[8]|128,e[a[0]]+e[a[1]]+e[a[2]]+e[a[3]]+"-"+e[a[4]]+e[a[5]]+"-"+e[a[6]]+e[a[7]]+"-"+e[a[8]]+e[a[9]]+"-"+e[a[10]]+e[a[11]]+e[a[12]]+e[a[13]]+e[a[14]]+e[a[15]]}(),this.name=n||"",this.answers=[])},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={type:"trip",enabled:Array(a.props.datasets.length).fill(!0)},a.editClick=a.editClick.bind(Object(h.a)(a)),a.deleteClick=a.deleteClick.bind(Object(h.a)(a)),a.plotClick=a.plotClick.bind(Object(h.a)(a)),a.changeView=a.changeView.bind(Object(h.a)(a)),a.includeAll=a.includeAll.bind(Object(h.a)(a)),a.includeNone=a.includeNone.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement(g.a,{variant:"outline-primary",onClick:this.changeView},"Switch to ","trip"===this.state.type?"meetings":"trips"),i.a.createElement(g.a,{variant:"outline-primary",onClick:this.includeAll},"Include all"),i.a.createElement(g.a,{variant:"outline-secondary",onClick:this.includeNone},"Include none"),i.a.createElement("br",null),i.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},this.buildTable(this.props.datasets,["Name","Edit","Delete","Include"])))}},{key:"componentDidMount",value:function(){this.props.plotDataset(this.state.type,this.state.enabled)}},{key:"changeView",value:function(){var e="trip"===this.state.type?"meeting":"trip";this.setState({type:e}),this.props.plotDataset(e,this.state.enabled)}},{key:"buildTable",value:function(e,t){var a=this;return i.a.createElement("tbody",null,e.map(function(e,n){return a.buildRow(t,e,n)}))}},{key:"buildRow",value:function(e,t,a){var n="text-center align-middle";if(t.surveyID===this.state.type)return i.a.createElement("tr",{key:"row"+a},i.a.createElement("td",{key:a+"-"+e[0],className:n},t.name),i.a.createElement("td",{key:a+"-"+e[1],className:n},i.a.createElement(f,{type:"edit",id:a,onclick:this.editClick,checked:!0})),i.a.createElement("td",{key:a+"-"+e[2],className:n},i.a.createElement(f,{type:"delete",id:a,onclick:this.deleteClick,checked:!0})),i.a.createElement("td",{key:a+"-"+e[3],className:n},i.a.createElement(f,{type:"include",id:a,onclick:this.plotClick,checked:this.state.enabled[a]})))}},{key:"editClick",value:function(e){this.props.editDataset(e.target.id)}},{key:"deleteClick",value:function(e){var t=e.target.id;window.confirm("Delete "+this.props.datasets[t].name+"?")&&this.props.deleteDataset(t)}},{key:"includeAll",value:function(){this.updatePlot(this.state.type,Array(this.props.datasets.length).fill(!0))}},{key:"includeNone",value:function(){this.updatePlot(this.state.type,Array(this.props.datasets.length).fill(!1))}},{key:"updatePlot",value:function(e,t){this.props.plotDataset(e,t),this.setState({enabled:t})}},{key:"plotClick",value:function(e){var t=Object(l.a)(this.state.enabled);t[e.target.id]=!this.state.enabled[e.target.id],this.updatePlot(this.state.type,t)}}]),t}(n.Component),M="datasets",U="limits";function R(){return window.localStorage.getItem(M)}function V(){return window.localStorage.hasOwnProperty(U)?JSON.parse(window.localStorage.getItem(U)):{tripCarbonLimit:0,meetingCarbonLimit:0}}function B(){return JSON.parse(R())||[]}function z(){var e="CarbonPlanner-ExportedData-"+(new Date).toISOString(),t=document.createElement("a"),a=R();t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(a)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}var H=a(80),K=a(78),J=a(45),W=a(43),Y=a.n(W),$=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={triplimit:0,meetinglimit:0},e.handleTripLimitChange=e.handleTripLimitChange.bind(Object(h.a)(e)),e.handleTripLimitSet=e.handleTripLimitSet.bind(Object(h.a)(e)),e.handleMeetingLimitChange=e.handleMeetingLimitChange.bind(Object(h.a)(e)),e.handleMeetingLimitSet=e.handleMeetingLimitSet.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=!(B().length>0),t="outline-primary w-50";return i.a.createElement("div",{id:"settings"},i.a.createElement("img",{src:Y.a,alt:""}),i.a.createElement("br",null),i.a.createElement("br",null),"Your CO2 emissions target for travel is"," ",0===this.props.triplimit?"not yet set.":this.props.triplimit+" tons CO2e per year",i.a.createElement(H.a,{onSubmit:this.handleTripLimitSet,onChange:this.handleTripLimitChange},i.a.createElement(K.a,{className:"md-4"},i.a.createElement(J.a,{type:"number",placeholder:"Target for CO2 emissions (tons) from travel.","aria-label":"Target for CO2 emissions (tons) from travel.","aria-describedby":"basic-addon2"}),i.a.createElement(K.a.Append,null,i.a.createElement(g.a,{variant:"primary",type:"submit"},"Set target")))),i.a.createElement("br",null),"Your CO2 emissions target for meetings is"," ",0===this.props.meetinglimit?"not yet set.":this.props.meetinglimit+" tons CO2e per year",i.a.createElement(H.a,{onSubmit:this.handleMeetingLimitSet,onChange:this.handleMeetingLimitChange},i.a.createElement(K.a,{className:"md-4"},i.a.createElement(J.a,{type:"number",placeholder:"Target for CO2 emissions (tons) from meetings.","aria-label":"Target for CO2 emissions (tons) from meetings.","aria-describedby":"basic-addon2"}),i.a.createElement(K.a.Append,null,i.a.createElement(g.a,{variant:"primary",type:"submit"},"Set target")))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",null,"In this current beta version, data is only stored in this browser. No cookies or cloud storage is used. If you clear your browsing history, the data will be erased."),i.a.createElement("p",null,i.a.createElement(g.a,{className:t,disabled:e,onClick:this.props.clearData},"Clear data from browser")),i.a.createElement("p",null,i.a.createElement(g.a,{className:t,disabled:!0},"Import data from file")),i.a.createElement("p",null,i.a.createElement(g.a,{className:t,disabled:e,onClick:z},"Save data to file")),i.a.createElement("p",null,i.a.createElement(g.a,{className:t,disabled:!0},"Export to spreadsheet")))}},{key:"handleTripLimitChange",value:function(e){this.setState({triplimit:e.target.value})}},{key:"handleMeetingLimitChange",value:function(e){this.setState({meetinglimit:e.target.value})}},{key:"handleTripLimitSet",value:function(e){e.preventDefault();var t=Number(this.state.triplimit);"number"===typeof t&&t>0&&this.props.limitfunction("trip",t)}},{key:"handleMeetingLimitSet",value:function(e){e.preventDefault();var t=Number(this.state.meetinglimit);"number"===typeof t&&t>0&&this.props.limitfunction("meeting",t)}}]),t}(n.Component),G=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={tripCarbonLimit:V().tripCarbonLimit,meetingCarbonLimit:V().meetingCarbonLimit,activeDataSet:void 0,datasets:B(),surveydata:new x("trip"),plot:void 0,page:"home",height:.6*window.innerHeight,CETcolor:"4EBBDF"},e.plotDataset=e.plotDataset.bind(Object(h.a)(e)),e.receiveAnswersFromSurvey=e.receiveAnswersFromSurvey.bind(Object(h.a)(e)),e.setPage=e.setPage.bind(Object(h.a)(e)),e.editDataset=e.editDataset.bind(Object(h.a)(e)),e.deleteDataset=e.deleteDataset.bind(Object(h.a)(e)),e.setcarbonlimit=e.setcarbonlimit.bind(Object(h.a)(e)),e.clearData=e.clearData.bind(Object(h.a)(e)),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"setcarbonlimit",value:function(e,t){var a="trip"===e?{tripCarbonLimit:t,meetingCarbonLimit:this.state.meetingCarbonLimit}:{tripCarbonLimit:this.state.tripCarbonLimit,meetingCarbonLimit:t};this.updateDataSets(a,!0)}},{key:"updateDataSets",value:function(e,t){var a,n;t?(n=e,window.localStorage.setItem(U,JSON.stringify(n))):(a=e.datasets,window.localStorage.setItem(M,JSON.stringify(a))),this.setState(e)}},{key:"editDataset",value:function(e){this.setPage("edit",e)}},{key:"deleteDataset",value:function(e){var t=Object(l.a)(this.state.datasets);t.splice(e,1);var a={datasets:t};0===t.length&&(a.page="home",a.plot=void 0),this.updateDataSets(a)}},{key:"clearData",value:function(){window.confirm("Clear all data?")&&(window.localStorage.clear(),this.setState({datasets:[],tripCarbonLimit:0,meetingCarbonLimit:0}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{className:"border border-primary rounded mb-0"},i.a.createElement(D,{navigate:this.setPage,datasetLength:this.state.datasets.length}),i.a.createElement(v.a,{style:{minHeight:this.state.height}},i.a.createElement(y.a,{sm:12,md:7},this.getPage()),this.state.plot&&i.a.createElement(y.a,null,this.getPlot()))))}},{key:"getPlot",value:function(){return this.state.plot?i.a.createElement(S,{data:this.state.plot,model:this.state.surveydata.model,type:this.state.plotType,limit:"trip"===this.state.plotType?this.state.tripCarbonLimit:this.state.meetingCarbonLimit}):""}},{key:"setPage",value:function(e,t){var a={plot:void 0,page:"trip"===e||"meeting"===e?"register":e};if("trip"===e){var n=new x("trip");a.surveydata=n,a.activeDataSet=new Q("trip")}else if("meeting"===e){var i=new x("meeting");a.surveydata=i,a.activeDataSet=new Q("meeting")}else if("edit"===e){var s=this.state.datasets[t];a.activeDataSet=s,a.surveydata=new x(s.surveyID)}else a.activeDataSet=void 0;this.setState(a)}},{key:"getPage",value:function(){switch(this.state.page){case"home":return this.getHomePage();case"register":case"edit":return this.getRegisterPage();case"view":return this.getViewPage();case"settings":return this.getSettingsPage();default:return this.getHomePage()}}},{key:"plotDataset",value:function(e,t){var a=this.state.datasets.filter(function(a,n){return t[n]&&a.surveyID===e});a.length>0?this.setState({plot:a.flatMap(function(e){return e.answers.slice(-1)}).flatMap(function(e){return e}),plotType:e}):this.setState({plot:void 0,plotType:void 0})}},{key:"getSettingsPage",value:function(){return i.a.createElement($,{triplimit:this.state.tripCarbonLimit,meetinglimit:this.state.meetingCarbonLimit,limitfunction:this.setcarbonlimit,clearData:this.clearData})}},{key:"getViewPage",value:function(){return i.a.createElement(F,{datasets:this.state.datasets,surveydata:this.state.surveydata,editDataset:this.editDataset,deleteDataset:this.deleteDataset,plotDataset:this.plotDataset,triplimit:this.state.tripCarbonLimit,meetinglimit:this.state.meetingCarbonLimit})}},{key:"getRegisterPage",value:function(){return i.a.createElement(k,{surveydata:this.state.surveydata,defaultName:this.state.activeDataSet.surveyID.charAt(0).toUpperCase()+this.state.activeDataSet.surveyID.slice(1)+" "+(this.state.datasets.length+1),dataset:this.state.activeDataSet,reportAnswers:this.receiveAnswersFromSurvey,navigate:this.setPage,plotFunction:this.plotObject})}},{key:"getHomePage",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,"CET Carbon Planner"),"The CET Carbon Planner is a CO2 calculator for calculating climate gas emissions from own long-distance travels and from plane travels by participants to meetings organized. It is designed to give an overview of total emissions from own travels and meetings, assuming that this will contribute to raising awareness of own emissions, which is a central element in the CET Low-carbon Travel Policy.")}},{key:"receiveAnswersFromSurvey",value:function(e,t,a){if(e){var n=this.state.datasets.filter(function(t){return t.UUID!==e.UUID}),i=new Q(e.surveyID,e.UUID,t,a);n.push(i),this.updateDataSets({datasets:n,page:"home"})}else this.setState({page:"home"})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);r.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.d9eb9067.chunk.js.map