!function(){var t={startBtnEl:document.querySelector("button[data-start]"),stopBtnEl:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},e=t.startBtnEl,n=t.stopBtnEl,o=t.bodyEl,d=null;n.disabled=!0,e.addEventListener("click",(function(){e.disabled=!0,n.disabled=!1,d=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){e.disabled=!1,n.disabled=!0,clearInterval(d)}))}();
//# sourceMappingURL=color-switcher.d01481dd.js.map