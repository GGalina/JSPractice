document.querySelector(".loginForm").addEventListener("submit",(function(e){e.preventDefault();const t=e.target.elements,l=t.email.value,s=t.password.value,a={email:l,password:s};""===l||""===s?alert("All fields must be filled in"):(console.log(a),e.target.reset())}));
//# sourceMappingURL=login-form.058f0a27.js.map
