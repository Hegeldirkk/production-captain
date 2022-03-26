!function(){function e(e){return e&&e.__esModule?e.default:e}var t;t=JSON.parse('[{"command":"help","responseType":"list","value":["<code>a-propos</code> : Affiche les informations me concernant","<code>effacer</code> : Nettoie le terminal","<code>experiences</code> : Affiche la liste de mes expériences","<code>skills</code> : Affiche la liste de mes compétences","<code>skills encours</code> : Affiche la liste de mes compétences encours","<code>certifications</code> : Affiche la liste de mes certifications obtenues","<code>get cv dev</code> : Télécharge le CV","<code>get cv sec</code> : Télécharge le CV","<code>help</code> : Affiche l\'aide","<code>hobby</code> : Affiche la liste de mes passes temps","<code>dark/light</code> : Change le thème de la page","<em>Vous pouvez utiliser la touche TAB afin de compléter une commande</em>","<em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas.</em>"]},{"command":"a-propos","responseType":"code","value":["{","   \\"nom\\" : \\"DIABAKATE Ikary Ryann Kouadio Kamory\\",","   \\"poste\\" : \\"Développeur WEB/MOBILE - DevOps - Pentesteur\\",","   \\"experience\\" : \\"5 ans\\",","   \\"ville\\" : \\"Abidjan, Côte d\'Ivoire\\"","}"]},{"command":"experiences","responseType":"table","headers":["Date","Poste & Client","Description","Tech"],"rows":[["06/2020<br/>","DÉVELOPPEUR D’APP MOBILE SÉCURISÉE & DEVSECOPS<br/><em><code>SOUGAHPAY</code></em>","Projet de création d’une application mobile de transfert d’argent. Réguler le serveur et l\'application web au norme PCI-DSS, Sécurité des APIs, Test de pénétration.","Server(IDS/IPS - bash - Linux - git/gitlab), App Mobile(Flutter & Dart)"],["03/2019<br/>","DÉVELOPPEUR D’APP MOBILE SÉCURISÉE<br/> <em><code>CAMPUS MONDE</code> </em>","Projet de création d’une application mobile de Radio CAMPUS MONDE.","Firebase <br/> Flutter & Dart<<br/>"],["07/2018<br/>","DÉVELOPPEUR D’APP LIVRAISON MOBILE SÉCURISÉE<br/><code><em>WENI</em></code>","Projet de Création d’une application mobile de Livraison sécurisé entreprise weni (weni.ci).","backend(Firebase), Front-end(Dashboard admin - vuejs/ App mobile - Flutter & Dart)."],["01/2019<br/>05/2020","RESPONSABLE PENTESTEUR JUNIOR SÉCURITÉ & INTRUSION<br/><code><em>NYS-AFRICA</em></code>","Élaboration de procédure et politique de sécurité. Mise en place d’une stratégie pour des actions telles que (sensibilisation des utilisateurs aux problèmes de sécurité, de sauvegarde de données, reprise après sinistre). Recherche de preuves digitales Analyse et récupération de preuves numérique Test de pénétration des Systèmes Informatiques (Serveur, Serveur web, Base de données, Réseau, IoT, Application web). Scanner de vulnérabilité des systèmes IT.","Metasploit<br/>Injection SQL<br/>NMAP<br/>Acunetix<br/>Cloudflare<br/>Google hacking<br/>Sqlmap"],["05/2017<br/>12/2017","STAGIAIRE DÉVELOPPEUR<br/><code><em>CI-ENERGIES</em></code>","Création d’un logiciel pour la gestion du parc informatique et consommables. L’installation des postes et autres, chargé d’assistance aux utilisateurs, au dépannage réseau et de la maintenance des différents équipements.","PHP<br/>HTML<br/>NMAP<br/>CSS"]]},{"command":"skills","responseType":"list","value":["Programmation: C, C++, JS, PYTHON, PHP, FLUTTER & DART","Editeur: NANO, VI, EMACS, VSCODE, VISUAL STUDIO, ANDROID STUDIO, ATOM","Framework: LARAVEL, ADONIS JS, VUE JS","DevOps: DOCKER, SHELL, VAGRANT, GIT, GCC","Linux: DEBIAN, UBUNTU, PARROT OS, KALI OS","Database: MYSQL/MARIADB, ORACLE, POSTGRSQL","Server: APACHE, NODEJS","Sécurité: WIRESHARK, BURP SUITE, METASPLOIT, OWASP, NMAP, SQLMAP, CLOUDFLARE, SNORT","Framework: MYSQL/MARIADB, ORACLE, POSTGRSQL","Other: FIREBASE, GITHUB, GITLAB, BITBUCKET, SOCKET, API, POSTMAN, INSOMNIA"]},{"command":"skills encours","responseType":"list","value":["Programmation: C#, .NET, JAVA","Agile: SCRUM MASTER"]},{"command":"certifications","responseType":"list","value":["CEHv10: CERTIFIED ETHICAL HACKER | N°ECC1934570826","CSCUv2: CERTIFIED SECURE COMPUTER USER | N°ECC5192670843","GADTP: GOOGLE AFRICA DEVELOPER TRAINING PROGRAM | ID E34E6BEE11CF498A","PSE: POSTMAN STUDENT EXPERT | ID idiabakate@gmail.com"]},{"command":"hobby","responseType":"list","value":["Musique: Piano","Technologies: Actualités","Autre: Football, Sports"]},{"command":"","responseType":"table","headers":["Nom","Description","Tech","Liens"],"rows":[["Chartsfinder - Web<br/>(2021)","Application web pour trouver rapidement des cartes aéronautiques. Une version C# existait déjà mais j\'ai préféré la mettre à jour avec une version web qui est plus simple d\'utilisation.","Angular 11, PHP 7.4","<a href=\\"https://chartsfinder.adautry.fr\\" target=\\"blank\\">Lien</a>"],["Personal website<br/>(2021)","Site web personnel me permettant de montrer mes projets et de déployer une nouvelle version du logiciel.<br/>Il y a même un jeu caché...","Symfony 5","<a href=\\"https://adautry.fr\\" target=\\"blank\\">Lien</a>"],["Chartsfinder - Software<br/>(2020)","Logiciel permettant de récupérer rapidement les cartes aéronautiques.","C# WPF","<a href=\\"https://adautry.fr/software/chartsfinder\\" target=\\"blank\\">Lien</a>"]]}]');var n={};!function e(t,n,i,r){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function a(){}function s(e){var i=n.exports.Promise,r=void 0!==i?i:t.Promise;return"function"==typeof r?new r(e):(e(a,a),null)}var c,u,h,l,d,f,m,p,v,y=(h=Math.floor(1e3/60),l={},d=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return l[t]=requestAnimationFrame((function n(i){d===i||d+h-1<i?(d=i,delete l[t],e()):l[t]=requestAnimationFrame(n)})),t},u=function(e){l[e]&&cancelAnimationFrame(l[e])}):(c=function(e){return setTimeout(e,h)},u=function(e){return clearTimeout(e)}),{frame:c,cancel:u}),g=(p={},function(){if(f)return f;if(!i&&o){var t=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{f=new Worker(URL.createObjectURL(new Blob([t])))}catch(e){return"function"==typeof console.warn&&console.warn("🎊 Could not load worker",e),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(n,i,r){if(m)return t(n,null),m;var o=Math.random().toString(36).slice(2);return m=s((function(i){function a(t){t.data.callback===o&&(delete p[o],e.removeEventListener("message",a),m=null,r(),i())}e.addEventListener("message",a),t(n,o),p[o]=a.bind(null,{data:{callback:o}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),p)p[t](),delete p[t]}}(f)}return f}),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(e,t,n){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:b[t],n)}function x(e){return e<0?0:Math.floor(e)}function w(e){return parseInt(e,16)}function E(e){return e.map(S)}function S(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:w(t.substring(0,2)),g:w(t.substring(2,4)),b:w(t.substring(4,6))}}function k(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function I(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function L(e,t,n,o,a){var c,u,h=t.slice(),l=e.getContext("2d"),d=s((function(t){function s(){c=u=null,l.clearRect(0,0,o.width,o.height),a(),t()}c=y.frame((function t(){!i||o.width===r.width&&o.height===r.height||(o.width=e.width=r.width,o.height=e.height=r.height),o.width||o.height||(n(e),o.width=e.width,o.height=e.height),l.clearRect(0,0,o.width,o.height),h=h.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,i=t.x+t.random*t.tiltCos,r=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,a=t.wobbleY+t.random*t.tiltSin;return e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape?e.ellipse?e.ellipse(t.x,t.y,Math.abs(o-i)*t.ovalScalar,Math.abs(a-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,i,r,o,a,s,c){e.save(),e.translate(t,n),e.rotate(o),e.scale(i,r),e.arc(0,0,1,a,s,c),e.restore()}(e,t.x,t.y,Math.abs(o-i)*t.ovalScalar,Math.abs(a-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):(e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(r)),e.lineTo(Math.floor(o),Math.floor(a)),e.lineTo(Math.floor(i),Math.floor(t.wobbleY))),e.closePath(),e.fill(),t.tick<t.totalTicks}(l,e)})),h.length?c=y.frame(t):s()})),u=s}));return{addFettis:function(e){return h=h.concat(e),d},canvas:e,promise:d,reset:function(){c&&y.cancel(c),u&&u()}}}function C(e,n){var i,r=!e,a=!!_(n||{},"resize"),c=_(n,"disableForReducedMotion",Boolean),u=o&&!!_(n||{},"useWorker")?g():null,h=r?k:I,l=!(!e||!u)&&!!e.__confetti_initialized,d="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function f(t,n,r){for(var o,a,s,c,u,l=_(t,"particleCount",x),d=_(t,"angle",Number),f=_(t,"spread",Number),m=_(t,"startVelocity",Number),p=_(t,"decay",Number),v=_(t,"gravity",Number),y=_(t,"drift",Number),g=_(t,"colors",E),b=_(t,"ticks",Number),w=_(t,"shapes"),S=_(t,"scalar"),k=function(e){var t=_(e,"origin",Object);return t.x=_(t,"x",Number),t.y=_(t,"y",Number),t}(t),I=l,C=[],T=e.width*k.x,M=e.height*k.y;I--;)C.push((o={x:T,y:M,angle:d,spread:f,startVelocity:m,color:g[I%g.length],shape:w[(c=0,u=w.length,Math.floor(Math.random()*(u-c))+c)],ticks:b,decay:p,gravity:v,drift:y,scalar:S},a=void 0,s=void 0,a=o.angle*(Math.PI/180),s=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-a+(.5*s-Math.random()*s),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar}));return i?i.addFettis(C):(i=L(e,C,h,n,r)).promise}function m(n){var o=c||_(n,"disableForReducedMotion",Boolean),m=_(n,"zIndex",Number);if(o&&d)return s((function(e){e()}));r&&i?e=i.canvas:r&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(m),document.body.appendChild(e)),a&&!l&&h(e);var p={width:e.width,height:e.height};function v(){if(u){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};return h(t),void u.postMessage({resize:{width:t.width,height:t.height}})}p.width=p.height=null}function y(){i=null,a&&t.removeEventListener("resize",v),r&&e&&(document.body.removeChild(e),e=null,l=!1)}return u&&!l&&u.init(e),l=!0,u&&(e.__confetti_initialized=!0),a&&t.addEventListener("resize",v,!1),u?u.fire(n,p,y):f(n,p,y)}return m.reset=function(){u&&u.reset(),i&&i.reset()},m}function T(){return v||(v=C(null,{useWorker:!0,resize:!0})),v}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=C}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),n,!1);var i=n.exports,r=(n.exports.create,{});function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={},h=function(e){var t,n=Object.prototype,i=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,i){var r=t&&t.prototype instanceof v?t:v,o=Object.create(r.prototype),a=new C(i||[]);return o._invoke=function(e,t,n){var i=l;return function(r,o){if(i===f)throw new Error("Generator is already running");if(i===m){if("throw"===r)throw o;return M()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===l)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var c=h(e,t,n);if("normal"===c.type){if(i=n.done?m:d,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=m,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var l="suspendedStart",d="suspendedYield",f="executing",m="completed",p={};function v(){}function y(){}function g(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,x=_&&_(_(T([])));x&&x!==n&&i.call(x,o)&&(b=x);var w=g.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(r,o,a,s){var c=h(e[r],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&i.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var r;this._invoke=function(e,i){function o(){return new t((function(t,r){n(e,i,t,r)}))}return r=r?r.then(o,o):o()}}function k(e,n){var i=e.iterator[n.method];if(i===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var r=h(i,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;var o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function T(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(i.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=g,c(w,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,i,r,o){void 0===o&&(o=Promise);var a=new S(u(t,n,i,r),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var i=t.pop();if(i in e)return n.value=i,n.done=!1,n}return n.done=!0,n}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(i,r){return s.type="throw",s.arg=e,n.next=i,r&&(n.method="next",n.arg=t),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var i=n.completion;if("throw"===i.type){var r=i.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,i){return this.delegate={iterator:T(e),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),p}},e}(u);try{regeneratorRuntime=h}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=h:Function("r","regeneratorRuntime = r")(h)}
/*!
 * fireworks-js 1.3.5 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */function l(e){e?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}!function(e,t){if("object"==typeof r)r=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof r?r:e)[i]=n[i]}}(void 0,(function(){return function(){var t={511:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Explosion=void 0;var i=n(909);t.Explosion=function(){"use strict";function e(t){o(this,e);var n=t.x,r=t.y,a=t.ctx,s=t.hue,c=t.exp,u=t.gravity,h=t.friction,l=t.brightness,d=t.explosionLength;for(this._coordinates=[],this._alpha=1,this._x=n,this._y=r,this._exp=c,this._ctx=a,this._gravity=u,this._friction=h,this._explosionLength=d;this._explosionLength--;)this._coordinates.push([n,r]);this._angle=(0,i.randomFloat)(0,2*Math.PI),this._speed=(0,i.randomInt)(1,10),this._hue=(0,i.randomInt)(s-20,s+20),this._brightness=(0,i.randomInt)(l.min,l.max),this._decay=(0,i.randomFloat)(l.decay.min,l.decay.max)}return s(e,[{key:"update",value:function(e){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&e()}},{key:"draw",value:function(){var e=this._coordinates.length-1;this._ctx.beginPath(),this._exp&&(this._ctx.arc(this._x,this._y,(0,i.randomFloat)(.5,1.5),0,2*Math.PI),this._ctx.fill()),this._ctx.fillStyle=(0,i.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[e][0],this._coordinates[e][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,i.hsla)(this._hue,this._brightness,this._alpha),this._ctx.stroke()}}]),e}()},909:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hsla=t.getDistance=t.randomInt=t.randomFloat=void 0,t.randomFloat=function(e,t){return Math.random()*(t-e)+e},t.randomInt=function(e,t){return Math.floor(e+Math.random()*(t+1-e))},t.getDistance=function(e,t,n,i){var r=Math.pow;return Math.sqrt(r(e-n,2)+r(t-i,2))},t.hsla=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return"hsla(".concat(e,", 100%, ").concat(t,"%, ").concat(n,")")}},449:function(t,n,i){var r=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.Sound=void 0;var a=i(909);n.Sound=function(){"use strict";function t(e){o(this,t),this._buffer=[],this.onInit=!0,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},e),this.init()}return s(t,[{key:"init",value:function(){this.onInit&&this.options.enabled&&(this.onInit=!1,this.load())}},{key:"load",value:function(){return r(this,void 0,void 0,e(u).mark((function t(){var n,i,r,o,a,s,c,h;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!0,i=!1,r=void 0,e.prev=1,o=this.options.files[Symbol.iterator]();case 3:if(n=(a=o.next()).done){e.next=15;break}return s=a.value,c=this,e.next=8,fetch(s);case 8:return e.next=10,e.sent.arrayBuffer();case 10:h=e.sent,this._audioContext.decodeAudioData(h).then((function(e){c._buffer.push(e)})).catch((function(e){throw e}));case 12:n=!0,e.next=3;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(1),i=!0,r=e.t0;case 21:e.prev=21,e.prev=22,n||null==o.return||o.return();case 24:if(e.prev=24,!i){e.next=27;break}throw r;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),t,this,[[1,17,21,29],[22,,24,28]])})))}},{key:"play",value:function(){if(this.options.enabled&&this._buffer.length){var e=this._audioContext.createBufferSource(),t=this._buffer[(0,a.randomInt)(0,this._buffer.length-1)],n=this._audioContext.createGain();e.buffer=t,n.gain.value=(0,a.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),n.connect(this._audioContext.destination),e.connect(n),e.start(0)}else this.init()}}]),t}()},668:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Trace=void 0;var i=n(909);t.Trace=function(){"use strict";function e(t){o(this,e);var n=t.x,r=t.y,a=t.dx,s=t.dy,c=t.ctx,u=t.hue,h=t.speed,l=t.traceLength,d=t.acceleration;for(this._coordinates=[],this._currentDistance=0,this._x=n,this._y=r,this._sx=n,this._sy=r,this._dx=a,this._dy=s,this._ctx=c,this._hue=u,this._speed=h,this._traceLength=l,this._acceleration=d,this._totalDistance=(0,i.getDistance)(n,r,a,s);this._traceLength--;)this._coordinates.push([n,r]);this._angle=Math.atan2(s-r,a-n),this._brightness=(0,i.randomInt)(50,70)}return s(e,[{key:"update",value:function(e){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var t=Math.cos(this._angle)*this._speed,n=Math.sin(this._angle)*this._speed;this._currentDistance=(0,i.getDistance)(this._sx,this._sy,this._x+t,this._y+n),this._currentDistance>=this._totalDistance?e(this._dx,this._dy,this._hue):(this._x+=t,this._y+=n)}},{key:"draw",value:function(){var e=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[e][0],this._coordinates[e][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,i.hsla)(this._hue,this._brightness),this._ctx.stroke()}}]),e}()}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,i),o.exports}var r={};return function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.Fireworks=void 0;var t=i(668),n=i(449),a=i(511),u=i(909);e.Fireworks=function(){"use strict";function e(t){var i=this;o(this,e);var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.autoresize,s=void 0===a||a,c=r.boundaries,u=r.brightness,h=r.delay,l=r.hue,d=r.mouse,f=r.sound,m=r.trace,p=void 0===m?3:m,v=r.speed,y=void 0===v?2:v,g=r.explosion,b=void 0===g?5:g,_=r.gravity,x=void 0===_?1.5:_,w=r.opacity,E=void 0===w?.5:w,S=r.particles,k=void 0===S?50:S,I=r.friction,L=void 0===I?.95:I,C=r.rocketsPoint,T=void 0===C?50:C,M=r.acceleration,A=void 0===M?1.05:M;this._tick=0,this._version="1.3.5",this._running=!1,this._randomRocketsPoint=!1,this._experimentals=!1,this._m=!1,this._container=t,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this._sound=new n.Sound(f),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},c)),this.autoresize=s,this.trace=p,this.speed=y,this.explosion=b,this.gravity=x,this.opacity=E,this.particles=k,this.friction=L,this.rocketsPoint=T,this.acceleration=A,this.hue=Object.assign({min:0,max:360},l),this.mouse=Object.assign({click:!1,move:!1,max:1},d),this.delay=Object.assign({min:15,max:30},h),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},u),this.autoresize&&window.addEventListener("resize",(function(){return i.windowResize()})),this._canvas.addEventListener("mousedown",(function(e){return i.mouseDown(e)})),this._canvas.addEventListener("mouseup",(function(e){return i.mouseUp(e)})),this._canvas.addEventListener("mousemove",(function(e){return i.mouseMove(e)}))}return s(e,[{key:"isRunning",get:function(){return this._running}},{key:"version",get:function(){return this._version}},{key:"start",value:function(){this._running||(this._running=!0,this.clear(),this.render())}},{key:"stop",value:function(){this._running&&(this._running=!1,this.clear())}},{key:"unmount",value:function(){window.removeEventListener("resize",this.windowResize),this._canvas.addEventListener("mousedown",this.mouseDown),this._canvas.addEventListener("mouseup",this.mouseUp),this._canvas.addEventListener("mousemove",this.mouseMove)}},{key:"pause",value:function(){this._running=!this._running}},{key:"clear",value:function(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}},{key:"setOptions",value:function(e){var t=!0,n=!1,i=void 0;try{for(var r,o=Object.entries(e)[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var a=c(r.value),s=a[0],u=a[1],h=Object.prototype.hasOwnProperty.call(this,s);if("function"==typeof this[s])throw new Error("You cannot change the methods of the class!");h&&("object"==typeof this[s]?Object.assign(this[s],u):this[s]=u),"sound"===s&&Object.assign(this._sound.options,u)}}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}},{key:"setSize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?this._container.clientWidth:t,i=e.height,r=void 0===i?this._container.clientHeight:i;this._width=n,this._height=r,this._canvas.width=n,this._canvas.height=r,this.setBoundaries({width:n,height:r})}},{key:"setBoundaries",value:function(e){this.boundaries=Object.assign(Object.assign({},this.boundaries),e)}},{key:"useMouse",value:function(e,t){(this.mouse.click||this.mouse.move)&&(this._mx=e.pageX-this._canvas.offsetLeft,this._my=e.pageY-this._canvas.offsetTop,this._m=t)}},{key:"windowResize",value:function(){this.setSize()}},{key:"mouseDown",value:function(e){this.useMouse(e,this.mouse.click)}},{key:"mouseUp",value:function(e){this.useMouse(e,!1)}},{key:"mouseMove",value:function(e){this.useMouse(e,this._m)}},{key:"render",value:function(){var e=this;this._ctx&&this._running&&(requestAnimationFrame((function(){return e.render()})),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}},{key:"drawBoundaries",value:function(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}},{key:"initTrace",value:function(){this._ds=(0,u.randomInt)(this.delay.min,this.delay.max),(2*this._ds<this._tick||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new t.Trace({x:this._width*(this._randomRocketsPoint?(0,u.randomInt)(0,100):this.rocketsPoint)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,u.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,u.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,u.randomInt)(this.hue.min,this.hue.max),speed:this.speed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}},{key:"drawTrace",value:function(){for(var e=this,t=function(t){e._traces[t].draw(),e._traces[t].update((function(e,i,r){n.initExplosion(e,i,r),n._sound.play(),n._traces.splice(t,1)}))},n=this,i=this._traces.length;i--;)t(i)}},{key:"initExplosion",value:function(e,t,n){for(var i=this.particles;i--;)this._explosions.push(new a.Explosion({x:e,y:t,ctx:this._ctx,hue:n,friction:this.friction,gravity:this.gravity,explosionLength:this.explosion,brightness:this.brightness,exp:this._experimentals}))}},{key:"drawExplosion",value:function(){for(var e=this,t=function(t){e._explosions[t].draw(),e._explosions[t].update((function(){n._explosions.splice(t,1)}))},n=this,i=this._explosions.length;i--;)t(i)}}]),e}()}(),r}()}));var d=[];e(t).forEach((function(e){console.log(e),d.push(e.command)}));var f=["effacer","dark","light","get cv dev","get cv sec"];d=d.concat(f);var m=["pif","rm -rf /"];window.innerWidth>1024&&function(e){var t=0,n=0,i=0,r=0,o=document.querySelector(".terminal__header");function a(e){(e=e||window.event).preventDefault(),i=e.clientX,r=e.clientY,document.onmouseup=c,document.onmousemove=s}function s(o){(o=o||window.event).preventDefault(),t=i-o.clientX,n=r-o.clientY,i=o.clientX,r=o.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function c(){document.onmouseup=null,document.onmousemove=null}o?o.onmousedown=a:e.onmousedown=a}(document.querySelector(".terminal"));var p=[],v=!1,y=-1,g=document.querySelector(".terminal__body");if(w(),11===(new Date).getMonth()){for(var b="",_=0;_<6;_++)b+='<div class="snowflake">❅</div><div class="snowflake">❆</div>';var x='<div class="snowflakes" aria-hidden="true">'.concat(b,"</div>");document.body.append(function(e){return document.createRange().createContextualFragment(e)}(x))}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Math.random().toString(36).replace("0.",""),n=document.createElement("div");n.classList.add("terminal__line");var i=document.createElement("div");i.classList.add("terminal__response"),i.id="response-".concat(t);var r=document.createElement("input");if(r.type="text",r.id="input-".concat(t),r.autocapitalize="off",r.dataset.uid=t,r.dataset.active="1",r.addEventListener("keydown",E),n.appendChild(r),e){var o=document.getElementById(e);o&&(o.setAttribute("disabled","true"),o.removeEventListener("keydown",E),delete o.dataset.active)}document.getElementById("terminal").appendChild(n),document.getElementById("terminal").appendChild(i),r.focus()}function E(n){var o=n.target.value.trim().toLowerCase();if(13===n.keyCode){if(""!==o){v=!1;var a,s="response-".concat(n.target.dataset.uid),c=document.getElementById(s);a=m.includes(o)||f.includes(o)?function(e){switch(e){case"pif":return function(){var e={origin:{y:.7}};function t(t,n){i(Object.assign({},e,n,{particleCount:Math.floor(200*t)}))}t(.25,{spread:26,startVelocity:55}),t(.2,{spread:60}),t(.35,{spread:100,decay:.91,scalar:.8}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),t(.1,{spread:120,startVelocity:45})}(),"C'est la fête !";case"light":return 0===document.body.classList.length?"Vous êtes déjà en mode clair":(l(!1),"Vous êtes maintenant en mode clair.");case"dark":return 1===document.body.classList.length?"Vous êtes déjà en mode sombre":(l(!0),"Vous êtes maintenant en mode sombre.");case"get cv dev":return(t=document.createElement("a")).href="resources/CV-Ikary-2.pdf",t.setAttribute("download","CV-Ikary-2.pdf"),t.click(),"Le CV va être téléchargé.";case"get cv sec":return function(){var e=document.createElement("a");e.href="resources/IKARY-CV-SEC_IT-CYN-2_compressed.pdf",e.setAttribute("download","IKARY-CV-SEC_IT-CYN-2_compressed.pdf"),e.click()}(),"Le CV va être téléchargé.";case"rm -rf /":return l(!0),document.body.classList.add("firework"),new r.Fireworks(document.body,{mouse:{click:!0,move:!1,max:7}}).start(),"w4dhIHZhIFDDiVRFUiAh";case"effacer":return void(g.innerHTML='<div id="terminal"></div>')}var t}(o):function(n){var i=e(t).find((function(e){return e.command===n})),r="";if(void 0===i)r="'".concat(n.split(" ")[0],"' n’est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.");else if("list"===i.responseType&&Array.isArray(i.value))r="<ul>",r+=i.value.map((function(e){return"<li>".concat(e,"</li>")})).join(""),r+="</ul>";else if("text"===i.responseType)r=i.value;else if("table"===i.responseType){var o=i.headers,a=i.rows,s=o.map((function(e){return"<th>".concat(e,"</th>")})).join(""),c=a.map((function(e){return"<tr>".concat(e.map((function(e){return"<td>".concat(e,"</td>")})).join(""),"</tr>")})).join("");r="<table><thead><tr>".concat(s,"</tr></thead><tbody>").concat(c,"</tbody></table>")}else"code"===i.responseType&&(r="<pre>".concat(i.value.join("\n"),"</pre>"));return r}(o),c&&(c.innerHTML=a,p.push(o),w(n.target.id))}}else if(9===n.keyCode){if(n.preventDefault(),""===o)this.value="help";else{var u=d.find((function(e){return e.startsWith(o)}));u&&(this.value=u)}v=!1}else 38!==n.keyCode&&40!==n.keyCode||(p.length>0&&(!1===v?y=p.length-1:38===n.keyCode&&0!==y?y--:40===n.keyCode&&y!==p.length-1&&y++,this.value=p[y]),v=!0)}document.body.addEventListener("click",(function(e){"INPUT"!==e.target.tagName&&document.querySelector("input[data-active]").focus()})),document.querySelector(".fake-close").addEventListener("click",(function(e){var t=document.querySelector(".terminal");t.parentElement.removeChild(t)}))}();
//# sourceMappingURL=index.c158bcce.js.map