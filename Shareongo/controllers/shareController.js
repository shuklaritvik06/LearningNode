const fs = require("fs");
const nodeMailer = require("nodemailer");

function getHomePage(req, res) {
  res.render("home");
}

function uploadFile(req, res) {
  const fileName = req.headers["file-name"];
  if(!fs.existsSync(__dirname + "/uploads/")){
    fs.mkdirSync(__dirname + "/uploads/");
  }else{
    req.on("data",(chunk)=>{
      fs.appendFileSync(__dirname + "/uploads/" + fileName,chunk);
    }); 
  }
  res.end();
}

function sendEmail(req, res) {
  const name = req.body.senderName;
  const email = req.body.senderMail;
  const url = req.body.fileUrl;
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your Shareongo File",
    text: `Hi ${name},\n\nYou have received a file from Shareongo.\n\nClick on the link below to download the file.\n\n${url}\n\nRegards,\nShareongo`,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
  res.json({
    message: "Email sent",
  });
}

function getFile(req, res) {
  const file = fs.readFileSync(__dirname + "/uploads/" + req.params.fileName);
  res.end(file);
}

module.exports = {
  getHomePage,
  uploadFile,
  sendEmail,
  getFile,
};
