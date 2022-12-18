const keys = require("../config/keys");
const needle = require("needle");
module.exports.getHome = (req, res) => {
  res.render("index");
};

module.exports.getWeather = (req, res) => {
  const city = req.query.city;
  const url = `${keys.API_URL}?q=${city}&${keys.API_KEY_NAME}=${keys.API_KEY}`;
  needle.get(url, (err, resp) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json(resp.body);
    }
  });
};
