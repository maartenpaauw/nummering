webpackJsonp([1],[,,function(e,t){e.exports={name:"nummering",version:"1.0.0",description:"Een gemakkelijke data merge tool voor In Design",keywords:["data merge","In Design"],author:{name:"Maarten Paauw",email:"maartenpaauw@gmail.com"},bugs:{url:"https://github.com/maartenpaauw/nummering/issues",email:"maartenpaauw@gmail.com"},private:!0,repository:{type:"git",url:"https://github.com/maartenpaauw/nummering"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",build:"node build/build.js",unit:"cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",e2e:"node test/e2e/runner.js",test:"npm run unit && npm run e2e",lint:"eslint --ext .js,.vue src test/unit/specs test/e2e/specs"},dependencies:{"add-zero":"^1.0.0",bulma:"^0.4.1","create-download-link":"^1.1.0","font-awesome":"^4.7.0",fs:"0.0.1-security",lodash:"^4.17.4","vee-validate":"^2.0.0-rc.3",vue:"^2.2.6","vue-analytics":"^4.1.2","vue-router":"^2.3.1",vuex:"^2.3.1"},devDependencies:{autoprefixer:"^6.7.2","babel-core":"^6.22.1","babel-eslint":"^7.1.1","babel-loader":"^6.2.10","babel-plugin-istanbul":"^4.1.1","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chai:"^3.5.0",chalk:"^1.1.3",chromedriver:"^2.27.2","connect-history-api-fallback":"^1.3.0","copy-webpack-plugin":"^4.0.1","cross-env":"^4.0.0","cross-spawn":"^5.0.1","css-loader":"^0.28.0",eslint:"^3.19.0","eslint-config-standard":"^6.2.1","eslint-friendly-formatter":"^2.0.7","eslint-loader":"^1.7.1","eslint-plugin-html":"^2.0.0","eslint-plugin-promise":"^3.4.0","eslint-plugin-standard":"^2.0.1","eventsource-polyfill":"^0.9.6",express:"^4.14.1","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3","inject-loader":"^3.0.0",karma:"^1.4.1","karma-coverage":"^1.1.1","karma-mocha":"^1.3.0","karma-phantomjs-launcher":"^1.0.2","karma-phantomjs-shim":"^1.4.0","karma-sinon-chai":"^1.3.1","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"0.0.30","karma-webpack":"^2.0.2",lolex:"^1.5.2",mocha:"^3.2.0",nightwatch:"^0.9.12","node-sass":"^4.5.2",opn:"^4.0.2","optimize-css-assets-webpack-plugin":"^1.3.0",ora:"^1.2.0","phantomjs-prebuilt":"^2.1.14",rimraf:"^2.6.0","sass-loader":"^6.0.5","selenium-server":"^3.0.1",semver:"^5.3.0",shelljs:"^0.7.6",sinon:"^2.1.0","sinon-chai":"^2.8.0","url-loader":"^0.5.8","vue-loader":"^11.3.4","vue-style-loader":"^2.0.5","vue-template-compiler":"^2.2.6",webpack:"^2.3.3","webpack-bundle-analyzer":"^2.2.1","webpack-dev-middleware":"^1.10.0","webpack-hot-middleware":"^2.18.0","webpack-merge":"^4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},,,,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="SETTING_UPDATED"},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s});var a={file_name:"reeks.csv",header:"Nummer",start:1,end:10,step:1,prefix:"No. ",suffix:"",leading_zeros:5},s={settings:{file_name:{label:"Bestandsnaam",type:"text",placeholder:"Bestandsnaam",value:a.file_name},header:{label:"kolomnaam",type:"text",placeholder:"Kolomnaam",value:a.header},start:{label:"Begingetal",type:"number",placeholder:"Begingetal",value:a.start},end:{label:"Eindgetal",type:"number",placeholder:"Eindgetal",value:a.end},step:{label:"Aantal stappen",type:"number",placeholder:"Aantal stappen",value:a.step},prefix:{label:"Voor het getal",type:"text",placeholder:"Voor het getal",value:a.prefix},suffix:{label:"Na het getal",type:"text",placeholder:"Na het getal",value:a.suffix},leading_zeros:{label:"Leidende nullen",type:"number",placeholder:"Leidende nullen",value:a.leading_zeros}}}},,,,,,,,,function(e,t,n){"use strict";var a=n(3),s=n(103),r=n(86),i=n.n(r);a.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Generator",component:i.a}]})},function(e,t,n){"use strict";var a=n(3),s=n(9),r=n(26),i=n(27),o=n(28),l=n(11);a.a.use(s.a),t.a=new s.a.Store({actions:r,getters:i.a,mutations:o.a,state:l.a})},,function(e,t,n){n(75);var a=n(0)(n(29),n(97),null,null);e.exports=a.exports},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),s=n(23),r=n.n(s),i=n(20),o=n(21),l=n(22),u=n.n(l);a.a.config.productionTip=!1,a.a.use(u.a,{id:"UA-40230993-8"}),new a.a({el:"#app",router:i.a,store:o.a,template:"<app/>",components:{App:r.a}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"updateSetting",function(){return s});var a=n(10),s=function(e,t){(0,e.commit)(a.a,t)}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(8),s=n.n(a),r=n(24),i=n.n(r),o={file_name:function(e){return e.settings.file_name.value},header:function(e){return e.settings.header.value},start:function(e){return e.settings.start.value},end:function(e){return e.settings.end.value},step:function(e){return e.settings.step.value},prefix:function(e){return e.settings.prefix.value},suffix:function(e){return e.settings.suffix.value},leading_zeros:function(e){return e.settings.leading_zeros.value},range:function(e){return s.a.map(s.a.range(e.settings.start.value,e.settings.end.value+1,e.settings.step.value),function(t){return(""+e.settings.prefix.value+i()(t,e.settings.leading_zeros.value)+e.settings.suffix.value).trim()})}}},function(e,t,n){"use strict";var a=n(42),s=n.n(a),r=n(10);t.a=s()({},r.a,function(e,t){var n=t.setting,a=t.value;e.settings[n].value=a})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(85),s=n.n(a),r=n(87),i=n.n(r),o=n(88),l=n.n(o);t.default={name:"app",components:{TheFooter:s.a,TheHeader:i.a,TheHero:l.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),s=n.n(a),r=n(83),i=n.n(r),o=n(84),l=n.n(o),u=n(9);t.default={name:"the-example",components:{TheExampleHeader:i.a,TheExampleNumber:l.a},computed:s()({},n.i(u.b)(["range"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),s=n.n(a),r=n(9);t.default={name:"the-example-header",computed:s()({},n.i(r.b)(["header"]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"the-example-number",props:["number"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);n.n(a);t.default={name:"the-footer",data:function(){return{name:a.author.name,email:"mailto:"+a.author.email}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(91),s=n.n(a),r=n(82),i=n.n(r),o=n(89),l=n.n(o);t.default={name:"the-generator",components:{TheExample:i.a,TheMessage:l.a,TheSettings:s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);n.n(a);t.default={name:"the-social",computed:{github:function(){return a.repository.url}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=(n.n(a),n(8)),r=n.n(s);t.default={name:"the-hero",computed:{title:function(){return r.a.upperFirst(a.name)},subtitle:function(){var e=a.description+".";return r.a.forEach(a.keywords,function(t){e=r.a.replace(e,t,'<span class="tag is-white is-medium">'+t+"</span>")}),e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);n.n(a);t.default={name:"the-message",data:function(){return{visible:!0}},computed:{url:function(){return a.bugs.url},email:function(){return a.bugs.email}},methods:{hide:function(){this.visible=!1}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"the-setting",props:["label","setting","type","placeholder"],computed:{value:function(){return this.$store.getters[this.setting]}},methods:{change:function(e){this.$store.dispatch("updateSetting",{setting:this.setting,value:this.getValue(e.target.value)})},getValue:function(e){return"number"===this.type?parseInt(e):e}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(11),s=n(90),r=n.n(s),i=n(8),o=n.n(i);t.default={name:"the-settings",computed:{file_name:function(){return this.$store.getters.file_name},settings:function(){return this.$store.state.settings}},components:{TheSetting:r.a},methods:{reset:function(){var e=this;o.a.forEach(a.b,function(t,n){e.$store.dispatch("updateSetting",{setting:n,value:t})})},download:function(){var e=document.createElement("a");document.body.appendChild(e),e.download=this.file_name,e.href="data:application/octet-stream,"+encodeURIComponent(this.$store.getters.header+"\r\n")+encodeURIComponent(this.$store.getters.range.join("\r\n")),e.click(),document.body.removeChild(e)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,function(e,t,n){n(70);var a=n(0)(n(30),n(92),null,null);e.exports=a.exports},function(e,t,n){n(78);var a=n(0)(n(31),n(100),null,null);e.exports=a.exports},function(e,t,n){n(71);var a=n(0)(n(32),n(93),null,null);e.exports=a.exports},function(e,t,n){n(74);var a=n(0)(n(33),n(96),null,null);e.exports=a.exports},function(e,t,n){n(72);var a=n(0)(n(34),n(94),null,null);e.exports=a.exports},function(e,t,n){n(77);var a=n(0)(n(35),n(99),null,null);e.exports=a.exports},function(e,t,n){n(80);var a=n(0)(n(36),n(102),null,null);e.exports=a.exports},function(e,t,n){n(73);var a=n(0)(n(37),n(95),null,null);e.exports=a.exports},function(e,t,n){n(76);var a=n(0)(n(38),n(98),null,null);e.exports=a.exports},function(e,t,n){n(79);var a=n(0)(n(39),n(101),null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("table",{staticClass:"table is-bordered is-striped"},[n("thead",[n("the-example-header")],1),e._v(" "),n("tbody",e._l(e.range,function(e,t){return n("the-example-number",{key:t,attrs:{number:e}})}))])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("\n      Voorbeeld\n    ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("td",{domProps:{innerHTML:e._s(e.number)}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-8 is-offset-2"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("the-message")],1)]),e._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("the-settings")],1),e._v(" "),n("div",{staticClass:"column"},[n("the-example")],1)])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"message is-warning"},[n("div",{staticClass:"message-header"},[n("p",[e._v("Pas op!")]),e._v(" "),n("button",{staticClass:"delete",on:{click:function(t){e.hide()}}})]),e._v(" "),n("div",{staticClass:"message-body"},[e._v("\n    Deze tool wordt gemaakt voor een schoolproject. Gebruik op eigen risico.\n    Fouten kunnen gemeld worden op GitHub via de volgende link\n    "),n("a",{attrs:{href:e.url,target:"_blank"},domProps:{innerHTML:e._s(e.url)}}),e._v(" of door een e-mail\n    te sturen naar "),n("a",{attrs:{href:"mailto:"+e.email,target:"_blank"},domProps:{innerHTML:e._s(e.email)}}),e._v(".\n  ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("p",[e._v("\n        Gemaakt met "),n("span",{staticClass:"fa fa-heart heart"}),e._v(" door "),n("a",{staticClass:"is-dark name",attrs:{href:e.email},domProps:{innerHTML:e._s(e.name)}})])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("the-header"),e._v(" "),n("the-hero"),e._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("router-view")],1)]),e._v(" "),n("the-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("label",{staticClass:"label",domProps:{innerHTML:e._s(e.label)}}),e._v(" "),n("p",{staticClass:"control"},[n("input",{staticClass:"input",attrs:{type:e.type,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.change}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-center"},[n("a",{staticClass:"nav-item",attrs:{href:e.github,target:"_blank"}},[e._m(0)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-github"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",{domProps:{innerHTML:e._s(e.header)}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[e._m(0),e._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},e._l(e.settings,function(e,t){return n("the-setting",{key:t,attrs:{label:e.label,type:e.type,placeholder:e.placeholder,setting:t}})}))]),e._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{download:e.file_name},on:{click:function(t){e.download()}}},[e._v("Download "+e._s(e.file_name))]),e._v(" "),n("a",{staticClass:"card-footer-item is-danger",on:{click:function(t){e.reset()}}},[e._v("Resetten")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._v("\n      Instellingen\n    ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-medium is-primary is-bold"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title is-2",domProps:{innerHTML:e._s(e.title)}}),e._v(" "),n("h2",{staticClass:"subtitle",domProps:{innerHTML:e._s(e.subtitle)}})])])])},staticRenderFns:[]}}],[25]);
//# sourceMappingURL=app.99bf9a7e22cdd0565d77.js.map