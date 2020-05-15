if ($('#subscribe-form').length) {
    $('#subscribe-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail-2.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-contact').style.display = 'block';
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-contact-error').style.display = 'block';
                        console.log("Fail");
                    }
                });
            }
        });
    });
}