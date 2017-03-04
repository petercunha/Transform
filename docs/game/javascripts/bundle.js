!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=7)}([function(e,n,t){"use strict";function r(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}var o=["song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3"];e.exports={playRandomMusic:function(){var e=document.getElementById("player");e.src="audio/music/"+o[r(0,o.length)],e.load(),e.play()},playSFX:function(e){new Audio("audio/sfx/"+e+".mp3").play()}}},function(e,n,t){"use strict";function r(){var e=new Image;e.src=d[p][1],e.onload=function(){var n=0;i=setInterval(function(){n<=e.height?(f.clearRect(0,0,l.width,l.height),f.drawImage(e,0,n,e.width,s,30,10,e.width,s),n++):n=-1*u},c)}}function o(){console.log("Correct!"),a.playSFX("success"),p++,p>5&&(c=7),document.getElementById("status").innerHTML="Correct!",document.getElementById("level").innerHTML="Level: "+(p+1),d.length<=p?(document.getElementById("status").innerHTML="You win!",document.getElementById("level").innerHTML="Thanks for playing Transform.",clearInterval(i),f.clearRect(0,0,l.width,l.height)):(clearInterval(i),r())}var i,a=t(0),s=2,c=.11,u=200,l=document.getElementById("cvs"),f=l.getContext("2d"),p=0,d=[["circle,sphere","images/sphere.png"],["triangle","images/triangle.png"],["f","images/f.png"],["e","images/e.png"],["a","images/a.png"],["!,exclamation,exclamation point,exclamation mark","images/exc.png"],["person,human,man,guy","images/person.jpg"]];a.playRandomMusic(),r(),document.getElementById("answer").addEventListener("keydown",function(e){if(13==e.keyCode){for(var n=document.getElementById("answer").value.toLowerCase(),t=d[p][0].split(","),r=!1,i=0;i<t.length;i++)n==t[i]&&(r=!0,o());return r||(document.getElementById("status").innerHTML="Incorrect",console.log("Incorrect!"),a.playSFX("failure")),document.getElementById("answer").value="",!1}})},function(e,n,t){"use strict"},function(e,n,t){var r=t(4);"string"==typeof r&&(r=[[e.i,r,""]]);t(6)(r,{});r.locals&&(e.exports=r.locals)},function(e,n,t){n=e.exports=t(5)(),n.push([e.i,"body {\n    background-color: #f4f8ff;\n}\n\ndiv {\n    top: 45%;\n    text-align: center;\n    font-family: sans-serif;\n    color: black;\n}\n\ncanvas {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    transform: -webkit-translate(-50%, -50%);\n    transform: -moz-translate(-50%, -50%);\n    transform: -ms-translate(-50%, -50%);\n}\n\ninput {\n    position: fixed;\n    top: 60%;\n    width: 100%;\n    outline: none;\n    background: none;\n    border: none;\n    text-align: center;\n    cursor: none;\n    font-size: 35px;\n    font-family: Arial, sans-serif;\n    color: black;\n    text-transform: uppercase;\n}\n",""])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],n))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],n));p[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var n=[],t={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],c=o[3],u={css:a,media:s,sourceMap:c};t[i]?t[i].parts.push(u):n.push(t[i]={id:i,parts:[u]})}return n}function o(e,n){var t=g(),r=y[y.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),y.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function i(e){e.parentNode.removeChild(e);var n=y.indexOf(e);n>=0&&y.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",o(e,n),n}function s(e){var n=document.createElement("link");return n.rel="stylesheet",o(e,n),n}function c(e,n){var t,r,o;if(n.singleton){var c=v++;t=h||(h=a(n)),r=u.bind(null,t,c,!1),o=u.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(n),r=f.bind(null,t),o=function(){i(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),r=l.bind(null,t),o=function(){i(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}function u(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function l(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n){var t=n.css,r=n.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([t],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},d=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}},m=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),g=d(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,y=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},void 0===n.singleton&&(n.singleton=m()),void 0===n.insertAt&&(n.insertAt="bottom");var o=r(e);return t(o,n),function(e){for(var i=[],a=0;a<o.length;a++){var s=o[a],c=p[s.id];c.refs--,i.push(c)}if(e){t(r(e),n)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete p[c.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n,t){"use strict";t(2),t(0),t(1),t(3)}]);