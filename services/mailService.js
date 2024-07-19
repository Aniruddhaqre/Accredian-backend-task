const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendReferralEmail = (referrer, referee, email) => {

    const mailOptions = {
        from : process.env.GMAIL_USER,
        to : email,
        subject : "Referral Received",
        text : `Hello ${referee},\n\nYou have been referred by ${referrer}.\n\nBest regards,\nAccredian`
    }

    transporter.sendMail(mailOptions , (error , info) => {
        if(error){
            console.log('Error sending Mail :' ,error);
        }else{
            console.log("Email sent" , info.response)
        }
    })

}

module.exports = {sendReferralEmail};
