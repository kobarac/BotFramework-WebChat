(this["webpackJsonpsample-customization-smart-display"]=this["webpackJsonpsample-customization-smart-display"]||[]).push([[0],{1622:function(e,t){},1623:function(e,t){},1624:function(e,t){},1758:function(e,t){},1773:function(e,t,n){},1774:function(e,t,n){},1781:function(e,t,n){},1782:function(e,t,n){},1783:function(e,t,n){},1784:function(e,t,n){},1786:function(e,t,n){"use strict";n.r(t);n(705),n(706),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a,c=n(38),r=n.n(c),o=n(94),i=n(33),s=n(42),u=n(0),l=n.n(u),p=0;function m(){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Date.now(),(!a||t-p>3e5)&&(a=fetch("https://webchat-mockbot-streaming.azurewebsites.net/speechservices/token",{method:"POST"}).then((function(e){return e.json()})).then((function(e){var t=e.region;return{authorizationToken:e.token,region:t}})).catch((function(){p=0})),p=t),e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=m,v=(n(1773),n(8)),d=n.n(v),b=s.hooks.useSendBoxSpeechInterimsVisible,k=function(){var e=b(),t=Object(i.a)(e,1)[0];return l.a.createElement("div",{className:d()("App-BlurLens",{hide:!t})})},j=(n(1774),n(700)),E=n.n(j),O=s.hooks.useActivities;function w(){var e=O();return[Object(i.a)(e,1)[0].slice().reverse().find((function(e){var t=e.from.role,n=e.type;return"bot"===t&&"message"===n}))]}var A=s.Components.SpeakActivity,S=s.hooks.useSendBoxSpeechInterimsVisible,y=function(e){var t=e.lastReadActivityID,n=S(),a=Object(i.a)(n,1)[0],c=w(),r=Object(i.a)(c,1)[0],o=Object(u.useMemo)((function(){return Object(s.createAdaptiveCardsAttachmentMiddleware)()()((function(){return!1}))}),[]);return!a&&!!r&&r.id!==t&&l.a.createElement("div",{className:"App-BotResponse"},!!r.text&&l.a.createElement("div",{className:"App-BotResponse-Activity"},r.text),l.a.createElement(E.a,{className:"App-BotResponse-Attachments",showScrollBar:!1},(r.attachments||[]).map((function(e,t){return l.a.createElement("div",{className:"App-BotResponse-Attachment",key:t},o({activity:r,attachment:e}))}))),r.channelData&&r.channelData.speak&&l.a.createElement(A,{activity:r}))},I=(n(1781),n(1782),function(e){var t=e.children,n=e.icon;return l.a.createElement("div",{className:"App-Notification"},l.a.createElement("i",{className:d()("App-Notification-Icon","ms-Icon","ms-Icon--".concat(n))}),l.a.createElement("div",{className:"App-Notification-Text"},t))});var N=function(){var e=Object(u.useState)(Date.now()),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(u.useState)(),s=Object(i.a)(c,2),p=s[0],m=s[1];return Object(u.useEffect)((function(){Object(o.a)(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.weather.gov/gridpoints/SEW/130,67/forecast",{headers:{accept:"application/geo+json"}});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:n=e.sent,a=Object(i.a)(n.properties.periods,1),c=a[0],m(c.temperature);case 10:case"end":return e.stop()}}),e)})))()}),[]),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;Object(u.useEffect)((function(){if(e&&t){var n=setInterval(e,t);return function(){return clearInterval(n)}}}),[e,t])}((function(){return a(Date.now())}),1e3),l.a.createElement("div",{className:"App-Clock"},l.a.createElement("div",{className:"App-Clock-Text"},Intl.DateTimeFormat("en-US",{hour12:!1,timeStyle:"short"}).format(new Date(n))),!!p&&l.a.createElement(I,{icon:"PartlyCloudyDay"},p,"\xb0F"),l.a.createElement(I,{icon:"Mail"},"2"),l.a.createElement(I,{icon:"SkypeForBusinessLogo"},"1"))},x=(n(1783),s.hooks.useMicrophoneButtonClick),B=s.hooks.useMicrophoneButtonDisabled,g=s.hooks.useSendBoxSpeechInterimsVisible,C=function(e){var t=e.onClick,n=g(),a=Object(i.a)(n,1)[0],c=B(),r=Object(i.a)(c,1)[0],o=x(),s=Object(u.useCallback)((function(){o(),t&&t()}),[o,t]);return l.a.createElement("button",{className:d()("App-MicrophoneButton",{dictating:a}),disabled:r,onClick:s},l.a.createElement("i",{className:"ms-Icon ms-Icon--Microphone"}))},D=(n(1784),s.hooks.useDictateInterims),M=s.hooks.useSendBoxSpeechInterimsVisible,R=function(){var e=D(),t=Object(i.a)(e,1)[0],n=M(),a=Object(i.a)(n,1)[0];return a&&l.a.createElement("div",{className:"App-SpeechInterims"},!!a&&t.map((function(e,t){return l.a.createElement("span",{key:t},e,"\xa0")})))},T=function(){var e=w(),t=Object(i.a)(e,1)[0],n=Object(u.useState)(),a=Object(i.a)(n,2),c=a[0],r=a[1],o=Object(u.useCallback)((function(){t&&r(t.id)}),[t,r]);return l.a.createElement("div",{className:"App-SmartDisplay"},l.a.createElement(N,null),l.a.createElement(k,null),l.a.createElement(R,null),l.a.createElement(y,{lastReadActivityID:c}),l.a.createElement(C,{onClick:o}))},z=s.Components.Composer,V=function(){var e=Object(u.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.useEffect)((function(){Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,Object(s.createDirectLineSpeechAdapters)({fetchCredentials:h});case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[a]),!!n&&l.a.createElement(z,n,l.a.createElement(T,null))},F=n(169);n.n(F).a.render(l.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},349:function(e,t){},350:function(e,t){},699:function(e,t){},704:function(e,t,n){e.exports=n(1786)},705:function(e,t,n){},706:function(e,t,n){},872:function(e,t){},874:function(e,t){},919:function(e,t){},920:function(e,t){}},[[704,1,2]]]);
//# sourceMappingURL=main.4769a453.chunk.js.map