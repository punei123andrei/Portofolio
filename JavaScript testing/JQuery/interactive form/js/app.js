//Hints are shown even when form is valid
//Hide and show them at apropriate times

var $password =  $("#password");
var $confirmPassword = $("#confirm_password");

function arePasswordsMatching(){
 return $password.val() === $confirmPassword.val();
}

function isPasswordValid(){
  return $password.val().length > 8;
}

function canSubmit(){
  return isPasswordValid() && arePasswordsMatching();
}

//Hide  spans Hints

$("form span").hide();

function passwordEvent(){

//Find out if the password is valid

if(isPasswordValid()){

  //When password is > 8  we want to hide hint
   $password.next().hide();

} else {
   //Show hint
      $password.next().show();
    }

};



function confirmPasswordEvent(){

   //Find out if password and confirmation match
if(arePasswordsMatching()){

   //Hide hint
   $confirmPassword.next().hide();

} else {

    //Show hint
      $confirmPassword.next().show();
    }
};

function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
    

}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//When event happens on confirmation
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);


enableSubmitEvent();
  
