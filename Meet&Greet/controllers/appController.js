const { v4: uuidv4 } = require("uuid");

function getTestPage(req, res) {
  res.redirect(`/${uuidv4()}`);
}

function getRoomPage(req, res) {
  res.render("home",{ roomId: req.params.id });
}

module.exports = {
  getTestPage,
  getRoomPage
};
