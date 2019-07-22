(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){"use strict";var o=t(19);Object.defineProperty(n,"__esModule",{value:!0});var r,a=(r=t(39))&&"object"===typeof r&&"default"in r?r.default:r;function l(e,n,t,o,r,a,l){try{var i=e[a](l),c=i.value}catch(u){return void t(u)}i.done?n(c):Promise.resolve(c).then(o,r)}function i(){var e;return e=o.mark(function e(n){var t;return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FileReader,e.abrupt("return",new Promise(function(e,o){t.onerror=function(){t.abort(),o(new DOMException("Problem parsing input file."))},t.onloadend=function(){e(t.result)},t.readAsDataURL(n)}));case 2:case"end":return e.stop()}},e)}),(i=function(){var n=this,t=arguments;return new Promise(function(o,r){var a=e.apply(n,t);function i(e){l(a,o,r,i,c,"next",e)}function c(e){l(a,o,r,i,c,"throw",e)}i(void 0)})}).apply(this,arguments)}n.clipString=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:35,t=e.length,o=Math.max(0,Math.floor((n-3)/2)),r=Math.max(0,Math.ceil(t-o));return t<n?e:"".concat(e.slice(0,o),"...").concat(e.slice(r))},n.fileToBase64=function(e){return i.apply(this,arguments)},n.getElByHash=function(){if(window&&window.location.hash&&window.location.hash.length>1){var e=a(window.location.hash.split("#"));return document.getElementById(e)}return null},n.isDev=function(){return!1},n.isIOS=function(){return navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)},n.nl2Br=function(e){return"string"===typeof e?e.replace(/(?:\r\n|\r|\n)/g,"<br />"):""},n.scrollToEl=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return window.scrollTo({top:e,behavior:n})};t(e?e.offsetTop:0)},n.sleep=function(e){return new Promise(function(n){return setTimeout(n,e)})}},25:function(e,n,t){"use strict";function o(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=o(r);t(66),t(39);var l=o(t(67)),i=o(t(310));function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach(function(n){c(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function f(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=r.memo(function(e){var n=e.active,t=void 0!==n&&n,o=e.time,a=void 0===o?0:o,l=e.timeout,i=void 0===l?1e3:l,c=e.onTick,u=void 0===c?function(){return null}:c,s=e.onFinish,m=void 0===s?function(){return null}:s,f=e.stop,p=void 0!==f&&f,h=d(r.useState(0),2),g=h[0],E=h[1],v=a-g/1e3,y=t&&v>0?i:null,b=function(e){var n=r.useRef();return r.useEffect(function(){n.current=e}),n.current}(y);return function(e,n){var t=r.useRef(function(){});r.useEffect(function(){t.current=e},[e]),r.useEffect(function(){if(null!==n){var e=setInterval(function(){t.current()},n);return function(){return clearInterval(e)}}},[n])}(function(){p||(u(Math.max(v-i/1e3,0)),E(g+i))},y),r.useEffect(function(){null!==b&&null===y&&g>0&&m()},[y]),null}),g={alignItems:"stretch",display:"flex",flexBasis:0,flexGrow:1,flexShrink:1,minHeight:"min-content"},E=r.memo(function(e){var n=e.children,t=e.fallback,o=void 0===t?2:t,c=e.adjust,s=void 0===c?0:c,p=e.minColumnWidth,h=void 0===p?300:p,E=f(e,["children","fallback","adjust","minColumnWidth"]),v=r.useRef(null),y=o*h,b=d(r.useState(y),2),w=b[0],O=b[1],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,n=d(r.useState({height:0,width:0}),2),t=n[0],o=n[1];return r.useEffect(function(){var n=function(){return o({height:window.innerHeight,width:window.innerWidth})},t=l(n,e);return window.addEventListener("resize",t),n(),function(){return window.removeEventListener("resize",t)}},[e]),t}().width;r.useEffect(function(){if(v.current){var e=v.current.getBoundingClientRect();O(e.width)}},[C]);var j=Math.round(w/h);return a.createElement("div",u({className:"masonry-wrapper"},E,{style:m({},g,{maxWidth:"100%"}),ref:v}),i(j,function(e){var t=e===j-1;return a.createElement("div",{style:m({},g,{flexDirection:"column",marginRight:t?-1:0}),key:"tile-".concat(e)},a.Children.toArray(n).filter(function(n,t){return(t+e+(j-s))%j===0}).map(function(e,n){return r.cloneElement(e,m({},e.props,{key:n}))}))}))});n.Countdown=h,n.LinearGradient=function(e){var n=e.children,t=e.colors,o=void 0===t?[]:t,a=e.deg,l=void 0===a?90:a,i=100/(o.length-1),c=["".concat(l,"deg")].concat(p(o.map(function(e,n){return"".concat(e," ").concat(n*i,"%")}))),u=m({},n.props.style,{backgroundImage:"linear-gradient(".concat(c.join(", "),")")});return r.cloneElement(n,m({},n.props,{style:u}))},n.Masonry=E},350:function(e,n,t){},351:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(23),l=t.n(a),i=t(83),c=t(11),u=t(374),s=t(35),m=t(376),f=t(377),d=t(370),p=t(78),h=t.n(p),g=function(e){var n=e.children,t=e.code,o=e.title;return r.a.createElement(m.a,{elevation:5,id:h()(o)},r.a.createElement(f.a,{title:o}),r.a.createElement(d.a,null,n),r.a.createElement(u.a,{language:"javascript",style:s.a},t))},E=function(){return r.a.createElement(g,{title:"clipString",code:"\nimport { clipString } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => {\nreturn (\n  <p>\n    {clipString('Too short to be clipped', 30)}<br />\n    {clipString('Too big to be shown', 17)}\n  </p>\n)\n}"},r.a.createElement("p",null,Object(c.clipString)("Too short to be clipped",30)),r.a.createElement("p",null,Object(c.clipString)("Too big to be shown",17)))},v=t(7),y=t(371),b=t(5),w=t(25),O=function(){var e=Object(o.useState)(10),n=Object(v.a)(e,2),t=n[0],a=n[1],l=Object(o.useState)(10),i=Object(v.a)(l,2),c=i[0],u=i[1],s=Object(b.useToggle)(),m=Object(v.a)(s,2),f=m[0],d=m[1];function p(){u(function(e){return e+10}),a(function(e){return e+10})}return r.a.createElement(g,{title:"Countdown",code:"\nimport {\n  Countdown,\n} from '@seasonedsoftware/utils/ui'\n\nconst MyComponent = () => {\n  const [count, setCount] = useState(10)\n  return (\n    <>\n      <Countdown\n        active\n        time={10}\n        onTick={setCount} // will be called every 1000ms\n        // timeout={1000} can be changed\n        onFinish={() => {\n          console.log('Finished!')\n        }}\n      />\n      <p>{count}</p>\n    </>\n  )\n}"},r.a.createElement("p",null,"Click the button below to start the Countdown.",r.a.createElement("br",null),r.a.createElement("strong",null,t||"Finished")),r.a.createElement(w.Countdown,{onTick:a,onFinish:function(){d(),console.log("Finished!")},active:f,time:c}),f||r.a.createElement(y.a,{onClick:function(){d(),0===t&&p()},variant:"contained",color:"primary"},"Start")," ",f&&r.a.createElement(y.a,{onClick:d,variant:"contained",color:"primary"},"Stop")," ",f&&r.a.createElement(y.a,{onClick:p,variant:"contained",color:"primary"},"+10s"))},C=t(19),j=t.n(C),k=t(36),S=function(){return r.a.createElement(g,{title:"fileToBase64",code:"\nimport { fileToBase64 } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => {\n  const onFileChange = async ({ target }) => {\n    if (target.files && target.files.length) {\n      const [file] = target.files\n      const parsed = await fileToBase64(file)\n      console.log(`Parsed file: ${parsed}`)\n    }\n  }\n  return <input type=\"file\" onChange={onFileChange} />\n}"},r.a.createElement("p",null,"Click the button bellow, add a file and check the logs"),r.a.createElement("input",{type:"file",onChange:P}))};function P(e){return M.apply(this,arguments)}function M(){return(M=Object(k.a)(j.a.mark(function e(n){var t,o,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.target.files||!n.target.files.length){e.next=6;break}return t=Object(v.a)(n.target.files,1),o=t[0],e.next=4,Object(c.fileToBase64)(o);case 4:r=e.sent,console.log("Parsed file: ".concat(r));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=function(){return r.a.createElement(g,{title:"getElByHash",code:"\nimport { getElByHash } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => (\n  <Button onClick={() => console.log(getElByHash())}>\n    Get el\n  </Button>\n)"},r.a.createElement("p",null,"Click the button bellow and check the logs."),r.a.createElement(y.a,{onClick:function(){window.location.hash="get-el-by-hash",console.log(Object(c.getElByHash)())},color:"primary",variant:"contained"},"Change hash"))},T=function(){return r.a.createElement(g,{title:"LinearGradient",code:"\nimport {\n  LinearGradient,\n} from '@seasonedsoftware/utils/ui'\n\nconst MyComponent = () => (\n  <LinearGradient\n    colors={['#6132CE', '#B73D97', '#DD4E44']}\n    deg={315} // defaults to 90\n  >\n    <p>A child container.</p>\n  </LinearGradient>\n)"},r.a.createElement(w.LinearGradient,{colors:["#6132CE","#B73D97","#DD4E44"],deg:315},r.a.createElement("div",{style:{padding:"1rem"}},r.a.createElement("p",null,"This gradient will be applied to the child container."),r.a.createElement("p",null,"Minimum of 2 colors, you can apply as many as you want though."))))},I=function(){var e=Object(b.useToggle)(),n=Object(v.a)(e,2),t=n[0],o=n[1];return Object(b.useHtmlClass)("super-class",t),r.a.createElement(g,{title:"useHtmlClass",code:"\nimport {\n  useHtmlClass,\n  useToggle,\n} from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const [enabled, toggle] = useToggle()\n  useHtmlClass('super-class', enabled)\n  return <Button onClick={toggle}>Toggle class</Button>\n}"},r.a.createElement("p",null,"Click the button bellow and inspect the HTML element"),r.a.createElement(y.a,{onClick:o,variant:"contained",color:"primary"},"Toggle class"))},D=function(){var e=Object(o.useState)(null),n=Object(v.a)(e,2),t=n[0],a=n[1];return Object(b.useInterval)(function(){console.log("Hello world!")},t),r.a.createElement(g,{title:"useInterval",code:"\nimport { useInterval } from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  useInterval(() => {\n    console.log('foo')\n  }, 1000) // null to disable\n  return null\n}"},r.a.createElement("p",null,"Click the button bellow and check the logs"),r.a.createElement(y.a,{onClick:function(){return a(t?null:1e3)},variant:"contained",color:"primary"},t?"Disable":"Enable"))},x=function(){return r.a.createElement(g,{title:"isIOS",code:"\nimport { isIOS } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => {\nreturn <p>{JSON.stringify(isIOS())}</p>\n}"},r.a.createElement("p",null,"Am I using an iOS device? ",r.a.createElement("strong",null,JSON.stringify(Object(c.isIOS)()))))},L=function(){return r.a.createElement(g,{title:"isDev",code:"\nimport { isDev } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => {\nreturn <p>{JSON.stringify(isDev())}</p>\n}"},r.a.createElement("p",null,"Am I on DEV environment? ",r.a.createElement("strong",null,JSON.stringify(Object(c.isDev)()))))},A=function(){return r.a.createElement(g,{title:"Masonry",code:"\nimport {\n  Masonry,\n} from '@seasonedsoftware/utils/ui'\n\nconst MyComponent = () => (\n  <Masonry\n    minColumnWidth={200} // defaults to 300\n  >\n    <p>Foo</p>\n    <p>Bar</p>\n    <p>Fizz</p>\n    <p>Buzz</p>\n  </Masonry>\n)"},r.a.createElement("p",null,"Resize the window to see it working."),r.a.createElement(w.Masonry,{minColumnWidth:200},r.a.createElement("p",{className:"masonry-p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."),r.a.createElement("p",{className:"masonry-p"},"Ut aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),r.a.createElement("p",{className:"masonry-p"},"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",{className:"masonry-p"},"Lorem ipsum dolor sit amet enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."),r.a.createElement("p",{className:"masonry-p"},"Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),r.a.createElement("p",{className:"masonry-p"},"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))},H=t(82),N=t.n(H),F=t(375),W=function(e){var n=e.onDelete;return Object(b.useOnMount)(function(){console.log("Component did mount")}),Object(b.useOnUnmount)(function(){console.log("Component did unmount")}),r.a.createElement(F.a,{onDelete:n,label:"Hello world!"})},R=function(){var e=Object(o.useState)(0),n=Object(v.a)(e,2),t=n[0],a=n[1];return r.a.createElement(g,{title:"useOnMount and useOnUnmount",code:"\nimport {\n  useOnMount,\n  useOnUnmount,\n} from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  useOnMount(() =>\n    console.log('Component did mount')\n  )\n  useOnUnmount(() =>\n    console.log('Component did unmount')\n  )\n  return null\n}"},r.a.createElement("p",null,"Click the button bellow and check the logs"),r.a.createElement("p",null,r.a.createElement(y.a,{onClick:function(){return a(t+1)},variant:"contained",color:"primary"},"Add element")," "),N()(t,function(e){return r.a.createElement(W,{key:"mount-".concat(e),onDelete:function(){return a(t-1)}})}))},U=function(){var e=Object(b.useMounted)();return r.a.createElement(g,{title:"useMounted",code:"\nimport { useMounted } from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const isMounted = useMounted()\n  return isMounted ? 'Mounted' : 'Loading...'\n}"},r.a.createElement("p",null,"Am I mounted? ",r.a.createElement("strong",null,e?"Yes":"No")))},z=function(){return r.a.createElement(g,{title:"nl2Br",code:"\nimport { nl2Br } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => {\nreturn nl2Br(\n        `Lorem ipsum dolor sit amet...\n\n        ...`\n      )\n}"},r.a.createElement("p",null,Object(c.nl2Br)("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")))},G=function(){var e=Object(b.usePageId)();return Object(b.useBodyClass)(e,!0),r.a.createElement(g,{title:"usePageId and useBodyClass",code:"\nimport {\n  usePageId,\n  useBodyClass,\n} from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const pageId = usePageId()\n  // const pageId = usePageId(\n  //   window.location, 'anotherdefault'\n  // )\n  useBodyClass(pageId, true)\n  return null\n}"},r.a.createElement("p",null,"The current pageId is: ",r.a.createElement("strong",null,e),r.a.createElement("br",null),"Inspect the body element to see it working."),r.a.createElement("p",null,"It creates a pageId to apply on body class and so on.",r.a.createElement("br",null),"It will be based on the current"," ",r.a.createElement("strong",null,"window.location.pathname"),"."),r.a.createElement("p",null,"You can also send another location as the first param, like your favorite router custom location object."),r.a.createElement("p",null,"When you are on the root path, it will show the default ('home' by default) which is the second param."))},q=function(){var e=Object(o.useState)(0),n=Object(v.a)(e,2),t=n[0],a=n[1],l=Object(b.usePrevious)(t);return r.a.createElement(g,{title:"usePrevious",code:"\nimport { usePrevious } from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const [count, setCount] = useState(0)\n  const prev = usePrevious(count)\n  return (\n    <Button\n      onClick={() => setCount(count + 1)}\n    >\n      +1\n    </Button>\n  )\n}"},r.a.createElement("p",null,"Current value: ",r.a.createElement("strong",null,t),r.a.createElement("br",null),"Previous value: ",r.a.createElement("strong",null,l)),r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){return a(t+1)}},"+1"))},J=t(48),_=t.n(J),Q=[0,1,2,3,4,5,6,7,8,9],Y=function(){var e=Object(o.useState)(0),n=Object(v.a)(e,2)[1],t=Object(b.useProcessOnce)(_.a,Q),a=_()(Q);return Object(b.useInterval)(function(){n(function(e){return e+1})},1e3),r.a.createElement(g,{title:"useProcessOnce",code:"\nimport {\n  useProcessOnce,\n  useInterval,\n} from '@seasonedsoftware/utils/hooks'\nimport shuffle from 'lodash/shuffle'\n\nconst numbers = [0,1,2,3,4,5,6,7,8,9]\n\nconst MyComponent = () => {\n  const [, setCount] = useState(0)\n  const random = useProcessOnce(shuffle, numbers)\n  const random2 = shuffle(numbers)\n  useInterval(() => {\n    setCount(c => c + 1)\n  }, 1000)\n  // return ...\n}"},r.a.createElement("p",null,"The random value is: ",r.a.createElement("strong",null,JSON.stringify(t))),r.a.createElement("p",null,"Without the hook: ",r.a.createElement("strong",null,JSON.stringify(a))))},V=function(){return r.a.createElement(g,{title:"useQueryParam",code:"\nimport { useQueryParam } from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => (\n  <Button onClick={() =>\n    console.log(useQueryParam('foo'))\n  }>\n    Get param\n  </Button>\n)"},r.a.createElement("p",null,"Add ",r.a.createElement("em",null,'"?foo=bar"')," to the URL, click the button bellow and check the logs."),r.a.createElement(y.a,{onClick:function(){console.log(Object(b.useQueryParam)("foo"))},color:"primary",variant:"contained"},"Get param"))},$=t(372),K=function(){var e=Object(b.useToggle)(),n=Object(v.a)(e,2),t=n[0],o=n[1];return Object(b.useScrollAfterLoad)(t),r.a.createElement(g,{title:"useScrollAfterLoad",code:"\nimport {\n  useScrollAfterLoad,\n  useToggle,\n} from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const [loaded, toggle] = useToggle()\n  useScrollAfterLoad(loaded)\n  return (\n    <>\n      <Button onClick={toggle}>\n        {loaded ? 'Load again' : 'Finish loading'}\n      </Button>\n      {loaded || <CircularProgress />}\n    </>\n  )\n}"},r.a.createElement("p",null,"Window will scroll to hash when you pass ",r.a.createElement("em",null,"true")," as argument.",r.a.createElement("br",null),"Change the window hash to test it differently."),r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:o},t?"Load again":"Finish loading")," ",t||r.a.createElement($.a,{style:{marginLeft:10},size:25})))},X=function(){return r.a.createElement(g,{title:"scrollToEl",code:"\nimport { scrollToEl } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => (\n  <>\n    <Button onClick={() => {\n      scrollToEl()\n    }}>\n      Scroll to Top\n    </Button>\n    <Button onClick={() => {\n      const el = document.getElementById('Hooks')\n      scrollToEl(el, 'auto') // default 'smooth'\n    }}>\n      Hard Scroll to Hooks\n    </Button>\n  </>\n)"},r.a.createElement("p",null,"Click the buttons bellow."),r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){Object(c.scrollToEl)()}},"Scroll to Top")," ",r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){var e=document.getElementById("Hooks");Object(c.scrollToEl)(e,"auto")}},"Hard Scroll to Hooks"))},Z=function(){var e=Object(b.useSetState)({first:!1,second:!1}),n=Object(v.a)(e,2),t=n[0],o=n[1];return r.a.createElement(g,{title:"useSetState",code:"\nimport { useSetState } from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const [state, setState] = useSetState({\n    first: false,\n    second: false,\n  })\n  return (\n    <>\n      <Button\n        color={state.first ? 'primary' : 'secondary'}\n        onClick={() => {\n          setState({ first: !state.first })\n        }}\n      >\n        First\n      </Button>\n      <Button\n        color={state.second ? 'primary' : 'secondary'}\n        onClick={() => {\n          setState({ second: !state.second })\n        }}\n      >\n        Second\n      </Button>\n    </>\n  )\n}"},r.a.createElement("p",null,"A replacement for the old ",r.a.createElement("em",null,"this.setState"),"."),r.a.createElement("p",null,r.a.createElement("strong",null,"useSafeState")," is the very same but will avoid calling setState when the component is unmounted."),r.a.createElement("p",null,"Good to avoid those warnings when dealing with Promises."),r.a.createElement("p",null,r.a.createElement(y.a,{variant:"contained",color:t.first?"primary":"secondary",onClick:function(){o({first:!t.first})}},"First")," ",r.a.createElement(y.a,{variant:"contained",color:t.second?"primary":"secondary",onClick:function(){o({second:!t.second})}},"Second")))},ee=function(){var e=Object(o.useState)(!1),n=Object(v.a)(e,2),t=n[0],a=n[1],l=function(){var e=Object(k.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,Object(c.sleep)(2e3);case 3:a(!1);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(g,{title:"sleep",code:"\nimport { sleep } from '@seasonedsoftware/utils/helpers'\n\nconst MyComponent = () => {\n  const [clicked, setClicked] = useState(false)\n  return clicked ? (\n    <CircularProgress />\n  ) : (\n    <Button onClick={async () => {\n      setClicked(true)\n      await sleep(2000)\n      setClicked(false)\n    }}>\n      Click\n    </Button>\n  )\n}"},r.a.createElement("p",null,"Click the button bellow"),t?r.a.createElement($.a,null):r.a.createElement(y.a,{onClick:l,variant:"contained",color:"primary"},"Click"))},ne=t(373),te=function(){var e=Object(b.useToggle)(!0),n=Object(v.a)(e,2),t=n[0],o=n[1];return r.a.createElement(g,{title:"useToggle",code:"\nimport { useToggle } from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const [on, toggle] = useToggle(true)\n  return <Switch checked={on} onChange={toggle} />\n}"},r.a.createElement(ne.a,{checked:t,onChange:o}))},oe=function(){var e=Object(b.useWindowDimensions)(),n=e.width,t=e.height;return r.a.createElement(g,{title:"useWindowDimensions",code:"\nimport {\n  useWindowDimensions,\n} from '@seasonedsoftware/utils/hooks'\n\nconst MyComponent = () => {\n  const { width, height } = useWindowDimensions()\n  return (\n    <p>{width} - {height}</p>\n  )\n}"},r.a.createElement("p",null,"Resize the window to see it working",r.a.createElement("br",null),"Width: ",r.a.createElement("strong",null,n),r.a.createElement("br",null),"Height: ",r.a.createElement("strong",null,t),r.a.createElement("br",null)),r.a.createElement("p",null,"You can pass a number argument to change the"," ",r.a.createElement("a",{rel:"noopener noreferrer",href:"https://lodash.com/docs/4.17.14#throttle",target:"_blank"},"throttle"),"."))},re=function(e){var n=e.children;return r.a.createElement("div",{id:n,style:{margin:"6rem 0 3rem",width:"100%"}},r.a.createElement("h1",null,n))},ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Components"),r.a.createElement("div",{className:"grid"},r.a.createElement(O,null),r.a.createElement(T,null),r.a.createElement(A,null)),r.a.createElement(re,null,"Utils"),r.a.createElement("div",{className:"grid"},r.a.createElement(ee,null),r.a.createElement(E,null),r.a.createElement(S,null),r.a.createElement(B,null),r.a.createElement(X,null),r.a.createElement(L,null),r.a.createElement(x,null),r.a.createElement(z,null)),r.a.createElement(re,null,"Hooks"),r.a.createElement("div",{className:"grid"},r.a.createElement(I,null),r.a.createElement(oe,null),r.a.createElement(q,null),r.a.createElement(te,null),r.a.createElement(Z,null),r.a.createElement(Y,null),r.a.createElement(V,null),r.a.createElement(D,null),r.a.createElement(R,null),r.a.createElement(U,null),r.a.createElement(G,null),r.a.createElement(K,null)))},le=(t(350),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,{basepath:"/utils"},r.a.createElement(ae,{path:"/"})))});l.a.render(r.a.createElement(le,null),document.getElementById("root"))},5:function(e,n,t){"use strict";function o(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),a=o(t(66)),l=o(t(39)),i=o(t(67));function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(o=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(r)throw a}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e){var n=s(r.useReducer(function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(t,!0).forEach(function(n){c(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},e,{},n)},e),2);return[n[0],n[1]]}n.useBodyClass=function(e,n){r.useEffect(function(){document.body.classList[n?"add":"remove"](e)},[e,n])},n.useHtmlClass=function(e,n){r.useEffect(function(){document.documentElement.classList[n?"add":"remove"](e)},[e,n])},n.useInterval=function(e,n){var t=r.useRef(function(){});r.useEffect(function(){t.current=e},[e]),r.useEffect(function(){if(null!==n){var e=setInterval(function(){t.current()},n);return function(){return clearInterval(e)}}},[n])},n.useMounted=function(){var e=s(r.useState(!1),2),n=e[0],t=e[1];return r.useEffect(function(){return t(!0)},[]),n},n.useOnMount=function(e){r.useEffect(function(){e()},[])},n.useOnUnmount=function(e){r.useEffect(function(){return e},[])},n.usePageId=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"home";return r.useMemo(function(){return a(e.pathname.split("/")).join("-")},[e.pathname])||n},n.usePrevious=function(e){var n=r.useRef();return r.useEffect(function(){n.current=e}),n.current},n.useProcessOnce=function(e,n){var t=s(r.useState(),2),o=t[0],a=t[1];return r.useEffect(function(){o||a(e(n))},[]),o||n},n.useQueryParam=function(e){return new URLSearchParams(window.location.search).get(e)},n.useSafeState=function(e){var n=s(m(e),2),t=n[0],o=n[1],a=r.useRef(!1);return r.useEffect(function(){return a.current=!0,function(){a.current=!1}},[]),[t,function(e){return a.current&&o(e)}]},n.useScrollAfterLoad=function(e){r.useEffect(function(){e&&function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return window.scrollTo({top:e,behavior:n})};t(e?e.offsetTop:0)}(function(){if(window&&window.location.hash&&window.location.hash.length>1){var e=l(window.location.hash.split("#"));return document.getElementById(e)}return null}()||void 0)},[e])},n.useSetState=m,n.useToggle=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=s(r.useState(e),2),t=n[0],o=n[1];return[t,function(){return o(!t)}]},n.useWindowDimensions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,n=s(r.useState({height:0,width:0}),2),t=n[0],o=n[1];return r.useEffect(function(){var n=function(){return o({height:window.innerHeight,width:window.innerWidth})},t=i(n,e);return window.addEventListener("resize",t),n(),function(){return window.removeEventListener("resize",t)}},[e]),t}},86:function(e,n,t){e.exports=t(351)}},[[86,1,2]]]);
//# sourceMappingURL=main.e6bbb9d3.chunk.js.map