var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

var mailOptions = {
    form: 'mehedi.cse181@gmail.com',
    to: 'mehedihassanshovospirit@gmail.com',
    subject: 'Sending email using node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});