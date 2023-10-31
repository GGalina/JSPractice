const formEl = document.querySelector(`.loginForm`);

formEl.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
    event.preventDefault(); // prevent reloading of the page when the form is submitted

    const current = event.target.elements;
    const email = current.email.value;
    const password = current.password.value;
    const inputData = {
        email,
        password
    };

    if (email === "" || password === "") {
        alert(`All fields must be filled in`);  // if the form has empty fields display alert
    } else {
        console.log(inputData); // display the object with the entered data
        event.target.reset();   // clear the values of the form fields
    };
};