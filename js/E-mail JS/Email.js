      function sendMail(params) {
            var tempParams ={
                name :document.getElementById("name").value,
                email :document.getElementById("email").value,
                code :document.getElementById("code").value,
                // phone :document.getElementById("phone").value,
                message :document.getElementById("message").value,
                
            };
            emailjs.send("service_9hk7yhi","template_yod2obb",tempParams)
            .then(function(res){
                console.log("success",res.status);

            })
           

        }

        // const btn = document.getElementById('form-submit');

        //     document.getElementById('contact-form')
        //     .addEventListener('submit', function(event) {
        //     event.preventDefault();

        //     btn.value = 'Sending...';

        //     const serviceID = 'service_xv8vfgc';
        //     const templateID = 'template_ewbl1eh';

        //     emailjs.sendForm('service_xv8vfgc', 'template_ewbl1eh', this)
        //         .then(() => {
        //         btn.value = 'sendMail';
        //         alert('Sent!');
        //         }, (err) => {
        //         btn.value = 'sendMail';
        //         alert(JSON.stringify(err));
        //         });
        //     });