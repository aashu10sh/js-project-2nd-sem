// const mailer = require("modemailer")
const dotenv = require("dotenv");
dotenv.config();
APP_EMAIL = process.env.APP_EMAIL;
APP_PASSWORD = process.env.APP_PASSWORD;
TO_EMAIL = "aashutosh.pudasaini@deerwalk.edu.np";

const nodemailer = require("nodemailer");

// transporter object, "mail sending configuration"
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: APP_EMAIL,
    pass: APP_PASSWORD,
  },
});

async function main(website) {
  const options = {
    from: '"Aashutosh Pudasaini" <nepalidude3@gmail.com>', // sender address
    to: TO_EMAIL, // list of receivers
    subject: "Website is Down | Quickly Solve", // Subject line
    // text: `Hello Mr ${row[0]}, This was sent from the templating engine!`, // plain text body
    html: `Hello, This is to let you know that, your website ${website} is down currently.`, // html body
  };
  const data = await sendMail(options);
  console.log(data);
  return data.messageId;
}

async function sendMail(options) {
  let info = await transporter.sendMail(options);
  return info;
}

module.exports = main;
