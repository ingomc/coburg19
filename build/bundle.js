var app=function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function s(e){e.forEach(n)}function a(e){return"function"==typeof e}function i(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function r(e){return null==e?"":e}function l(e,n){e.appendChild(n)}function c(e,n,t){e.insertBefore(n,t||null)}function o(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function p(){return u(" ")}function h(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function f(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}let g;function m(e){g=e}const v=[],b=[],w=[],k=[],_=Promise.resolve();let y=!1;function $(e){w.push(e)}let x=!1;const C=new Set;function L(){if(!x){x=!0;do{for(let e=0;e<v.length;e+=1){const n=v[e];m(n),z(n.$$)}for(m(null),v.length=0;b.length;)b.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];C.has(n)||(C.add(n),n())}w.length=0}while(v.length);for(;k.length;)k.pop()();y=!1,x=!1,C.clear()}}function z(e){if(null!==e.fragment){e.update(),s(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach($)}}const M=new Set;let A;function T(e,n){e&&e.i&&(M.delete(e),e.i(n))}function U(e,n,t,s){if(e&&e.o){if(M.has(e))return;M.add(e),A.c.push((()=>{M.delete(e),s&&(t&&e.d(1),s())})),e.o(n)}}function H(e){e&&e.c()}function q(e,t,i){const{fragment:r,on_mount:l,on_destroy:c,after_update:o}=e.$$;r&&r.m(t,i),$((()=>{const t=l.map(n).filter(a);c?c.push(...t):s(t),e.$$.on_mount=[]})),o.forEach($)}function B(e,n){const t=e.$$;null!==t.fragment&&(s(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function S(e,n){-1===e.$$.dirty[0]&&(v.push(e),y||(y=!0,_.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function P(n,a,i,r,l,c,d=[-1]){const u=g;m(n);const p=a.props||{},h=n.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:t(),dirty:d,skip_bound:!1};let f=!1;if(h.ctx=i?i(n,p,((e,t,...s)=>{const a=s.length?s[0]:t;return h.ctx&&l(h.ctx[e],h.ctx[e]=a)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](a),f&&S(n,e)),t})):[],h.update(),f=!0,s(h.before_update),h.fragment=!!r&&r(h.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);h.fragment&&h.fragment.l(e),e.forEach(o)}else h.fragment&&h.fragment.c();a.intro&&T(n.$$.fragment),q(n,a.target,a.anchor),L()}m(u)}class E{$destroy(){B(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(n){let t,s,a,i,g,m,v,b,w,k,_,y,$,x,C,L,z,M,A,T,U,H,q,B,S=Number(n[0].incidence).toFixed(2)+"",P=n[0].district+"",E=n[0].name+"",I=(n[0].newCases>0?n[0].newCases:0)+"",K=n[0].cases+"";return{c(){t=d("div"),s=d("div"),a=d("div"),i=d("h3"),g=u(S),m=p(),v=d("div"),b=d("div"),w=u(P),k=p(),_=d("div"),y=u(E),$=p(),x=d("div"),C=d("div"),L=d("div"),z=u("Neue Fälle: "),M=u(I),A=p(),T=d("div"),U=d("div"),H=u("Fälle insgesamt: "),q=u(K),h(i,"class","card__number svelte-1v2v8y4"),h(a,"class","card__column svelte-1v2v8y4"),h(b,"class","card__area svelte-1v2v8y4"),h(_,"class","card__city svelte-1v2v8y4"),h(v,"class","card__column svelte-1v2v8y4"),h(s,"class","card__row svelte-1v2v8y4"),h(L,"class","card__cases svelte-1v2v8y4"),h(C,"class","card__column svelte-1v2v8y4"),h(U,"class","card__cases svelte-1v2v8y4"),h(T,"class","card__column svelte-1v2v8y4"),h(x,"class","card__row svelte-1v2v8y4"),h(t,"class",B=r("card "+n[1])+" svelte-1v2v8y4")},m(e,n){c(e,t,n),l(t,s),l(s,a),l(a,i),l(i,g),l(s,m),l(s,v),l(v,b),l(b,w),l(v,k),l(v,_),l(_,y),l(t,$),l(t,x),l(x,C),l(C,L),l(L,z),l(L,M),l(x,A),l(x,T),l(T,U),l(U,H),l(U,q)},p(e,[n]){1&n&&S!==(S=Number(e[0].incidence).toFixed(2)+"")&&f(g,S),1&n&&P!==(P=e[0].district+"")&&f(w,P),1&n&&E!==(E=e[0].name+"")&&f(y,E),1&n&&I!==(I=(e[0].newCases>0?e[0].newCases:0)+"")&&f(M,I),1&n&&K!==(K=e[0].cases+"")&&f(q,K),2&n&&B!==(B=r("card "+e[1])+" svelte-1v2v8y4")&&h(t,"class",B)},i:e,o:e,d(e){e&&o(t)}}}function K(e,n,t){let{data:s}=n,a="warning";return s.incidence<35&&(a="info"),s.incidence>=50&&s.incidence<100&&(a="danger"),s.incidence>=100&&(a="superdanger"),e.$$set=e=>{"data"in e&&t(0,s=e.data)},[s,a]}class N extends E{constructor(e){super(),P(this,e,K,I,i,{data:0})}}function F(n){let t;return{c(){t=d("header"),t.innerHTML='<div class="wrapper container svelte-1qnubhy"><h1 class="svelte-1qnubhy">🚦 Corona-Ampel für Coburg 🚦</h1> \n    <h2 class="svelte-1qnubhy">7 Tage Inzidenz für Coburg und Landkreis:</h2></div>',h(t,"class","svelte-1qnubhy")},m(e,n){c(e,t,n)},p:e,i:e,o:e,d(e){e&&o(t)}}}class R extends E{constructor(e){super(),P(this,e,null,F,i,{})}}function G(n){let t,s,a,i,r,u,f,g;return{c(){t=d("div"),s=d("a"),a=d("div"),a.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1t89ycd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1t89ycd"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg></div>Facebook',r=p(),u=d("a"),f=d("div"),f.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1t89ycd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1t89ycd"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"></path></svg></div>WhatsApp',h(a,"class","resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium svelte-1t89ycd"),h(s,"class","resp-sharing-button__link svelte-1t89ycd"),h(s,"href",i="https://facebook.com/sharer/sharer.php?u="+encodeURI(n[0])),h(s,"target","_blank"),h(s,"rel","noopener"),h(s,"aria-label","Facebook"),h(f,"class","resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium svelte-1t89ycd"),h(u,"class","resp-sharing-button__link svelte-1t89ycd"),h(u,"href",g="whatsapp://send?text="+encodeURI(n[1])),h(u,"target","_blank"),h(u,"rel","noopener"),h(u,"aria-label","WhatsApp")},m(e,n){c(e,t,n),l(t,s),l(s,a),l(t,r),l(t,u),l(u,f)},p:e,i:e,o:e,d(e){e&&o(t)}}}function j(e){let n=window.location;return[n,"Das hier ist ne coole Website "+n]}class D extends E{constructor(e){super(),P(this,e,j,G,i,{})}}function V(e,n,t){const s=e.slice();return s[2]=n[t],s}function O(n){let t,s;return t=new N({props:{data:n[2]}}),{c(){H(t.$$.fragment)},m(e,n){q(t,e,n),s=!0},p:e,i(e){s||(T(t.$$.fragment,e),s=!0)},o(e){U(t.$$.fragment,e),s=!1},d(e){B(t,e)}}}function W(e){let n,t,a,i,r,f,g,m,v,b,w,k,_,y,$,x,C,L,z,M,S,P,E,I,K,N,F,G,j,W,J,Q,X,Y,Z,ee,ne,te,se,ae,ie,re,le,ce=e[0][0].date+"";t=new R({});let oe=e[0],de=[];for(let n=0;n<oe.length;n+=1)de[n]=O(V(e,oe,n));const ue=e=>U(de[e],1,1,(()=>{de[e]=null}));return v=new D({}),{c(){n=d("main"),H(t.$$.fragment),a=p(),i=d("div");for(let e=0;e<de.length;e+=1)de[e].c();r=p(),f=d("div"),g=d("p"),m=d("center"),H(v.$$.fragment),b=p(),w=d("div"),k=d("p"),k.innerHTML="Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n        das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n        geltenden Bestimmungen beschlossen. ",_=p(),y=d("div"),$=p(),x=d("p"),x.innerHTML="Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n        verhindern, wird\n        <strong>in Bayern die Corona-Ampel eingeführt. </strong>",C=p(),L=d("p"),L.innerHTML="<strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie\n        bisher als &quot;Kann-Regeln&quot;",z=p(),M=d("p"),M.innerHTML='<strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35</span></span></strong>',S=p(),P=d("ul"),P.innerHTML="<li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n        <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n          treffen ist erlaubt</li> \n        <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n          Platz </li> \n        <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n          erlaubt</li>",E=p(),I=d("p"),I.innerHTML='<span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b>',K=p(),N=d("ul"),N.innerHTML="<li>Maskenpflicht wird ausgeweitet. \n          <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n            <li>Maskenpflicht an Hochschulen </li> \n            <li>in öffentlichen Gebäuden</li> \n            <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n              Betrieb, sobald man den Platz verlässt.</li> \n            <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n        <li>Allgemeine Sperrstunde ab 23 Uhr </li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n          beschränkt. Egal ob draußen, daheim oder im Lokal.</li>",F=p(),G=d("p"),G.innerHTML='<span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span>',j=p(),W=d("ul"),W.innerHTML="<li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n          Grundschule  </li> \n        <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n          Egal ob draußen, daheim oder im Lokal.</li>",J=p(),Q=d("center"),X=u("Crafted with ❤️ from\n        "),Y=d("a"),Y.textContent="Andre\n          Bellmann",Z=p(),ee=d("p"),ne=u("Basierend auf den\n          "),te=d("a"),te.textContent="Daten des RKI",se=u("\n          Stand:\n          "),ae=u(ce),ie=p(),re=d("script"),re.textContent="var siteID = '2';\n    var _paq = (window._paq = window._paq || []);\n    _paq.push(['disableCookies']);\n    _paq.push(['trackPageView']);\n    _paq.push(['enableLinkTracking']);\n    (function () {\n      var u = '//tracking.andre-bellmann.de/';\n      _paq.push(['setTrackerUrl', u + 'phpfortr.php']);\n      _paq.push(['setSiteId', siteID]);\n      var d = document,\n        g = d.createElement('script'),\n        s = d.getElementsByTagName('script')[0];\n      g.type = 'text/javascript';\n      g.async = true;\n      g.crossorigin = 'anonymous';\n      g.src = u + 'jsfortr.js';\n      s.parentNode.insertBefore(g, s);\n    })();",h(i,"class","card-wrapper container svelte-13b3x4v"),h(y,"id","intxt-1"),h(y,"class","aditem "),h(Y,"href","https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"),h(te,"href","https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0"),h(te,"target","_blank"),h(te,"rel","noopener"),h(w,"class","content svelte-13b3x4v"),h(f,"class","container"),h(re,"type","text/javascript")},m(e,s){c(e,n,s),q(t,n,null),l(n,a),l(n,i);for(let e=0;e<de.length;e+=1)de[e].m(i,null);l(n,r),l(n,f),l(f,g),l(g,m),q(v,m,null),l(f,b),l(f,w),l(w,k),l(w,_),l(w,y),l(w,$),l(w,x),l(w,C),l(w,L),l(w,z),l(w,M),l(w,S),l(w,P),l(w,E),l(w,I),l(w,K),l(w,N),l(w,F),l(w,G),l(w,j),l(w,W),l(w,J),l(w,Q),l(Q,X),l(Q,Y),l(Q,Z),l(Q,ee),l(ee,ne),l(ee,te),l(ee,se),l(ee,ae),l(n,ie),l(n,re),le=!0},p(e,[n]){if(1&n){let t;for(oe=e[0],t=0;t<oe.length;t+=1){const s=V(e,oe,t);de[t]?(de[t].p(s,n),T(de[t],1)):(de[t]=O(s),de[t].c(),T(de[t],1),de[t].m(i,null))}for(A={r:0,c:[],p:A},t=oe.length;t<de.length;t+=1)ue(t);A.r||s(A.c),A=A.p}},i(e){if(!le){T(t.$$.fragment,e);for(let e=0;e<oe.length;e+=1)T(de[e]);T(v.$$.fragment,e),le=!0}},o(e){U(t.$$.fragment,e),de=de.filter(Boolean);for(let e=0;e<de.length;e+=1)U(de[e]);U(v.$$.fragment,e),le=!1},d(e){e&&o(n),B(t),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(de,e),B(v)}}}function J(e,n,t){let{data:s}=n,a=[];return s.sort(((e,n)=>e.name<n.name?-1:(e.name,n.name,0))),s.forEach((e=>{e.name.toLowerCase()=="Coburg".toLowerCase()?a.unshift(e):a.push(e)})),e.$$set=e=>{"data"in e&&t(1,s=e.data)},[a,s]}return new class extends E{constructor(e){super(),P(this,e,J,W,i,{data:1})}}({target:document.body,props:{data:[{id:270,district:"Kreisfreie Stadt",name:"Coburg",incidence:77.9119594857811,date:"31.10.2020, 00:00 Uhr",population:41072,cases:207,deaths:4,newCases:4},{id:299,district:"Landkreis",name:"Haßberge",incidence:68.7334091770952,date:"31.10.2020, 00:00 Uhr",population:84384,cases:391,deaths:6,newCases:4},{id:274,district:"Landkreis",name:"Coburg",incidence:78.3888780015447,date:"31.10.2020, 00:00 Uhr",population:86747,cases:577,deaths:31,newCases:17},{id:277,district:"Landkreis",name:"Kronach",incidence:101.883343571611,date:"31.10.2020, 00:00 Uhr",population:66743,cases:299,deaths:3,newCases:12},{id:272,district:"Landkreis",name:"Bamberg",incidence:97.8506825764628,date:"31.10.2020, 00:00 Uhr",population:147163,cases:795,deaths:38,newCases:29},{id:268,district:"Kreisfreie Stadt",name:"Bamberg",incidence:135.706254119654,date:"31.10.2020, 00:00 Uhr",population:77373,cases:428,deaths:22,newCases:12},{id:393,district:"Landkreis",name:"Hildburghausen",incidence:121.841226640505,date:"31.10.2020, 00:00 Uhr",population:63197,cases:192,deaths:1,newCases:7},{id:396,district:"Landkreis",name:"Sonneberg",incidence:53.7103453055426,date:"31.10.2020, 00:00 Uhr",population:57717,cases:370,deaths:25,newCases:9},{id:279,district:"Landkreis",name:"Lichtenfels",incidence:179.70528333533,date:"31.10.2020, 00:00 Uhr",population:66776,cases:586,deaths:19,newCases:14},{id:294,district:"Kreisfreie Stadt",name:"Schweinfurt",incidence:243.327218957062,date:"31.10.2020, 00:00 Uhr",population:53426,cases:520,deaths:20,newCases:18},{id:303,district:"Landkreis",name:"Schweinfurt",incidence:195.76421672658,date:"31.10.2020, 00:00 Uhr",population:115445,cases:1194,deaths:28,newCases:30}]}})}();
//# sourceMappingURL=bundle.js.map
