var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function a(e){e.forEach(t)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){return null==e?"":e}function i(e,t){e.appendChild(t)}function _(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function o(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function u(){return d(" ")}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let S;function f(e){S=e}const g=[],B=[],b=[],E=[],m=Promise.resolve();let D=!1;function k(e){b.push(e)}let N=!1;const L=new Set;function G(){if(!N){N=!0;do{for(let e=0;e<g.length;e+=1){const t=g[e];f(t),v(t.$$)}for(f(null),g.length=0;B.length;)B.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];L.has(t)||(L.add(t),t())}b.length=0}while(g.length);for(;E.length;)E.pop()();D=!1,N=!1,L.clear()}}function v(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const K=new Set;let A;function y(e,t){e&&e.i&&(K.delete(e),e.i(t))}function w(e,t,n,a){if(e&&e.o){if(K.has(e))return;K.add(e),A.c.push((()=>{K.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}function R(e){e&&e.c()}function I(e,n,r){const{fragment:l,on_mount:i,on_destroy:_,after_update:c}=e.$$;l&&l.m(n,r),k((()=>{const n=i.map(t).filter(s);_?_.push(...n):a(n),e.$$.on_mount=[]})),c.forEach(k)}function $(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(g.push(e),D||(D=!0,m.then(G)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(t,s,r,l,i,_,o=[-1]){const d=S;f(t);const u=s.props||{},p=t.$$={fragment:null,ctx:null,props:_,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:o,skip_bound:!1};let h=!1;if(p.ctx=r?r(t,u,((e,n,...a)=>{const s=a.length?a[0]:n;return p.ctx&&i(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),h&&F(t,e)),n})):[],p.update(),h=!0,a(p.before_update),p.fragment=!!l&&l(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();s.intro&&y(t.$$.fragment),I(t,s.target,s.anchor),G()}f(d)}class x{$destroy(){$(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function T(t){let n,a,s,r,S,f,g,B,b,E,m,D,k,N,L,G,v,K,A,y,w,R,I,$,F=Number(t[0].cases7_per_100k).toFixed(2)+"",Z=t[0].BEZ+"",x=t[0].GEN+"",T=t[0].last_update+"",W=t[0].cases+"";return{c(){n=o("div"),a=o("div"),s=o("div"),r=o("h3"),S=d(F),f=u(),g=o("div"),B=o("div"),b=d(Z),E=u(),m=o("div"),D=d(x),k=u(),N=o("div"),L=o("div"),G=o("div"),v=d("Stand: "),K=d(T),A=u(),y=o("div"),w=o("div"),R=d("Fälle insgesamt: "),I=d(W),p(r,"class","card__number svelte-1kqnspd"),p(s,"class","card__column svelte-1kqnspd"),p(B,"class","card__area svelte-1kqnspd"),p(m,"class","card__city svelte-1kqnspd"),p(g,"class","card__column svelte-1kqnspd"),p(a,"class","card__row svelte-1kqnspd"),p(G,"class","card__update svelte-1kqnspd"),p(L,"class","card__column svelte-1kqnspd"),p(w,"class","card__cases svelte-1kqnspd"),p(y,"class","card__column svelte-1kqnspd"),p(N,"class","card__row svelte-1kqnspd"),p(n,"class",$=l("card "+t[1])+" svelte-1kqnspd")},m(e,t){_(e,n,t),i(n,a),i(a,s),i(s,r),i(r,S),i(a,f),i(a,g),i(g,B),i(B,b),i(g,E),i(g,m),i(m,D),i(n,k),i(n,N),i(N,L),i(L,G),i(G,v),i(G,K),i(N,A),i(N,y),i(y,w),i(w,R),i(w,I)},p(e,[t]){1&t&&F!==(F=Number(e[0].cases7_per_100k).toFixed(2)+"")&&h(S,F),1&t&&Z!==(Z=e[0].BEZ+"")&&h(b,Z),1&t&&x!==(x=e[0].GEN+"")&&h(D,x),1&t&&T!==(T=e[0].last_update+"")&&h(K,T),1&t&&W!==(W=e[0].cases+"")&&h(I,W),2&t&&$!==($=l("card "+e[1])+" svelte-1kqnspd")&&p(n,"class",$)},i:e,o:e,d(e){e&&c(n)}}}function W(e,t,n){let{data:a}=t,s="warning";return a.cases7_per_100k<35&&(s="info"),a.cases7_per_100k>=50&&(s="danger"),e.$$set=e=>{"data"in e&&n(0,a=e.data)},[a,s]}class V extends x{constructor(e){super(),Z(this,e,W,T,r,{data:0})}}function U(t){let n;return{c(){n=o("header"),n.innerHTML='<div class="wrapper container svelte-1qnubhy"><h1 class="svelte-1qnubhy">🚦 Corona-Ampel für Coburg 🚦</h1> \n    <h2 class="svelte-1qnubhy">7-Tage Inzidenz pro 100.000 Einwohner in Coburg und Landkreis:</h2></div>',p(n,"class","svelte-1qnubhy")},m(e,t){_(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class C extends x{constructor(e){super(),Z(this,e,null,U,r,{})}}function M(t){let n,a,s,r,l,d,h,S;return{c(){n=o("div"),a=o("a"),s=o("div"),s.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1t89ycd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1t89ycd"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg></div>Facebook',l=u(),d=o("a"),h=o("div"),h.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-1t89ycd"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1t89ycd"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"></path></svg></div>WhatsApp',p(s,"class","resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium svelte-1t89ycd"),p(a,"class","resp-sharing-button__link svelte-1t89ycd"),p(a,"href",r="https://facebook.com/sharer/sharer.php?u="+encodeURI(t[0])),p(a,"target","_blank"),p(a,"rel","noopener"),p(a,"aria-label","Facebook"),p(h,"class","resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium svelte-1t89ycd"),p(d,"class","resp-sharing-button__link svelte-1t89ycd"),p(d,"href",S="whatsapp://send?text="+encodeURI(t[1])),p(d,"target","_blank"),p(d,"rel","noopener"),p(d,"aria-label","WhatsApp")},m(e,t){_(e,n,t),i(n,a),i(a,s),i(n,l),i(n,d),i(d,h)},p:e,i:e,o:e,d(e){e&&c(n)}}}function z(e){let t=window.location;return[t,"Das hier ist ne coole Website "+t]}class q extends x{constructor(e){super(),Z(this,e,z,M,r,{})}}function j(e,t,n){const a=e.slice();return a[2]=t[n],a}function H(t){let n,a;return n=new V({props:{data:t[2].attributes}}),{c(){R(n.$$.fragment)},m(e,t){I(n,e,t),a=!0},p:e,i(e){a||(y(n.$$.fragment,e),a=!0)},o(e){w(n.$$.fragment,e),a=!1},d(e){$(n,e)}}}function O(e){let t,n,s,r,l,d,h,S,f,g,B,b,E,m,D,k;n=new C({});let N=e[0],L=[];for(let t=0;t<N.length;t+=1)L[t]=H(j(e,N,t));const G=e=>w(L[e],1,1,(()=>{L[e]=null}));return f=new q({}),{c(){t=o("main"),R(n.$$.fragment),s=u(),r=o("div");for(let e=0;e<L.length;e+=1)L[e].c();l=u(),d=o("div"),h=o("p"),S=o("center"),R(f.$$.fragment),g=u(),B=o("div"),B.innerHTML='<p>Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n        das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n        geltenden Bestimmungen beschlossen. </p> \n      <div id="intxt-1" class="aditem "></div> \n      <p>Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n        verhindern, wird\n        <strong>in Bayern die Corona-Ampel eingeführt. </strong></p> \n      <p><strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie\n        bisher als &quot;Kann-Regeln&quot;</p> \n      <p><strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35</span></span></strong></p> \n      <ul><li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n        <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n          treffen ist erlaubt</li> \n        <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n          Platz </li> \n        <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n          erlaubt</li></ul> \n      <p><span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b></p> \n      <ul><li>Maskenpflicht wird ausgeweitet. \n          <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n            <li>Maskenpflicht an Hochschulen </li> \n            <li>in öffentlichen Gebäuden</li> \n            <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n              Betrieb, sobald man den Platz verlässt.</li> \n            <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n        <li>Allgemeine Sperrstunde ab 23 Uhr </li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n          beschränkt. Egal ob draußen, daheim oder im Lokal.</li></ul> \n      <p><span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span></p> \n      <ul><li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n          Grundschule  </li> \n        <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n          Egal ob draußen, daheim oder im Lokal.</li></ul> \n      <center>Crafted with ❤️ from\n        <a href="https://www.andre-bellmann.de/?utm_source=social-media&amp;utm_medium=corona&amp;utm_campaign=website">Andre\n          Bellmann</a></center>',b=u(),E=o("div"),m=u(),D=o("script"),D.textContent="var _paq = window._paq = window._paq || [];\n    _paq.push(['disableCookies']);\n    (function() {\n      var u=\"//tracking.andre-bellmann.de/\";\n      _paq.push(['setTrackerUrl', u+'matomo.php']);\n      _paq.push(['setSiteId', '2']);\n      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n      g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n    })();",p(r,"class","card-wrapper container svelte-1j8phgf"),p(B,"class","content svelte-1j8phgf"),p(d,"class","container"),p(E,"class","container"),p(D,"type","text/javascript")},m(e,a){_(e,t,a),I(n,t,null),i(t,s),i(t,r);for(let e=0;e<L.length;e+=1)L[e].m(r,null);i(t,l),i(t,d),i(d,h),i(h,S),I(f,S,null),i(d,g),i(d,B),i(t,b),i(t,E),i(t,m),i(t,D),k=!0},p(e,[t]){if(1&t){let n;for(N=e[0],n=0;n<N.length;n+=1){const a=j(e,N,n);L[n]?(L[n].p(a,t),y(L[n],1)):(L[n]=H(a),L[n].c(),y(L[n],1),L[n].m(r,null))}for(A={r:0,c:[],p:A},n=N.length;n<L.length;n+=1)G(n);A.r||a(A.c),A=A.p}},i(e){if(!k){y(n.$$.fragment,e);for(let e=0;e<N.length;e+=1)y(L[e]);y(f.$$.fragment,e),k=!0}},o(e){w(n.$$.fragment,e),L=L.filter(Boolean);for(let e=0;e<L.length;e+=1)w(L[e]);w(f.$$.fragment,e),k=!1},d(e){e&&c(t),$(n),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(L,e),$(f)}}}function P(e,t,n){let{data:a}=t,s=[];return a.forEach((e=>{e.attributes.GEN.toLowerCase().includes("coburg")?s.unshift(e):s.push(e)})),e.$$set=e=>{"data"in e&&n(1,a=e.data)},[s,a]}var J={objectIdFieldName:"OBJECTID",uniqueIdField:{name:"OBJECTID",isSystemMaintained:!0},globalIdFieldName:"",geometryProperties:{shapeAreaFieldName:"Shape__Area",shapeLengthFieldName:"Shape__Length",units:"esriMeters"},geometryType:"esriGeometryPolygon",spatialReference:{wkid:4326,latestWkid:4326},fields:"",features:[{attributes:{OBJECTID:268,ADE:4,GF:4,BSG:1,RS:"09461",AGS:"09461",SDV_RS:"094610000000",GEN:"Bamberg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"61",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE241",RS_0:"094610000000",AGS_0:"09461000",WSK:"1972/07/01 00:00:00.000",EWZ:77373,KFL:54.62,DEBKG_ID:"DEBKGDL20000E5AI",Shape__Area:54954699.8215332,Shape__Length:40971.33209863,death_rate:6.56716417910448,cases:335,deaths:22,cases_per_100k:432.967572667468,cases_per_population:.432967572667468,BL:"Bayern",BL_ID:"9",county:"SK Bamberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:52.9900611324364,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:270,ADE:4,GF:4,BSG:1,RS:"09463",AGS:"09463",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"63",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE243",RS_0:"094630000000",AGS_0:"09463000",WSK:"1977/01/01 00:00:00.000",EWZ:41072,KFL:48.29,DEBKG_ID:"DEBKGDL20000E24O",Shape__Area:48132641.3122559,Shape__Length:47477.3741286157,death_rate:2.17391304347826,cases:184,deaths:4,cases_per_100k:447.993767043241,cases_per_population:.447993767043241,BL:"Bayern",BL_ID:"9",county:"SK Coburg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:60.8687183482665,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:272,ADE:4,GF:4,BSG:1,RS:"09471",AGS:"09471",SDV_RS:"094610000000",GEN:"Bamberg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"71",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE245",RS_0:"094710000000",AGS_0:"09471000",WSK:"1978/05/01 00:00:00.000",EWZ:147163,KFL:1167.82,DEBKG_ID:"DEBKGDL20000E64V",Shape__Area:1166583342.10889,Shape__Length:362711.190290549,death_rate:5.72289156626506,cases:664,deaths:38,cases_per_100k:451.200369658134,cases_per_population:.451200369658134,BL:"Bayern",BL_ID:"9",county:"LK Bamberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:48.9253412882314,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:274,ADE:4,GF:4,BSG:1,RS:"09473",AGS:"09473",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"73",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE247",RS_0:"094730000000",AGS_0:"09473000",WSK:"2013/01/01 00:00:00.000",EWZ:86747,KFL:590.41,DEBKG_ID:"DEBKGDL20000E1GL",Shape__Area:590710052.25708,Shape__Length:264831.82117682,death_rate:5.96153846153846,cases:520,deaths:31,cases_per_100k:599.444361188283,cases_per_population:.599444361188283,BL:"Bayern",BL_ID:"9",county:"LK Coburg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:64.5555465895074,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:277,ADE:4,GF:4,BSG:1,RS:"09476",AGS:"09476",SDV_RS:"094760145145",GEN:"Kronach",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"76",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE24A",RS_0:"094760000000",AGS_0:"09476000",WSK:"2009/01/01 00:00:00.000",EWZ:66743,KFL:651.51,DEBKG_ID:"DEBKGDL20000E0EC",Shape__Area:651427900.599854,Shape__Length:195015.277434266,death_rate:1.2448132780083,cases:241,deaths:3,cases_per_100k:361.086555893502,cases_per_population:.361086555893502,BL:"Bayern",BL_ID:"9",county:"LK Kronach",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:50.9416717858053,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:279,ADE:4,GF:4,BSG:1,RS:"09478",AGS:"09478",SDV_RS:"094780139139",GEN:"Lichtenfels",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"78",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE24C",RS_0:"094780000000",AGS_0:"09478000",WSK:"2013/01/01 00:00:00.000",EWZ:66776,KFL:519.92,DEBKG_ID:"DEBKGDL20000E2H5",Shape__Area:519647169.088623,Shape__Length:187205.846382944,death_rate:3.54166666666667,cases:480,deaths:17,cases_per_100k:718.82113334132,cases_per_population:.71882113334132,BL:"Bayern",BL_ID:"9",county:"LK Lichtenfels",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:91.3501856954594,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:294,ADE:4,GF:4,BSG:1,RS:"09662",AGS:"09662",SDV_RS:"096620000000",GEN:"Schweinfurt",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"62",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE262",RS_0:"096620000000",AGS_0:"09662000",WSK:"1972/07/01 00:00:00.000",EWZ:53426,KFL:35.7,DEBKG_ID:"DEBKGDL20000DWGM",Shape__Area:35470859.157959,Shape__Length:39485.1982806469,death_rate:4.36781609195402,cases:435,deaths:19,cases_per_100k:814.210309587092,cases_per_population:.814210309587092,BL:"Bayern",BL_ID:"9",county:"SK Schweinfurt",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:183.431288136862,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:299,ADE:4,GF:4,BSG:1,RS:"09674",AGS:"09674",SDV_RS:"096740147147",GEN:"Haßberge",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"74",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE267",RS_0:"096740000000",AGS_0:"09674000",WSK:"2009/01/01 00:00:00.000",EWZ:84384,KFL:956.19,DEBKG_ID:"DEBKGDL20000E1O5",Shape__Area:956058894.023438,Shape__Length:250001.715622342,death_rate:1.74927113702624,cases:343,deaths:6,cases_per_100k:406.475161167994,cases_per_population:.406475161167994,BL:"Bayern",BL_ID:"9",county:"LK Haßberge",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:74.6587030716723,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:303,ADE:4,GF:4,BSG:1,RS:"09678",AGS:"09678",SDV_RS:"096620000000",GEN:"Schweinfurt",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"78",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE26B",RS_0:"096780000000",AGS_0:"09678000",WSK:"1972/07/01 00:00:00.000",EWZ:115445,KFL:841.38,DEBKG_ID:"DEBKGDL20000E09P",Shape__Area:840903919.659912,Shape__Length:324664.036452781,death_rate:2.38322211630124,cases:1049,deaths:25,cases_per_100k:908.657802416735,cases_per_population:.908657802416735,BL:"Bayern",BL_ID:"9",county:"LK Schweinfurt",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:178.439949759626,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:393,ADE:4,GF:4,BSG:1,RS:"16069",AGS:"16069",SDV_RS:"160690024024",GEN:"Hildburghausen",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"16",SN_R:"0",SN_K:"69",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DEG0E",RS_0:"160690000000",AGS_0:"16069000",WSK:"2009/01/01 00:00:00.000",EWZ:63197,KFL:938.43,DEBKG_ID:"DEBKGDL20000DWVH",Shape__Area:937297569.990723,Shape__Length:265821.005536133,death_rate:.72463768115942,cases:138,deaths:1,cases_per_100k:218.364795797269,cases_per_population:.218364795797269,BL:"Thüringen",BL_ID:"16",county:"LK Hildburghausen",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:58.5470829311518,recovered:null,EWZ_BL:2133378,cases7_bl_per_100k:42.6084828848896}},{attributes:{OBJECTID:396,ADE:4,GF:4,BSG:1,RS:"16072",AGS:"16072",SDV_RS:"160720018018",GEN:"Sonneberg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"16",SN_R:"0",SN_K:"72",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DEG0H",RS_0:"160720000000",AGS_0:"16072000",WSK:"2009/01/01 00:00:00.000",EWZ:57717,KFL:433.61,DEBKG_ID:"DEBKGDL20000DYQA",Shape__Area:432927012.661377,Shape__Length:161041.945432261,death_rate:7.37463126843658,cases:339,deaths:25,cases_per_100k:587.348614792869,cases_per_population:.587348614792869,BL:"Thüringen",BL_ID:"16",county:"LK Sonneberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:12.1281424883483,recovered:null,EWZ_BL:2133378,cases7_bl_per_100k:42.6084828848896}}]};return new class extends x{constructor(e){super(),Z(this,e,P,O,r,{data:1})}}({target:document.body,props:{name:"world",data:J.features}})}();
//# sourceMappingURL=bundle.js.map
