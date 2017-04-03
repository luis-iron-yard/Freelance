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
                url: "https://formspree.io/rdzalb@gmail.com",
                type: "POST",
                headers : {
                    Accept : 'application/json'
                      },
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message

                },
                cache: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');

});
