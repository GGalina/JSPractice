const{inputEl:e,createBtnEl:t,destroyBtnEl:n,boxesContainerEl:r}={inputEl:document.querySelector('[type="number"]'),createBtnEl:document.querySelector("[data-create]"),destroyBtnEl:document.querySelector("[data-destroy]"),boxesContainerEl:document.querySelector("#boxes")};t.addEventListener("click",(function(){const t=parseInt(e.value),n=[];if(t<1||t>100)alert("Enter a number between 1 and 100");else{for(let e=0;e<t;e+=1){const t=document.createElement("div");t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.style.display="block",t.style.height=30+10*e+"px",t.style.width=30+10*e+"px",n.push(t)}r.append(...n)}})),n.addEventListener("click",(function(){r.querySelectorAll("div").forEach((e=>e.remove()))}));
//# sourceMappingURL=block-builder.2f03722d.js.map
