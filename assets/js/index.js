// code fragment
$('#contact-form').on('submit', function(event) {
    event.preventDefault(); // prevent reload

    var formData = new FormData(this);
    formData.append('service_id', 'service_xide0ew');
    formData.append('template_id', 'contact_form');
    formData.append('user_id', 'user_cnAbhy18X5kfistTtUIFu');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        swal({
            title: "Correo enviado!",
            text: "Tu correo fue enviado correctamente!",
            icon: "success",
            button: "Continuar",
        });
        $('#exampleModal').modal('hide');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});