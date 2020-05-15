// Format phone number input
var cleave = new Cleave('#phone', {
    numericOnly: true,
    blocks: [0, 3, 3, 4],
    delimiters: ['(', ') ', '-']
});

if ($('#reservations-form').length) {
    $('#reservations-form').each(function(){
        $(this).validate({
            errorClass: 'error wobble-error',
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"./includes/mail.php",
                    data: $(form).serialize(),
                    success: function() {
                        document.querySelector('.alert-reservation').style.display = 'block';
                        console.log("Success");
                    },

                    error: function(){
                        document.querySelector('.alert-reservation-error').style.display = 'block';
                        console.log("Fail");
                    }
                });
            }
        });
    });
}