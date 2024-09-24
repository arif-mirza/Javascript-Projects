var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messegeError = document.getElementById("messege-error");
var submitError = document.getElementById("submit-error");

function ValiditeName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required.';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
    

};

function ValiditePhone(){
    var phone = document.getElementById('contact-phone').value;


    if(phone.length == 0){
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if(phone.lenght !==10){
        phoneError.innerHTML = "write valid phone No.";
    }
    if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'phone no. shuld be numbers only';
    return false;
    }

    phoneError.innerHTML = 'valid';
    return true;
};

// email

function ValiditeEmail(){
    var email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-za-z]\._\-[0-9]*[@][A-Zz-z]*[\.][a-z][2.4]$/)){
        emailError.innerHTML = "write valid email";
        return false;
    }

    emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function ValiditeMessege(){
    var messege = document.getElementById("contact-messege").value;

    var required = 20;
    var left = required - messege.length;

    if(left > 0){
        messegeError.innerHTML = left + 'more character required';
        return false;
    }
    messegeError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;


}

function validateForm(){
    if(!ValiditeName() || !ValiditePhone() || !ValiditeEmail() || !ValiditeMessege()){
        submitError.innerHTML = 'Please fix this error to submit';
        return false;
    }
}