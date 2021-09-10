const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS,
    },
});

const sendWelcomeEmail = (email, name) => {
    const mailOptions = {
        from: `Task Manager Application ${process.env.NODEMAILER_EMAIL}`,
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    };

    transporter.sendMail(mailOptions);
};

const sendCancellationEmail = (email, name) => {
    const mailOptions = {
        from: `Task Manager Application ${process.env.NODEMAILER_EMAIL}`,
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    };

    transporter.sendMail(mailOptions);
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
};
