const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body;let a=null;t.addEventListener("click",(()=>{a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b8196622.js.map
