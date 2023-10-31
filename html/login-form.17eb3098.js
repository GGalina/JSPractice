document.querySelector(".loginForm").addEventListener("submit",(function(e){e.preventDefault();var l=e.target.elements,t=l.email.value,a=l.password.value,r={email:t,password:a};""===t||""===a?alert("All fields must be filled in"):(console.log(r),e.target.reset())}));
//# sourceMappingURL=login-form.17eb3098.js.map
