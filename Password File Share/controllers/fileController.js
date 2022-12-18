const File = require("../model/fileModel");
const bcrypt = require("bcrypt");


const getHome = (req, res) => {
  res.render("index");
};
const uploadFile = (req, res, next) => {
  const fileData = {
    path: req.file.path,
    name: req.file.originalname,
  };
  if (req.body.password != "") {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      fileData.password = hash;
      File.create(fileData).then((file) => {
        res.redirect(`/upload/${file.id}`);
      });
    });
  } else {
    File.create(fileData).then((file) => {
      res.redirect(`/upload/${file.id}`);
    });
  }
};
const getDownloadPage = (req, res) => {
  res.render("password", {
    fileLink: `${req.protocol}://${req.get("host")}/upload/${req.params.id}`,
    id: req.params.id,
    passwordError: "",
  });
};
const downloadFile = (req, res) => {
  File.findOne({ _id: req.params.id }).then((file) => {
    if (file.password !== undefined) {
      bcrypt.compare(req.body.password, file.password).then((match) => {
        if (match) {
          res.download(file.path, file.name);
        } else {
          res.render("password", {
            fileLink: `${req.protocol}://${req.get("host")}/upload/${
              req.params.id
            }`,
            id: req.params.id,
            passwordError: "Wrong Password",
          });
        }
      });
    } else if (file.password == undefined) {
      res.download(file.path, file.name);
    }
  });
};

module.exports = {
  getHome,
  uploadFile,
  getDownloadPage,
  downloadFile
}