var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   port: 25,
   ssl: false,
   tls: true,
  auth: {

    user: 'imayeb@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'imayeb@gmail.com',
  to: 'imayeb@gmail.com',
  subject: 'My First Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});