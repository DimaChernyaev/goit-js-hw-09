function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t();const e=document.querySelector("body"),d=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");d.addEventListener("click",(function(){const a=setInterval((()=>{e.style.backgroundColor=`${t()}`}),1e3);return d.disabled=!0,n.disabled=!1,r=a})),n.addEventListener("click",(function(){clearInterval(r),d.disabled=!1,n.disabled=!0})),n.disabled=!0;let r=null;
//# sourceMappingURL=01-color-switcher.889d1cd7.js.map