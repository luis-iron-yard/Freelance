$(document).ready(function() {
    $("#contactForm").submit(function(e){
            // get values from FORM
            var name = $("input#name")
            var email = $("input#email")
            var phone = $("input#phone")
            var message = $("textarea#message")
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if(name.val() == "" || email.val() == "" || message.val() == "") {
                $('.submit-fail').fadeToggle(400);
                return false;
                }
                else {
            $.ajax({
                url: "https://formspree.io/rdzalb+formspree@gmail.com",
                method: "POST",
                data:  $("#contactForm").serialize(),
                dataType: "json",
              }),
                e.preventDefault();
                $(this).get(0).reset();
                $('.submit-success').fadeToggle(400);
              }
      }),
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
