const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
    extname: ".hbs",
    helpers: {
      calculation: function (value) {
        return value + 100;
      },
      list: function (value, options) {
         return "<h2>" + options.fn({value: value[0]}) + "</h2"; 
      }
    },
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    style: "style.css",
    message: "Welcome to my website",
    displayName: false,
    names: ["John", "Jane", "Joe"],
    obj: {
      name: "John",
      age: 20,
    },
    list: [
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
    ],
    list2: [{ items: ["item1", "item2"] }],
  });
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
