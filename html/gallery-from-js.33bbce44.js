const e=document.querySelector(".gallery");e.style.display="flex",e.style.justifyContent="center",e.style.gap="30px";const s=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((e=>`<li \n      class="galeryImg",\n      style="list-style:none" \n      >\n      <img src="${e.url}" alt="${e.alt}" width=360 height=260>\n      </li>`));e.insertAdjacentHTML("afterbegin",s.join(""));
//# sourceMappingURL=gallery-from-js.33bbce44.js.map