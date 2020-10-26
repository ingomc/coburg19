var app=function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function a(e){e.forEach(n)}function s(e){return"function"==typeof e}function r(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function l(e){return null==e?"":e}function _(e,n){e.appendChild(n)}function i(e,n,t){e.insertBefore(n,t||null)}function c(e){e.parentNode.removeChild(e)}function o(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function p(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function S(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}let h;function f(e){h=e}const B=[],E=[],g=[],b=[],D=Promise.resolve();let N=!1;function L(e){g.push(e)}let m=!1;const k=new Set;function G(){if(!m){m=!0;do{for(let e=0;e<B.length;e+=1){const n=B[e];f(n),K(n.$$)}for(f(null),B.length=0;E.length;)E.pop()();for(let e=0;e<g.length;e+=1){const n=g[e];k.has(n)||(k.add(n),n())}g.length=0}while(B.length);for(;b.length;)b.pop()();N=!1,m=!1,k.clear()}}function K(e){if(null!==e.fragment){e.update(),a(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(L)}}const A=new Set;let v;function R(e,n){e&&e.i&&(A.delete(e),e.i(n))}function y(e,n,t,a){if(e&&e.o){if(A.has(e))return;A.add(e),v.c.push((()=>{A.delete(e),a&&(t&&e.d(1),a())})),e.o(n)}}function I(e){e&&e.c()}function $(e,t,r){const{fragment:l,on_mount:_,on_destroy:i,after_update:c}=e.$$;l&&l.m(t,r),L((()=>{const t=_.map(n).filter(s);i?i.push(...t):a(t),e.$$.on_mount=[]})),c.forEach(L)}function Z(e,n){const t=e.$$;null!==t.fragment&&(a(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function w(e,n){-1===e.$$.dirty[0]&&(B.push(e),N||(N=!0,D.then(G)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function F(n,s,r,l,_,i,o=[-1]){const u=h;f(n);const d=s.props||{},p=n.$$={fragment:null,ctx:null,props:i,update:e,not_equal:_,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:t(),dirty:o,skip_bound:!1};let S=!1;if(p.ctx=r?r(n,d,((e,t,...a)=>{const s=a.length?a[0]:t;return p.ctx&&_(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),S&&w(n,e)),t})):[],p.update(),S=!0,a(p.before_update),p.fragment=!!l&&l(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();s.intro&&R(n.$$.fragment),$(n,s.target,s.anchor),G()}f(u)}class T{$destroy(){Z(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(n){let t,a,s,r,h,f,B,E,g,b,D,N,L,m,k,G,K,A,v,R,y,I,$,Z,w=Number(n[0].cases7_per_100k).toFixed(2)+"",F=n[0].BEZ+"",T=n[0].GEN+"",V=n[0].last_update+"",W=n[0].cases+"";return{c(){t=o("div"),a=o("div"),s=o("div"),r=o("h3"),h=u(w),f=d(),B=o("div"),E=o("div"),g=u(F),b=d(),D=o("div"),N=u(T),L=d(),m=o("div"),k=o("div"),G=o("div"),K=u("Stand: "),A=u(V),v=d(),R=o("div"),y=o("div"),I=u("Fälle insgesamt: "),$=u(W),p(r,"class","card__number svelte-1kqnspd"),p(s,"class","card__column svelte-1kqnspd"),p(E,"class","card__area svelte-1kqnspd"),p(D,"class","card__city svelte-1kqnspd"),p(B,"class","card__column svelte-1kqnspd"),p(a,"class","card__row svelte-1kqnspd"),p(G,"class","card__update svelte-1kqnspd"),p(k,"class","card__column svelte-1kqnspd"),p(y,"class","card__cases svelte-1kqnspd"),p(R,"class","card__column svelte-1kqnspd"),p(m,"class","card__row svelte-1kqnspd"),p(t,"class",Z=l("card "+n[1])+" svelte-1kqnspd")},m(e,n){i(e,t,n),_(t,a),_(a,s),_(s,r),_(r,h),_(a,f),_(a,B),_(B,E),_(E,g),_(B,b),_(B,D),_(D,N),_(t,L),_(t,m),_(m,k),_(k,G),_(G,K),_(G,A),_(m,v),_(m,R),_(R,y),_(y,I),_(y,$)},p(e,[n]){1&n&&w!==(w=Number(e[0].cases7_per_100k).toFixed(2)+"")&&S(h,w),1&n&&F!==(F=e[0].BEZ+"")&&S(g,F),1&n&&T!==(T=e[0].GEN+"")&&S(N,T),1&n&&V!==(V=e[0].last_update+"")&&S(A,V),1&n&&W!==(W=e[0].cases+"")&&S($,W),2&n&&Z!==(Z=l("card "+e[1])+" svelte-1kqnspd")&&p(t,"class",Z)},i:e,o:e,d(e){e&&c(t)}}}function W(e,n,t){let{data:a}=n,s="warning";return a.cases7_per_100k<35&&(s="info"),a.cases7_per_100k>=50&&(s="danger"),e.$$set=e=>{"data"in e&&t(0,a=e.data)},[a,s]}class x extends T{constructor(e){super(),F(this,e,W,V,r,{data:0})}}function U(n){let t;return{c(){t=o("header"),t.innerHTML='<div class="wrapper container svelte-1qnubhy"><h1 class="svelte-1qnubhy">🚦 Corona-Ampel für Coburg 🚦</h1> \n    <h2 class="svelte-1qnubhy">7-Tage Inzidenz pro 100.000 Einwohner in Coburg und Landkreis:</h2></div>',p(t,"class","svelte-1qnubhy")},m(e,n){i(e,t,n)},p:e,i:e,o:e,d(e){e&&c(t)}}}class C extends T{constructor(e){super(),F(this,e,null,U,r,{})}}function M(e,n,t){const a=e.slice();return a[2]=n[t],a}function z(n){let t,a;return t=new x({props:{data:n[2].attributes}}),{c(){I(t.$$.fragment)},m(e,n){$(t,e,n),a=!0},p:e,i(e){a||(R(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){Z(t,e)}}}function q(e){let n,t,s,r,l,u,S,h,f;t=new C({});let B=e[0],E=[];for(let n=0;n<B.length;n+=1)E[n]=z(M(e,B,n));const g=e=>y(E[e],1,1,(()=>{E[e]=null}));return{c(){n=o("main"),I(t.$$.fragment),s=d(),r=o("div");for(let e=0;e<E.length;e+=1)E[e].c();l=d(),u=o("div"),u.innerHTML='<div class="content svelte-1j8phgf"><p>Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n        das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n        geltenden Bestimmungen beschlossen. </p> \n      <div id="intxt-1" class="aditem "></div> \n      <p>Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n        verhindern, wird\n        <strong>in Bayern die Corona-Ampel eingeführt. </strong></p> \n      <p><strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie\n        bisher als &quot;Kann-Regeln&quot;</p> \n      <p><strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35 </span></span></strong></p> \n      <ul><li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n        <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n          treffen ist erlaubt</li> \n        <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n          Platz </li> \n        <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n          erlaubt</li></ul> \n      <p><span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b></p> \n      <ul><li>Maskenpflicht wird ausgeweitet. \n          <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n            <li>Maskenpflicht an Hochschulen </li> \n            <li>in öffentlichen Gebäuden</li> \n            <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n              Betrieb, sobald man den Platz verlässt.</li> \n            <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n        <li>Allgemeine Sperrstunde ab 23 Uhr </li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n          beschränkt. Egal ob draußen, daheim oder im Lokal.</li></ul> \n      <p><span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span></p> \n      <ul><li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n          Grundschule  </li> \n        <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n          Egal ob draußen, daheim oder im Lokal.</li></ul> \n      <center>Crafted with ❤️ from\n        <a href="https://www.andre-bellmann.de/?utm_source=social-media&amp;utm_medium=corona&amp;utm_campaign=website">Andre Bellmann</a></center></div>',S=d(),h=o("div"),p(r,"class","card-wrapper container svelte-1j8phgf"),p(u,"class","container"),p(h,"class","container")},m(e,a){i(e,n,a),$(t,n,null),_(n,s),_(n,r);for(let e=0;e<E.length;e+=1)E[e].m(r,null);_(n,l),_(n,u),_(n,S),_(n,h),f=!0},p(e,[n]){if(1&n){let t;for(B=e[0],t=0;t<B.length;t+=1){const a=M(e,B,t);E[t]?(E[t].p(a,n),R(E[t],1)):(E[t]=z(a),E[t].c(),R(E[t],1),E[t].m(r,null))}for(v={r:0,c:[],p:v},t=B.length;t<E.length;t+=1)g(t);v.r||a(v.c),v=v.p}},i(e){if(!f){R(t.$$.fragment,e);for(let e=0;e<B.length;e+=1)R(E[e]);f=!0}},o(e){y(t.$$.fragment,e),E=E.filter(Boolean);for(let e=0;e<E.length;e+=1)y(E[e]);f=!1},d(e){e&&c(n),Z(t),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(E,e)}}}function O(e,n,t){let{data:a}=n,s=[];return a.forEach((e=>{e.attributes.GEN.toLowerCase().includes("coburg")?s.unshift(e):s.push(e)})),e.$$set=e=>{"data"in e&&t(1,a=e.data)},[s,a]}var j={objectIdFieldName:"OBJECTID",uniqueIdField:{name:"OBJECTID",isSystemMaintained:!0},globalIdFieldName:"",geometryProperties:{shapeAreaFieldName:"Shape__Area",shapeLengthFieldName:"Shape__Length",units:"esriMeters"},geometryType:"esriGeometryPolygon",spatialReference:{wkid:4326,latestWkid:4326},fields:"",features:[{attributes:{OBJECTID:268,ADE:4,GF:4,BSG:1,RS:"09461",AGS:"09461",SDV_RS:"094610000000",GEN:"Bamberg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"61",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE241",RS_0:"094610000000",AGS_0:"09461000",WSK:"1972/07/01 00:00:00.000",EWZ:77373,KFL:54.62,DEBKG_ID:"DEBKGDL20000E5AI",Shape__Area:54954699.8215332,Shape__Length:40971.33209863,death_rate:6.56716417910448,cases:335,deaths:22,cases_per_100k:432.967572667468,cases_per_population:.432967572667468,BL:"Bayern",BL_ID:"9",county:"SK Bamberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:52.9900611324364,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:270,ADE:4,GF:4,BSG:1,RS:"09463",AGS:"09463",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"63",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE243",RS_0:"094630000000",AGS_0:"09463000",WSK:"1977/01/01 00:00:00.000",EWZ:41072,KFL:48.29,DEBKG_ID:"DEBKGDL20000E24O",Shape__Area:48132641.3122559,Shape__Length:47477.3741286157,death_rate:2.17391304347826,cases:184,deaths:4,cases_per_100k:447.993767043241,cases_per_population:.447993767043241,BL:"Bayern",BL_ID:"9",county:"SK Coburg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:60.8687183482665,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:272,ADE:4,GF:4,BSG:1,RS:"09471",AGS:"09471",SDV_RS:"094610000000",GEN:"Bamberg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"71",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE245",RS_0:"094710000000",AGS_0:"09471000",WSK:"1978/05/01 00:00:00.000",EWZ:147163,KFL:1167.82,DEBKG_ID:"DEBKGDL20000E64V",Shape__Area:1166583342.10889,Shape__Length:362711.190290549,death_rate:5.72289156626506,cases:664,deaths:38,cases_per_100k:451.200369658134,cases_per_population:.451200369658134,BL:"Bayern",BL_ID:"9",county:"LK Bamberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:48.9253412882314,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:274,ADE:4,GF:4,BSG:1,RS:"09473",AGS:"09473",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"73",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE247",RS_0:"094730000000",AGS_0:"09473000",WSK:"2013/01/01 00:00:00.000",EWZ:86747,KFL:590.41,DEBKG_ID:"DEBKGDL20000E1GL",Shape__Area:590710052.25708,Shape__Length:264831.82117682,death_rate:5.96153846153846,cases:520,deaths:31,cases_per_100k:599.444361188283,cases_per_population:.599444361188283,BL:"Bayern",BL_ID:"9",county:"LK Coburg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:64.5555465895074,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:277,ADE:4,GF:4,BSG:1,RS:"09476",AGS:"09476",SDV_RS:"094760145145",GEN:"Kronach",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"76",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE24A",RS_0:"094760000000",AGS_0:"09476000",WSK:"2009/01/01 00:00:00.000",EWZ:66743,KFL:651.51,DEBKG_ID:"DEBKGDL20000E0EC",Shape__Area:651427900.599854,Shape__Length:195015.277434266,death_rate:1.2448132780083,cases:241,deaths:3,cases_per_100k:361.086555893502,cases_per_population:.361086555893502,BL:"Bayern",BL_ID:"9",county:"LK Kronach",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:50.9416717858053,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:279,ADE:4,GF:4,BSG:1,RS:"09478",AGS:"09478",SDV_RS:"094780139139",GEN:"Lichtenfels",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"78",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE24C",RS_0:"094780000000",AGS_0:"09478000",WSK:"2013/01/01 00:00:00.000",EWZ:66776,KFL:519.92,DEBKG_ID:"DEBKGDL20000E2H5",Shape__Area:519647169.088623,Shape__Length:187205.846382944,death_rate:3.54166666666667,cases:480,deaths:17,cases_per_100k:718.82113334132,cases_per_population:.71882113334132,BL:"Bayern",BL_ID:"9",county:"LK Lichtenfels",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:91.3501856954594,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:294,ADE:4,GF:4,BSG:1,RS:"09662",AGS:"09662",SDV_RS:"096620000000",GEN:"Schweinfurt",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"62",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE262",RS_0:"096620000000",AGS_0:"09662000",WSK:"1972/07/01 00:00:00.000",EWZ:53426,KFL:35.7,DEBKG_ID:"DEBKGDL20000DWGM",Shape__Area:35470859.157959,Shape__Length:39485.1982806469,death_rate:4.36781609195402,cases:435,deaths:19,cases_per_100k:814.210309587092,cases_per_population:.814210309587092,BL:"Bayern",BL_ID:"9",county:"SK Schweinfurt",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:183.431288136862,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:299,ADE:4,GF:4,BSG:1,RS:"09674",AGS:"09674",SDV_RS:"096740147147",GEN:"Haßberge",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"74",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE267",RS_0:"096740000000",AGS_0:"09674000",WSK:"2009/01/01 00:00:00.000",EWZ:84384,KFL:956.19,DEBKG_ID:"DEBKGDL20000E1O5",Shape__Area:956058894.023438,Shape__Length:250001.715622342,death_rate:1.74927113702624,cases:343,deaths:6,cases_per_100k:406.475161167994,cases_per_population:.406475161167994,BL:"Bayern",BL_ID:"9",county:"LK Haßberge",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:74.6587030716723,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:303,ADE:4,GF:4,BSG:1,RS:"09678",AGS:"09678",SDV_RS:"096620000000",GEN:"Schweinfurt",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"78",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE26B",RS_0:"096780000000",AGS_0:"09678000",WSK:"1972/07/01 00:00:00.000",EWZ:115445,KFL:841.38,DEBKG_ID:"DEBKGDL20000E09P",Shape__Area:840903919.659912,Shape__Length:324664.036452781,death_rate:2.38322211630124,cases:1049,deaths:25,cases_per_100k:908.657802416735,cases_per_population:.908657802416735,BL:"Bayern",BL_ID:"9",county:"LK Schweinfurt",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:178.439949759626,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:87.2169857575051}},{attributes:{OBJECTID:393,ADE:4,GF:4,BSG:1,RS:"16069",AGS:"16069",SDV_RS:"160690024024",GEN:"Hildburghausen",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"16",SN_R:"0",SN_K:"69",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DEG0E",RS_0:"160690000000",AGS_0:"16069000",WSK:"2009/01/01 00:00:00.000",EWZ:63197,KFL:938.43,DEBKG_ID:"DEBKGDL20000DWVH",Shape__Area:937297569.990723,Shape__Length:265821.005536133,death_rate:.72463768115942,cases:138,deaths:1,cases_per_100k:218.364795797269,cases_per_population:.218364795797269,BL:"Thüringen",BL_ID:"16",county:"LK Hildburghausen",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:58.5470829311518,recovered:null,EWZ_BL:2133378,cases7_bl_per_100k:42.6084828848896}},{attributes:{OBJECTID:396,ADE:4,GF:4,BSG:1,RS:"16072",AGS:"16072",SDV_RS:"160720018018",GEN:"Sonneberg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"16",SN_R:"0",SN_K:"72",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DEG0H",RS_0:"160720000000",AGS_0:"16072000",WSK:"2009/01/01 00:00:00.000",EWZ:57717,KFL:433.61,DEBKG_ID:"DEBKGDL20000DYQA",Shape__Area:432927012.661377,Shape__Length:161041.945432261,death_rate:7.37463126843658,cases:339,deaths:25,cases_per_100k:587.348614792869,cases_per_population:.587348614792869,BL:"Thüringen",BL_ID:"16",county:"LK Sonneberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:12.1281424883483,recovered:null,EWZ_BL:2133378,cases7_bl_per_100k:42.6084828848896}}]};return new class extends T{constructor(e){super(),F(this,e,O,q,r,{data:1})}}({target:document.body,props:{name:"world",data:j.features}})}();
//# sourceMappingURL=bundle.js.map
