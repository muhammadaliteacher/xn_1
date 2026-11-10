const nodemailer = require("nodemailer")

const emailSender = async (email, code) => {
  try {    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "muhammadalishuhratjonov50@gmail.com",
        pass: process.env.APP_KEY
      },
    })

   const info = await transporter.sendMail({
    from: "muhammadalishuhratjonov50@gmail.com", // sender address
    to: email, // list of recipients
    subject: "Hello", // subject line
    text: "matn", // plain text body
    html: `<b style="font-size: 20px; color: blue;">${code}</b>`, // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }catch(error) {
    console.log(error.message);
  }
}

module.exports = emailSender