(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,n,t){},155:function(e,n,t){e.exports=t.p+"static/media/c-programming.562eee74.png"},158:function(e,n,t){e.exports=t(366)},163:function(e,n,t){},171:function(e,n,t){},363:function(e,n,t){},366:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(15),o=t.n(i),u=(t(163),t(64)),c=t(65),s=t(70),l=t(66),d=t(71),p=t(9),m=t(148),f=(t(165),t(167),t(169),t(170),t(171),t(10));function g(){return{main:getComputedStyle(document.documentElement).getPropertyValue("--main"),darkMain:getComputedStyle(document.documentElement).getPropertyValue("--dark-main"),one:getComputedStyle(document.documentElement).getPropertyValue("--one"),two:getComputedStyle(document.documentElement).getPropertyValue("--two"),three:getComputedStyle(document.documentElement).getPropertyValue("--three"),four:getComputedStyle(document.documentElement).getPropertyValue("--four"),five:getComputedStyle(document.documentElement).getPropertyValue("--five"),gray:getComputedStyle(document.documentElement).getPropertyValue("--gray"),clearTextColor:getComputedStyle(document.documentElement).getPropertyValue("--clear-text-color"),DarkTextColor:getComputedStyle(document.documentElement).getPropertyValue("--dark-text-color")}}function v(){var e=Object(p.a)(["\n  background: ",";\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-weight: 300\n  font-size: 14px;\n  padding: 5px;\n  padding-left: 10px;\n  margin-bottom: 5px;\n\n  > span {\n    font-weight: 500;\n    margin-left: 10px;\n  }\n\n  @media (max-width: 700px) {\n    font-size: 8px;\n  }\n"]);return v=function(){return e},e}var b=f.a.div(v(),function(e){return e.bg});function y(e){var n=e.status,t=void 0===n?"compiles":n,r="",i="";return"compiles"===t?(r=g().five,i="Code status: Compiles.."):"error"===t?(r=g().two,i="Code status: Error.."):"warning"===t&&(r=g().four,i="Code status: warning.."),a.a.createElement(b,{bg:r},i)}function h(){var e=Object(p.a)(["\n  > button {\n    border: none;\n    background: none;\n    color: #fff;\n    font-size: 18px;\n    padding: 8px;\n    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);\n\n    @media (max-width: 700px) {\n      font-size: 10px;\n    }\n  }\n\n  > button:hover {\n    color: #fff;\n    cursor: pointer;\n  }\n\n  > button:disabled {\n    color: #919191;\n  }\n\n  > button:active {\n    color: #fff;\n    text-shadow: none;\n  }\n"]);return h=function(){return e},e}function x(){var e=Object(p.a)(["\n  padding: 3px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px;\n"]);return x=function(){return e},e}function E(){var e=Object(p.a)(["\n  background: #1F292E;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return E=function(){return e},e}var w=f.a.div(E()),C=f.a.div(x()),j=f.a.div(h());function k(e){var n=e.visualize,t=e.serialize,r=e.restart,i=e.disabled,o=void 0!==i&&i,u=e.status;return a.a.createElement(w,null,a.a.createElement(C,null,a.a.createElement(j,null,a.a.createElement("button",{disabled:o,onClick:n},"Visualize"),a.a.createElement("button",{onClick:t},"Serialize"),a.a.createElement("button",{onClick:r},"Restart"))),a.a.createElement(y,{status:u}))}t(176);var S='{\n    "type": "Program",\n    "start": 0,\n    "end": 38,\n    "body": [\n        {\n            "type": "VariableDeclaration",\n            "start": 0,\n            "end": 12,\n            "declarations": [\n                {\n                    "type": "VariableDeclarator",\n                    "start": 4,\n                    "end": 12,\n                    "id": {\n                        "type": "Identifier",\n                        "start": 4,\n                        "end": 5,\n                        "name": "a"\n                    },\n                    "init": {\n                        "type": "CallExpression",\n                        "start": 8,\n                        "end": 12,\n                        "callee": {\n                            "type": "Identifier",\n                            "start": 8,\n                            "end": 9,\n                            "name": "g"\n                        },\n                        "arguments": [\n                            {\n                                "type": "Identifier",\n                                "start": 10,\n                                "end": 11,\n                                "name": "k"\n                            }\n                        ]\n                    }\n                }\n            ],\n            "kind": "var"\n        },\n        {\n            "type": "VariableDeclaration",\n            "start": 13,\n            "end": 24,\n            "declarations": [\n                {\n                    "type": "VariableDeclarator",\n                    "start": 17,\n                    "end": 24,\n                    "id": {\n                        "type": "Identifier",\n                        "start": 17,\n                        "end": 18,\n                        "name": "b"\n                    },\n                    "init": {\n                        "type": "Literal",\n                        "start": 21,\n                        "end": 24,\n                        "value": 600,\n                        "raw": "600"\n                    }\n                }\n            ],\n            "kind": "var"\n        },\n        {\n            "type": "VariableDeclaration",\n            "start": 25,\n            "end": 38,\n            "declarations": [\n                {\n                    "type": "VariableDeclarator",\n                    "start": 29,\n                    "end": 38,\n                    "id": {\n                        "type": "Identifier",\n                        "start": 29,\n                        "end": 30,\n                        "name": "c"\n                    },\n                    "init": {\n                        "type": "BinaryExpression",\n                        "start": 33,\n                        "end": 38,\n                        "left": {\n                            "type": "Identifier",\n                            "start": 33,\n                            "end": 34,\n                            "name": "a"\n                        },\n                        "operator": "+",\n                        "right": {\n                            "type": "Identifier",\n                            "start": 37,\n                            "end": 38,\n                            "name": "b"\n                        }\n                    }\n                }\n            ],\n            "kind": "var"\n        }\n    ],\n    "sourceType": "module"\n}';var O=t(32),z=t.n(O);t(108);function D(){var e=Object(p.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #fff;\n    font: 3em bold;\n"]);return D=function(){return e},e}function P(){var e=Object(p.a)(["\n    border-radius: 50%;\n    height: ",";\n    width: ",";\n    border: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: ",";\n    overflow: hidden;\n"]);return P=function(){return e},e}function V(){var e=Object(p.a)(["\n    border-radius: 50%;\n    height: ",";\n    width: ",";\n    background:#1F292E;\n    position: absolute;\n    top: 50%;\n    left: 75%;\n    margin: ",";\n"]);return V=function(){return e},e}var B=f.a.div(V(),function(e){return e.radius+"px"},function(e){return e.radius+"px"},function(e){var n=e.radius;return-n/2+"px 0 0 "+-n/2+"px"}),I=f.a.div(P(),function(e){return e.radius+"px"},function(e){return e.radius+"px"},function(e){return e.dotSize+"px dashed #1F292E"},function(e){var n=e.radius,t=e.dotSize;return-(n/2+t)+"px 0 0 "+-(n/2+t)+"px"}),T=f.a.div(D());function F(){return a.a.createElement(z.a,{easing:"easeOutCubic",duration:1500,direction:"alternate",loop:!0,delay:function(e,n){return 10*n},scale:.9},a.a.createElement(B,{radius:400},a.a.createElement(z.a,{loop:!0,easing:"linear",rotate:"360deg",duration:8e3},a.a.createElement(I,{radius:395,dotSize:40})),a.a.createElement(T,null,"Compiling")))}var M=t(103),N=t(156);t(361),t(363);var J=function(e){switch(e.type){case"Program":return e.body;case"VariableDeclaration":return e.declarations;case"VariableDeclarator":return e.init?[e.id,e.init]:[e.id];case"ExpressionStatement":return[e.expression];case"BinaryExpression":case"AssignmentExpression":return[e.left,e.right];case"CallExpression":return[e.callee,{type:"arguments",arguments:e.arguments}];case"arguments":return e.arguments;case"MemberExpression":return[e.object,e.property];case"NewExpression":return e.arguments;case"ObjectExpression":return e.properties;case"Property":return[e.key,e.value];case"FunctionDeclaration":case"FunctionExpression":return[e.body];case"BlockStatement":return e.body;case"ReturnStatement":return e.argument?[e.argument]:[];case"UnaryExpression":return[e.argument];case"IfStatement":return[e.test,e.consequent];case"ConditionalExpression":return[e.test,e.consequent,e.alternate];default:return[]}},W=function(e){switch(e.type){case"Identifier":return e.name;case"Literal":return e.raw;case"UnaryExpression":case"BinaryExpression":case"AssignmentExpression":return e.operator;case"FunctionDeclaration":var n=M.map(e.params,"name").join(",");return"function "+(e.id&&e.id.name||"")+"("+n+")";case"FunctionExpression":var t=M.map(e.params,"name").join(",");return"function "+(e.id&&e.id.name||"")+"("+t+")";default:return e.type}},L=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).recursiveBuilder=function(e){var n=J(e),r=[];return n===[]?n:(n.forEach(function(e){r.push({title:W(e),children:t.recursiveBuilder(e),type:e.type})}),r)},t.buildTree=function(e){var n=[];return console.log(e),n.push({title:W(e),children:t.recursiveBuilder(e),expanded:!0,type:e.type}),n},t.state={treeData:[]},t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({treeData:this.buildTree(this.props.ast)})}},{key:"componentWillReceiveProps",value:function(e){this.setState({treeData:this.buildTree(e.ast)})}},{key:"render",value:function(){var e=this;return a.a.createElement(N.a,{treeData:this.state.treeData,onChange:function(n){return e.setState({treeData:n})},canDrag:!1,generateNodeProps:function(e){return{className:e.node.type}}})}}]),n}(r.Component),R=t(155),U=t.n(R);function _(){var e=Object(p.a)(["\n    text-align: center;\n    font-weight: 300;\n    margin: 0px auto;\n    font-size: calc(8px + 0.91vw);\n"]);return _=function(){return e},e}function q(){var e=Object(p.a)(["\n    text-align: center;\n    font-weight: 300;\n    font-size: calc(12px + 3.6vw);\n    letter-spacing: 1.8px;\n    margin-top: 40px;\n    border: medium none;\n    margin-bottom: 20px;\n"]);return q=function(){return e},e}function A(){var e=Object(p.a)(["\n    content: ","\n    width: 500px;\n    margin: 100px auto;\n"]);return A=function(){return e},e}var $=f.a.div(A(),function(e){return"url("+e.url+");"}),G=f.a.div(q()),H=f.a.div(_());function K(){return a.a.createElement("div",null,a.a.createElement(z.a,{easing:"easeOutCubic",duration:2e3,direction:"alternate",loop:!0,scale:.9},a.a.createElement("div",null,a.a.createElement(z.a,{rotate:"360deg",loop:!0,delay:5e3,duration:2500},a.a.createElement($,{url:U.a})))),a.a.createElement(G,null,"The Ultimate C code visualizer"),a.a.createElement(H,null,"Built by ",a.a.createElement("strong",null,"J\xe9r\xe9mie Piotte")," and ",a.a.createElement("strong",null,"Pierre-Marie")))}function Q(){var e=Object(p.a)(["\n  width: 50vw;\n  height: 100vh;\n  overflow: hidden;\n"]);return Q=function(){return e},e}function X(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh\n  width: 50vw;\n  overflow: scroll;\n"]);return X=function(){return e},e}function Y(){var e=Object(p.a)(["\n  display: flex;\n"]);return Y=function(){return e},e}var Z=f.a.div(Y()),ee=f.a.div(X()),ne=f.a.div(Q()),te=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(l.a)(n).call(this,e))).state={code:"int32_t a = g(k);\nint32_t b = 600;\nint32_t c = a + b;",disableButtons:!1,status:"compiles",compiling:!1,ast:{}},t.handleClear=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t.setState(function(n){var t=n.code;return{code:!0===e?"":t}})},t.visualize=function(){t.setState({compiling:!0});var e=function(e){for(var n=e.lineCount(),t=0;t<n;t++)e.getLineTokens(t);return JSON.parse(S)}(t.cm.editor);t.setState({compiling:!1,ast:e})},t.serialize=function(){},t.restart=function(){t.setState({compiling:!1,ast:{}})},t.frontPage=a.a.createElement(K,null),t.waitingScreen=a.a.createElement(F,null),t}return Object(d.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,n=this.state,t=n.code,r=n.disableButtons,i=n.status,o=n.compiling,u=this.frontPage;return o?u=this.waitingScreen:Object.keys(this.state.ast).length>0&&(u=a.a.createElement(L,{cm:this.cm,ast:this.state.ast})),a.a.createElement(Z,null,a.a.createElement(ee,null,a.a.createElement(k,{visualize:this.visualize,serialize:this.serialize,restart:this.restart,disabled:r,status:i}),a.a.createElement(m.Controlled,{ref:function(n){return e.cm=n},value:t,options:{mode:"text/x-csrc",theme:"material",lineNumbers:!0,lineWrapping:!0,gutters:["CodeMirror-lint-markers"]},onBeforeChange:function(n,t,r){""===r?e.handleClear(!0):e.setState({code:r})},onPaste:function(){e.handleClear(!1)}})),a.a.createElement(ne,null,u))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,2,1]]]);
//# sourceMappingURL=main.a203eac0.chunk.js.map