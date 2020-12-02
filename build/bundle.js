var app=function(){"use strict";function e(){}const n=e=>e;function t(e){return e()}function s(){return Object.create(null)}function i(e){e.forEach(t)}function a(e){return"function"==typeof e}function r(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function l(e,n,t,s){if(e){const i=o(e,n,t,s);return e[0](i)}}function o(e,n,t,s){return e[1]&&s?function(e,n){for(const t in n)e[t]=n[t];return e}(t.ctx.slice(),e[1](s(n))):t.ctx}function c(e,n,t,s,i,a,r){const l=function(e,n,t,s){if(e[2]&&s){const i=e[2](s(t));if(void 0===n.dirty)return i;if("object"==typeof i){const e=[],t=Math.max(n.dirty.length,i.length);for(let s=0;s<t;s+=1)e[s]=n.dirty[s]|i[s];return e}return n.dirty|i}return n.dirty}(n,s,i,a);if(l){const i=o(n,t,s,r);e.p(i,l)}}function d(e){return null==e?"":e}const u="undefined"!=typeof window;let p=u?()=>window.performance.now():()=>Date.now(),f=u?e=>requestAnimationFrame(e):e;const h=new Set;function m(e){h.forEach((n=>{n.c(e)||(h.delete(n),n.f())})),0!==h.size&&f(m)}function g(e){let n;return 0===h.size&&f(m),{promise:new Promise((t=>{h.add(n={c:e,f:t})})),abort(){h.delete(n)}}}function v(e,n){e.appendChild(n)}function b(e,n,t){e.insertBefore(n,t||null)}function $(e){e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function y(){return _(" ")}function k(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function x(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}const C=new Set;let z,L=0;function M(e,n,t,s,i,a,r,l=0){const o=16.666/s;let c="{\n";for(let e=0;e<=1;e+=o){const s=n+(t-n)*a(e);c+=100*e+`%{${r(s,1-s)}}\n`}const d=c+`100% {${r(t,1-t)}}\n}`,u=`__svelte_${function(e){let n=5381,t=e.length;for(;t--;)n=(n<<5)-n^e.charCodeAt(t);return n>>>0}(d)}_${l}`,p=e.ownerDocument;C.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(w("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[u]||(h[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const m=e.style.animation||"";return e.style.animation=`${m?m+", ":""}${u} ${s}ms linear ${i}ms 1 both`,L+=1,u}function A(e,n){const t=(e.style.animation||"").split(", "),s=t.filter(n?e=>e.indexOf(n)<0:e=>-1===e.indexOf("__svelte")),i=t.length-s.length;i&&(e.style.animation=s.join(", "),L-=i,L||f((()=>{L||(C.forEach((e=>{const n=e.__svelte_stylesheet;let t=n.cssRules.length;for(;t--;)n.deleteRule(t);e.__svelte_rules={}})),C.clear())})))}function T(e){z=e}const H=[],E=[],S=[],q=[],B=Promise.resolve();let P=!1;function R(e){S.push(e)}let U=!1;const I=new Set;function K(){if(!U){U=!0;do{for(let e=0;e<H.length;e+=1){const n=H[e];T(n),F(n.$$)}for(T(null),H.length=0;E.length;)E.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];I.has(n)||(I.add(n),n())}S.length=0}while(H.length);for(;q.length;)q.pop()();P=!1,U=!1,I.clear()}}function F(e){if(null!==e.fragment){e.update(),i(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(R)}}let N;function j(){return N||(N=Promise.resolve(),N.then((()=>{N=null}))),N}function D(e,n,t){e.dispatchEvent(function(e,n){const t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,n),t}(`${n?"intro":"outro"}${t}`))}const G=new Set;let V;function O(){V={r:0,c:[],p:V}}function W(){V.r||i(V.c),V=V.p}function Y(e,n){e&&e.i&&(G.delete(e),e.i(n))}function J(e,n,t,s){if(e&&e.o){if(G.has(e))return;G.add(e),V.c.push((()=>{G.delete(e),s&&(t&&e.d(1),s())})),e.o(n)}}const Q={duration:0};function X(e){e&&e.c()}function Z(e,n,s){const{fragment:r,on_mount:l,on_destroy:o,after_update:c}=e.$$;r&&r.m(n,s),R((()=>{const n=l.map(t).filter(a);o?o.push(...n):i(n),e.$$.on_mount=[]})),c.forEach(R)}function ee(e,n){const t=e.$$;null!==t.fragment&&(i(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function ne(e,n){-1===e.$$.dirty[0]&&(H.push(e),P||(P=!0,B.then(K)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function te(n,t,a,r,l,o,c=[-1]){const d=z;T(n);const u=t.props||{},p=n.$$={fragment:null,ctx:null,props:o,update:e,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:s(),dirty:c,skip_bound:!1};let f=!1;if(p.ctx=a?a(n,u,((e,t,...s)=>{const i=s.length?s[0]:t;return p.ctx&&l(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),f&&ne(n,e)),t})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!r&&r(p.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);p.fragment&&p.fragment.l(e),e.forEach($)}else p.fragment&&p.fragment.c();t.intro&&Y(n.$$.fragment),Z(n,t.target,t.anchor),K()}T(d)}class se{$destroy(){ee(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ie(n){let t,s,i,a,r,l,o,c,u,p,f,h,m,g,C,z,L,M,A,T,H,E,S,q,B=Number(n[0].incidence).toFixed(2)+"",P=n[0].district+"",R=n[0].name+"",U=(n[0].newCases>0?n[0].newCases:0)+"",I=n[0].cases+"";return{c(){t=w("div"),s=w("div"),i=w("div"),a=w("h3"),r=_(B),l=y(),o=w("div"),c=w("div"),u=_(P),p=y(),f=w("div"),h=_(R),m=y(),g=w("div"),C=w("div"),z=w("div"),L=_("Neue Fälle: "),M=_(U),A=y(),T=w("div"),H=w("div"),E=_("Fälle insgesamt: "),S=_(I),k(a,"class","card__number svelte-1v2v8y4"),k(i,"class","card__column svelte-1v2v8y4"),k(c,"class","card__area svelte-1v2v8y4"),k(f,"class","card__city svelte-1v2v8y4"),k(o,"class","card__column svelte-1v2v8y4"),k(s,"class","card__row svelte-1v2v8y4"),k(z,"class","card__cases svelte-1v2v8y4"),k(C,"class","card__column svelte-1v2v8y4"),k(H,"class","card__cases svelte-1v2v8y4"),k(T,"class","card__column svelte-1v2v8y4"),k(g,"class","card__row svelte-1v2v8y4"),k(t,"class",q=d("card "+n[1])+" svelte-1v2v8y4")},m(e,n){b(e,t,n),v(t,s),v(s,i),v(i,a),v(a,r),v(s,l),v(s,o),v(o,c),v(c,u),v(o,p),v(o,f),v(f,h),v(t,m),v(t,g),v(g,C),v(C,z),v(z,L),v(z,M),v(g,A),v(g,T),v(T,H),v(H,E),v(H,S)},p(e,[n]){1&n&&B!==(B=Number(e[0].incidence).toFixed(2)+"")&&x(r,B),1&n&&P!==(P=e[0].district+"")&&x(u,P),1&n&&R!==(R=e[0].name+"")&&x(h,R),1&n&&U!==(U=(e[0].newCases>0?e[0].newCases:0)+"")&&x(M,U),1&n&&I!==(I=e[0].cases+"")&&x(S,I),2&n&&q!==(q=d("card "+e[1])+" svelte-1v2v8y4")&&k(t,"class",q)},i:e,o:e,d(e){e&&$(t)}}}function ae(e,n,t){let{data:s}=n,i="warning";return s.incidence<35&&(i="info"),s.incidence>=50&&s.incidence<100&&(i="danger"),s.incidence>=100&&(i="superdanger"),e.$$set=e=>{"data"in e&&t(0,s=e.data)},[s,i]}class re extends se{constructor(e){super(),te(this,e,ae,ie,r,{data:0})}}function le(e){const n=e-1;return n*n*n+1}function oe(e,{delay:n=0,duration:t=400,easing:s=le,x:i=0,y:a=0,opacity:r=0}){const l=getComputedStyle(e),o=+l.opacity,c="none"===l.transform?"":l.transform,d=o*(1-r);return{delay:n,duration:t,easing:s,css:(e,n)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*i}px, ${(1-e)*a}px);\n\t\t\topacity: ${o-d*n}`}}function ce(t){let s,r,o,d;const u=t[2].default,f=l(u,t,t[1],null);return{c(){s=w("div"),f&&f.c(),k(s,"class","message svelte-1uxv54b")},m(e,n){b(e,s,n),f&&f.m(s,null),d=!0},p(e,n){f&&f.p&&2&n&&c(f,u,e,e[1],n,null,null)},i(t){d||(Y(f,t),R((()=>{o&&o.end(1),r||(r=function(t,s,i){let r,l,o=s(t,i),c=!1,d=0;function u(){r&&A(t,r)}function f(){const{delay:s=0,duration:i=300,easing:a=n,tick:f=e,css:h}=o||Q;h&&(r=M(t,0,1,i,s,a,h,d++)),f(0,1);const m=p()+s,v=m+i;l&&l.abort(),c=!0,R((()=>D(t,!0,"start"))),l=g((e=>{if(c){if(e>=v)return f(1,0),D(t,!0,"end"),u(),c=!1;if(e>=m){const n=a((e-m)/i);f(n,1-n)}}return c}))}let h=!1;return{start(){h||(A(t),a(o)?(o=o(),j().then(f)):f())},invalidate(){h=!1},end(){c&&(u(),c=!1)}}}(s,oe,{y:-100,duration:1e3})),r.start()})),d=!0)},o(t){J(f,t),r&&r.invalidate(),o=function(t,s,r){let l,o=s(t,r),c=!0;const d=V;function u(){const{delay:s=0,duration:a=300,easing:r=n,tick:u=e,css:f}=o||Q;f&&(l=M(t,1,0,a,s,r,f));const h=p()+s,m=h+a;R((()=>D(t,!1,"start"))),g((e=>{if(c){if(e>=m)return u(0,1),D(t,!1,"end"),--d.r||i(d.c),!1;if(e>=h){const n=r((e-h)/a);u(1-n,n)}}return c}))}return d.r+=1,a(o)?j().then((()=>{o=o(),u()})):u(),{end(e){e&&o.tick&&o.tick(1,0),c&&(l&&A(t,l),c=!1)}}}(s,oe,{y:-100,duration:1e3}),d=!1},d(e){e&&$(s),f&&f.d(e),e&&o&&o.end()}}}function de(e){let n,t,s,i,a=e[0]&&ce(e);return{c(){n=w("div"),t=w("header"),t.innerHTML='<div class="wrapper container svelte-1uxv54b"><h1 class="svelte-1uxv54b">🚦 Corona-Ampel für Coburg 🚦</h1> \n      <h2 class="svelte-1uxv54b">7 Tage Inzidenz für Coburg und Landkreis:</h2></div>',s=y(),a&&a.c(),k(t,"class","svelte-1uxv54b"),k(n,"class","header svelte-1uxv54b")},m(e,r){b(e,n,r),v(n,t),v(n,s),a&&a.m(n,null),i=!0},p(e,[t]){e[0]?a?(a.p(e,t),1&t&&Y(a,1)):(a=ce(e),a.c(),Y(a,1),a.m(n,null)):a&&(O(),J(a,1,1,(()=>{a=null})),W())},i(e){i||(Y(a),i=!0)},o(e){J(a),i=!1},d(e){e&&$(n),a&&a.d()}}}function ue(e,n,t){let{$$slots:s={},$$scope:i}=n,a=!1;return setTimeout((function(){t(0,a=!0)}),1e3),setTimeout((function(){t(0,a=!1)}),3e3),e.$$set=e=>{"$$scope"in e&&t(1,i=e.$$scope)},[a,i,s]}class pe extends se{constructor(e){super(),te(this,e,ue,de,r,{})}}function fe(n){let t,s,i,a,r,l,o,c;return{c(){t=w("div"),s=w("a"),i=w("div"),i.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1t89ycd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1t89ycd"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg></div>Facebook',r=y(),l=w("a"),o=w("div"),o.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1t89ycd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1t89ycd"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"></path></svg></div>WhatsApp',k(i,"class","resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium svelte-1t89ycd"),k(s,"class","resp-sharing-button__link svelte-1t89ycd"),k(s,"href",a="https://facebook.com/sharer/sharer.php?u="+encodeURI(n[0])),k(s,"target","_blank"),k(s,"rel","noopener"),k(s,"aria-label","Facebook"),k(o,"class","resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium svelte-1t89ycd"),k(l,"class","resp-sharing-button__link svelte-1t89ycd"),k(l,"href",c="whatsapp://send?text="+encodeURI(n[1])),k(l,"target","_blank"),k(l,"rel","noopener"),k(l,"aria-label","WhatsApp")},m(e,n){b(e,t,n),v(t,s),v(s,i),v(t,r),v(t,l),v(l,o)},p:e,i:e,o:e,d(e){e&&$(t)}}}function he(e){let n=window.location;return[n,"Das hier ist ne coole Website "+n]}class me extends se{constructor(e){super(),te(this,e,he,fe,r,{})}}function ge(e){let n,t,s,i;const a=e[1].default,r=l(a,e,e[0],null);return{c(){n=w("div"),t=w("div"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="svelte-1tx8cvz"><path d="M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2z" fill="currentColor"></path><path class="uim-primary" d="M21 13a1 1 0 0 1-1-1A7.995 7.995 0 0 0 5.08 8.001a1 1 0 0 1-1.731-1.002A9.995 9.995 0 0 1 22 12a1 1 0 0 1-1 1zm-1.125 9a1 1 0 0 1-1-1v-3.5h-3.5a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1z" fill="currentColor"></path><path class="uim-primary" d="M12 22A10.012 10.012 0 0 1 2 12a1 1 0 0 1 2 0a7.995 7.995 0 0 0 14.92 3.999a1 1 0 0 1 1.731 1.002A10.032 10.032 0 0 1 12 22z" fill="currentColor"></path></svg>',s=y(),r&&r.c(),k(t,"class","icon svelte-1tx8cvz"),k(n,"class","message svelte-1tx8cvz")},m(e,a){b(e,n,a),v(n,t),v(n,s),r&&r.m(n,null),i=!0},p(e,[n]){r&&r.p&&1&n&&c(r,a,e,e[0],n,null,null)},i(e){i||(Y(r,e),i=!0)},o(e){J(r,e),i=!1},d(e){e&&$(n),r&&r.d(e)}}}function ve(e,n,t){let{$$slots:s={},$$scope:i}=n;return e.$$set=e=>{"$$scope"in e&&t(0,i=e.$$scope)},[i,s]}class be extends se{constructor(e){super(),te(this,e,ve,ge,r,{})}}function $e(e,n,t){const s=e.slice();return s[3]=n[t],s}function we(e){let n,t;return{c(){n=_("Stand: "),t=_(e[0])},m(e,s){b(e,n,s),b(e,t,s)},p(e,n){1&n&&x(t,e[0])},d(e){e&&$(n),e&&$(t)}}}function _e(e){let n,t;return n=new be({props:{$$slots:{default:[we]},$$scope:{ctx:e}}}),{c(){X(n.$$.fragment)},m(e,s){Z(n,e,s),t=!0},p(e,t){const s={};65&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){t||(Y(n.$$.fragment,e),t=!0)},o(e){J(n.$$.fragment,e),t=!1},d(e){ee(n,e)}}}function ye(n){let t,s;return t=new re({props:{data:n[3]}}),{c(){X(t.$$.fragment)},m(e,n){Z(t,e,n),s=!0},p:e,i(e){s||(Y(t.$$.fragment,e),s=!0)},o(e){J(t.$$.fragment,e),s=!1},d(e){ee(t,e)}}}function ke(e){let n,t,s,i,a,r,l,o,c,d,u,p,f,h,m,g,C,z,L,M,A,T,H,E,S,q,B,P,R,U,I,K,F,N,j,D,G,V,Q,ne,te,se,ie,ae,re;t=new pe({props:{$$slots:{default:[_e]},$$scope:{ctx:e}}});let le=e[1],oe=[];for(let n=0;n<le.length;n+=1)oe[n]=ye($e(e,le,n));const ce=e=>J(oe[e],1,1,(()=>{oe[e]=null}));return u=new me({}),{c(){n=w("main"),X(t.$$.fragment),s=y(),i=w("div"),i.innerHTML='<div class="message svelte-1nhmbwq">⚠️ Die Daten vom RKI sind aktuell nicht verfügbar, angezeigt werden alte Daten!</div>',a=y(),r=w("div");for(let e=0;e<oe.length;e+=1)oe[e].c();l=y(),o=w("div"),c=w("p"),d=w("center"),X(u.$$.fragment),p=y(),f=w("div"),h=w("p"),h.innerHTML="Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n        das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n        geltenden Bestimmungen beschlossen. ",m=y(),g=w("div"),C=y(),z=w("p"),z.innerHTML="Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n        verhindern, wird\n        <strong>in Bayern die Corona-Ampel eingeführt. </strong>",L=y(),M=w("p"),M.innerHTML="<strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie\n        bisher als &quot;Kann-Regeln&quot;",A=y(),T=w("p"),T.innerHTML='<strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35</span></span></strong>',H=y(),E=w("ul"),E.innerHTML="<li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n        <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n          treffen ist erlaubt</li> \n        <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n          Platz </li> \n        <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n          erlaubt</li>",S=y(),q=w("p"),q.innerHTML='<span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b>',B=y(),P=w("ul"),P.innerHTML="<li>Maskenpflicht wird ausgeweitet. \n          <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n            <li>Maskenpflicht an Hochschulen </li> \n            <li>in öffentlichen Gebäuden</li> \n            <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n              Betrieb, sobald man den Platz verlässt.</li> \n            <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n        <li>Allgemeine Sperrstunde ab 23 Uhr </li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n          beschränkt. Egal ob draußen, daheim oder im Lokal.</li>",R=y(),U=w("p"),U.innerHTML='<span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span>',I=y(),K=w("ul"),K.innerHTML="<li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n          Grundschule  </li> \n        <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n          Egal ob draußen, daheim oder im Lokal.</li>",F=y(),N=w("center"),j=_("Crafted with ❤️ from\n        "),D=w("a"),D.textContent="Andre\n          Bellmann",G=y(),V=w("p"),Q=_("Basierend auf den\n          "),ne=w("a"),ne.textContent="Daten des RKI",te=_("\n          Stand:\n          "),se=_(e[0]),ie=y(),ae=w("script"),ae.textContent="var siteID = '2';\n    var _paq = (window._paq = window._paq || []);\n    _paq.push(['disableCookies']);\n    _paq.push(['trackPageView']);\n    _paq.push(['enableLinkTracking']);\n    (function () {\n      var u = '//tracking.andre-bellmann.de/';\n      _paq.push(['setTrackerUrl', u + 'phpfortr.php']);\n      _paq.push(['setSiteId', siteID]);\n      var d = document,\n        g = d.createElement('script'),\n        s = d.getElementsByTagName('script')[0];\n      g.type = 'text/javascript';\n      g.async = true;\n      g.crossorigin = 'anonymous';\n      g.src = u + 'jsfortr.js';\n      s.parentNode.insertBefore(g, s);\n    })();",k(i,"class","message-wrapper svelte-1nhmbwq"),i.hidden=!0,k(r,"class","card-wrapper container svelte-1nhmbwq"),k(g,"id","intxt-1"),k(g,"class","aditem "),k(D,"href","https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"),k(ne,"href","https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0"),k(ne,"target","_blank"),k(ne,"rel","noopener"),k(f,"class","content svelte-1nhmbwq"),k(o,"class","container"),k(ae,"type","text/javascript")},m(e,$){b(e,n,$),Z(t,n,null),v(n,s),v(n,i),v(n,a),v(n,r);for(let e=0;e<oe.length;e+=1)oe[e].m(r,null);v(n,l),v(n,o),v(o,c),v(c,d),Z(u,d,null),v(o,p),v(o,f),v(f,h),v(f,m),v(f,g),v(f,C),v(f,z),v(f,L),v(f,M),v(f,A),v(f,T),v(f,H),v(f,E),v(f,S),v(f,q),v(f,B),v(f,P),v(f,R),v(f,U),v(f,I),v(f,K),v(f,F),v(f,N),v(N,j),v(N,D),v(N,G),v(N,V),v(V,Q),v(V,ne),v(V,te),v(V,se),v(n,ie),v(n,ae),re=!0},p(e,[n]){const s={};if(65&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s),2&n){let t;for(le=e[1],t=0;t<le.length;t+=1){const s=$e(e,le,t);oe[t]?(oe[t].p(s,n),Y(oe[t],1)):(oe[t]=ye(s),oe[t].c(),Y(oe[t],1),oe[t].m(r,null))}for(O(),t=le.length;t<oe.length;t+=1)ce(t);W()}(!re||1&n)&&x(se,e[0])},i(e){if(!re){Y(t.$$.fragment,e);for(let e=0;e<le.length;e+=1)Y(oe[e]);Y(u.$$.fragment,e),re=!0}},o(e){J(t.$$.fragment,e),oe=oe.filter(Boolean);for(let e=0;e<oe.length;e+=1)J(oe[e]);J(u.$$.fragment,e),re=!1},d(e){e&&$(n),ee(t),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(oe,e),ee(u)}}}function xe(e,n,t){let{date:s}=n,{data:i}=n,a=[];return i.sort(((e,n)=>e.name<n.name?-1:(e.name,n.name,0))),i.forEach((e=>{e.name.toLowerCase()=="Coburg".toLowerCase()?a.unshift(e):a.push(e)})),e.$$set=e=>{"date"in e&&t(0,s=e.date),"data"in e&&t(2,i=e.data)},[s,a,i]}return new class extends se{constructor(e){super(),te(this,e,xe,ke,r,{date:0,data:2})}}({target:document.body,props:{data:[{id:303,district:"Landkreis",name:"Schweinfurt",incidence:112.607735285201,population:115445,cases:2025,deaths:42,newCases:10},{id:294,district:"Kreisfreie Stadt",name:"Schweinfurt",incidence:121.663609478531,population:53426,cases:945,deaths:30,newCases:9},{id:277,district:"Landkreis",name:"Kronach",incidence:172.302713393165,population:66743,cases:909,deaths:16,newCases:20},{id:272,district:"Landkreis",name:"Bamberg",incidence:110.082017898521,population:147163,cases:1628,deaths:51,newCases:13},{id:274,district:"Landkreis",name:"Coburg",incidence:269.749962534727,population:86747,cases:1273,deaths:43,newCases:30},{id:299,district:"Landkreis",name:"Haßberge",incidence:206.200227531286,population:84384,cases:1092,deaths:18,newCases:5},{id:268,district:"Kreisfreie Stadt",name:"Bamberg",incidence:116.319646388275,population:77373,cases:860,deaths:32,newCases:7},{id:393,district:"Landkreis",name:"Hildburghausen",incidence:458.882541892811,population:63197,cases:1200,deaths:19,newCases:38},{id:279,district:"Landkreis",name:"Lichtenfels",incidence:107.823170001198,population:66776,cases:1052,deaths:30,newCases:2},{id:270,district:"Kreisfreie Stadt",name:"Coburg",incidence:148.51967276977,population:41072,cases:436,deaths:6,newCases:11},{id:396,district:"Landkreis",name:"Sonneberg",incidence:292.808011504409,population:57717,cases:919,deaths:37,newCases:46}],date:"02.12.2020, 00:00 Uhr"}})}();
//# sourceMappingURL=bundle.js.map
