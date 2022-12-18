if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const path = require("path");
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://gnhjhbkavtvnvwzqgiru.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.post("/", async (req, res) => {
  console.log(req.body);
  const { user, error } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password,
  })
  if(error){
    console.log(error)
  }
  console.log(user);
});

app.listen(port);
