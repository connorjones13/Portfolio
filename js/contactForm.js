
function submitForm() {
    var email = $('#contact-email').val();
    var subject = $('#email-subject').val();
    var message = $('#email-body').val();

    console.log(email);

    var form = document.getElementsByName('contact-form')[0];

    var atSymbLocation = email.indexOf('@');
    var periodLocation = email.indexOf('.');

    if(atSymbLocation === -1 || periodLocation === -1 || periodLocation < atSymbLocation) {
        $('#alertDiv').append('<div class="alert alert-danger" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button>Please enter a valid email address.</div>');
        return false;
    }
    else if(subject.length < 5){
        $('#alertDiv').append('<div class="alert alert-danger" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button>Please enter a valid subject.</div>');
        return false;
    }
    else if(message === ''){
        $('#alertDiv').append('<div class="alert alert-danger" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button>You don\'t really want to send me a blank email, do you?</div>');
        return false;
    }
    else {
        $('#alertDiv').append('<div class="alert alert-success" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">&times;</span></button>Your email has been sent!</div>');
    }

    form.submit();
    //todo: send email using mail client & authenticate

    //todo: popup window confirming email was sent

    form.reset(); // clears form





    return false;
}
