$("#button").click(formPressed);

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function formPressed(){

  const inputEmailValue = $("#email").val();

  if(validateEmail(inputEmailValue)){
    $(".email-error").css("display", "none");
    $("#email").css("border-color", "hsl(223, 100%, 88%)");
  } else{
    $(".email-error").css("display", "block");
    $("#email").css("border-color", "red");
  }

}
