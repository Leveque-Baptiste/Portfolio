(function() {
    emailjs.init("9BL6run3fanoEz4wo");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_e4c00d8'; 
    const templateID = 'template_cbuxle8';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            popup("Email envoyé avec succès à Baptiste.")
        }, (err) => {
            alert('L\'envoi de l\'email a échoué!\r\n Response:\n ' + JSON.stringify(err));
        });

    document.getElementById('contact-form').reset();

});