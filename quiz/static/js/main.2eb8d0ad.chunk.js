(this["webpackJsonpquizz-app"]=this["webpackJsonpquizz-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),u=a(17),s=a(4),i=a.n(s),l=function(){return i.a.get("https://opentdb.com/api_token.php?command=request").then((function(e){return e.data}))},p=function(){return i.a.get("https://opentdb.com/api_category.php").then((function(e){return e.data}))},d=function(e,t,a,n,r){var o="amount=".concat(e),c=404!==t?"&category=".concat(t):"",u="any difficulty"!==a?"&difficulty=".concat(a):"",s=n?"&type=".concat(n):"";return i.a.get("https://opentdb.com/api.php?".concat(o).concat(c).concat(u).concat(s,"&token=").concat(r)).then((function(e){return e.data}))},y=r.a.createContext(),f=function(e){var t=e.fetchQuestions,a=Object(n.useContext)(y),o=a.state,c=a.dispatch;Object(n.useEffect)((function(){c({type:"set-current-category",payload:o.categories[0]})}),[]);return r.a.createElement("div",{className:"quiz-board"},r.a.createElement("h4",null," Select Category "),r.a.createElement("select",{className:"category-dropdown",onClick:function(e){var t=o.categories.find((function(t){return t.id===e.target.value}));c({type:"set-current-category",payload:t})}},o.categories?o.categories.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id?e.id:404}," ",e.name," ")})):""),r.a.createElement("h4",null," Select Difficulty "),r.a.createElement("select",{className:"difficulty-dropdown",onClick:function(e){var t=["Any Difficulty","Easy","Medium","Hard"].find((function(t){return t===e.target.value}));c({type:"set-difficulty",payload:t})}},["Any Difficulty","Easy","Medium","Hard"].map((function(e){return r.a.createElement("option",{key:e,value:e}," ",e," ")}))),r.a.createElement("h4",null," Select Number of Questions "),r.a.createElement("input",{type:"number",value:o.numOfQuestions,onChange:function(e){return e.target.value<=50?c({type:"set-number-of-questions",payload:e.target.value}):null},max:"50",step:"5"})," ",r.a.createElement("i",null,"(max: 50)"),r.a.createElement("h4",null," Select Questions' Type "),r.a.createElement("select",{className:"type-dropdown",onClick:function(e){c({type:"set-type",payload:e.target.value})}},["Any Type","Multiple Choice","True/False"].map((function(e){return r.a.createElement("option",{key:e,value:e}," ",e," ")}))),r.a.createElement("h4",null," Ready? "),r.a.createElement("button",{onClick:function(){var e=o.currentCategory.id,a=Number(o.numOfQuestions),n=o.difficulty.toLowerCase(),r="Any Type"===o.type?void 0:"Multiple Choice"===o.type?"multiple":"boolean";t(a,e,n,r,o.token)}},"Start"))},m=a(6),g={"&amp;":"&","&quot;":'"',"&#039;":"'","&ldquo;":"\u201c","&rdquo":"\u201d","&cent;":"\xa2","&pound;":"\xa3","&sect;":"\xa7","&copy;":"\xa9","&laquo;":"\xab","&raquo;":"\xbb","&reg;":"\xae","&deg;":"\xb0","&plusmn;":"\xb1","&para;":"\xb6","&middot;":"\xb7","&frac12":"\xbd","&ndash;":"\u2013","&mdash;":"\u2014","&sbquo;":"\u201a","&lsquo":"\u2018","&rsquo;":"\u2019","&bdquo;":"\u201e","&dagger;":"\u2020","&Dagger;":"\u2021","&bull;":"\u2022","&hellip;":"\u2026","&prime;":"\u2032","&Prime;":"\u2033","&euro;":"\u20ac","&trade;":"\u2122","&asymp;":"\u2248","&ne;":"\u2260","&le;":"\u2264","&ge;":"\u2265","&lt;":"<","&gt;":">"};var h=function(e){return e.replace(/(&quot;|&lt;|&gt;|&amp;|&#039;|&lqduo|&rqduo|&cent;|&pound;|&sect;|&copy;|&laquo;|&raquo;|&reg;|&deg;|&plusmn;|&para;|&middot;|&frac12;|&ndash;|&mdash;|&sbquo;|&lsquo;|&rsquo;|&bdquo;|&dagger;|&Dagger;|&bull;|&hrllip;|&prime;|&Prime;|&euro;|&trade;|&ne;|&le;|&ge;|&lt;|&gt;)/g,(function(e,t){return g[t]}))},q=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},b=function(e){var t=e.restartQuiz,a=Object(n.useContext)(y).state;return r.a.createElement("div",null,r.a.createElement("h4",null,"Quiz Ended"),r.a.createElement("h4",null,"Your Score: ","".concat(a.score,"/").concat(a.questionCount)),r.a.createElement("h4",null,"Percentage: ","".concat(Math.round(100*(a.score/a.questionCount+Number.EPSILON))/100*100,"%")),r.a.createElement("button",{onClick:function(){return t()}}," restart "))},E=function(e){var t=e.restartQuiz,a=Object(n.useContext)(y),o=a.state,c=a.dispatch;Object(n.useEffect)((function(){return c({type:"set-questions-count",payload:o.questions.length})}),[]);var u=function(e){if(e.target.value===o.questions[0].correct_answer){c({type:"set-score",payload:o.score+1});var t=Object(m.a)(o.questions);t.shift(),c({type:"set-questions",payload:t})}else{var a=Object(m.a)(o.questions);a.shift(),c({type:"set-questions",payload:a})}};return r.a.createElement("div",{className:"question"},o.questions.length>0?r.a.createElement("div",{className:"single-question"},r.a.createElement("h4",null,"Question ",o.questionCount-o.questions.length+1,"/",o.questionCount),r.a.createElement("p",null," ",h(o.questions[0].question)," "),function(){var e=o.questions[0],t=e.incorrect_answers.concat(e.correct_answer);if("multiple"===e.type)t=q(t);else{var a=t.shift();"True"===a?t.unshift(a):t.push(a)}return t.map((function(e,t){return r.a.createElement("div",{key:t,style:{marginBottom:"5px"}},r.a.createElement("span",{style:{display:"inline-block",width:"20px"}},["a.","b.","c.","d."][t]),r.a.createElement("button",{style:{display:"inline-block",textJustify:""},onClick:u,value:e,key:t},h(e)))}))}()):r.a.createElement(b,{restartQuiz:t}))},v=a(1),O={token:null,categories:[],questions:[],currentCategory:{id:404,name:null},difficulty:"Any Difficulty",numOfQuestions:10,type:"Any Type",score:0,questionCount:0,quizStarted:!1},j=function(e,t){switch(t.type){case"set-token":return Object(v.a)(Object(v.a)({},e),{},{token:t.payload});case"set-categories":return Object(v.a)(Object(v.a)({},e),{},{categories:t.payload});case"set-questions":return Object(v.a)(Object(v.a)({},e),{},{questions:t.payload});case"set-current-category":return Object(v.a)(Object(v.a)({},e),{},{currentCategory:t.payload});case"set-difficulty":return Object(v.a)(Object(v.a)({},e),{},{difficulty:t.payload});case"set-number-of-questions":return Object(v.a)(Object(v.a)({},e),{},{numOfQuestions:t.payload});case"set-type":return Object(v.a)(Object(v.a)({},e),{},{type:t.payload});case"set-questions-count":return Object(v.a)(Object(v.a)({},e),{},{questionCount:t.payload});case"set-score":return Object(v.a)(Object(v.a)({},e),{},{score:t.payload});case"set-quiz-started":return Object(v.a)(Object(v.a)({},e),{},{score:0,quizStarted:t.payload});default:return e}};var C=function(){var e=Object(n.useReducer)(j,O),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){l().then((function(e){0===e.response_code&&o({type:"set-token",payload:e.token})}))}),[]),Object(n.useEffect)((function(){p().then((function(e){e.trivia_categories.unshift({id:404,name:"Any Category"}),o({type:"set-categories",payload:e.trivia_categories})}))}),[]),r.a.createElement(y.Provider,{value:{state:a,dispatch:o}},r.a.createElement("div",{className:"App"},0===a.categories.length?r.a.createElement("div",{className:"spin-wrapper"},r.a.createElement("i",{className:"spinner"}),"loading..."):0===a.questions.length&&!1===a.quizStarted?r.a.createElement(f,{fetchQuestions:function(e,t,a,n,r){d(e,t,a,n,r).then((function(e){0===e.response_code?(o({type:"set-questions",payload:e.results}),o({type:"set-quiz-started",payload:!0})):4!==e.response_code&&1!==e.response_code||window.alert("No questions found with current parameters")}))}}):r.a.createElement(E,{restartQuiz:function(){o({type:"set-quiz-started",payload:!1}),o({type:"set-categories",payload:[]}),o({type:"set-questions",payload:[]}),p().then((function(e){e.trivia_categories.unshift({id:404,name:"Any Category"}),o({type:"set-categories",payload:e.trivia_categories})}))}})),r.a.createElement("p",{style:{textAlign:"center",color:"white"}},"by Sandro Tsereteli"))};a(40);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2eb8d0ad.chunk.js.map