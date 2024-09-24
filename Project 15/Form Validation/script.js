// selcting form and input
const form = document.querySelector("form");
const password = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

//function to display error massaeg
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

//function to handle form submission

const handleFormData = (e) => {
    e.preventDefault();

    //retriving elements 
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("mobile");
    const Date = document.getElementById("date");
    const genderInput = document.getElementById("gender");
    const cityInput = document.getElementById("city");
    const areaPinInput = document.getElementById("areaPIN");
    const addressInput = document.getElementById("address");
    const stateInput = document.getElementById("state");
    const password = document.getElementById("password");

    //getting triming value from input field
    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const date = Date.value.trim();
    const gender = genderInput.value.trim();
    const city = cityInput.value.trim();
    const areaPin = areaPinInput.value.trim();
    const address = addressInput.value.trim();
    const state = stateInput.value.trim();
    //const password = password.value.trim(); 

    //form regular pattern
    const formPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    //clearing previous error 
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    //checking empty fields
    if(fname === "") {
        showError(fnameInput, "First Name is required");
        
    }
    if(lname === "") {
        showError(lnameInput, "Last Name is required");
        
    }
    if(email === "") {
        showError(emailInput, "Email is required");
        
    }
    if(phone === "") {
        showError(phoneInput, "Phone Number is required");
        
    }
    if(date === "") {
        showError(Date, "Date of Birth is required");
        
    }
    if(gender === "") {
        showError(genderInput, "Gender is required");
        
    }
    if(city === "") {
        showError(cityInput, "City is required");
        
    }
    if(areaPin === "") {
        showError(areaPinInput, "Area PIN is required");
        
    }
    if(address === "") {
        showError(addressInput, "Address is required");
        
    }
    if(state === "") {
        showError(stateInput, "State is required");
        
    }
    if(password === "") {
        showError(password, "Password is required");
        
    }

    //checking for remaining errors

    const errorInput = document.querySelectorAll(".form-group .error");
    if(errorInput.length > 0) return;

    //submiting form

    form.submit();
    

}


// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
// Handling form submission event
form.addEventListener("submit", handleFormData);