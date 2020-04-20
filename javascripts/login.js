function field_focus(field, email) {
    if (field.value == email) {
        field.value = '';
    }
}

function field_blur(field, email) {
    if (field.value == '') {
        field.value = email;
    }
}

// //Fade in dashboard box
// $(document).ready(function(){
//     $('.box').hide().fadeIn(1000);
//     });

//Stop click event
// $('a').click(function(event){
// event.preventDefault();

//     var email=document.getElementsByName(email).value;
//     var pass=document.getElementsByName(pass).value;
//     console.log(email+' '+pass);
// });

//     const signin=document.getElementsByClassName(btn);

function signinValidation() {
    var email1 = document.getElementsByName(email).value;
    var pass1 = document.getElementsByName(pass).value;
    if (email1 == "fero@gmail.com" && pass1 == "pass") {
        alert("Valid user");
        return;
    } else {
        alert("Invalid User " + email + " " + pass);
        document.getElementsByName(email).disbled = true;
        document.getElementsByName(pass).disbled = true;
        return false;
    }
}

// $('form').submit(function(event){
//   event.preventDefault();
// });