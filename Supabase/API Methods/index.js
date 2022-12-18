if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://gnhjhbkavtvnvwzqgiru.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
    const { data, error } = await supabase.from("items").select("*");
    res.send(data);
});
app.post("/api/insert", async (req, res) => {
  const { data, error } = await supabase
    .from("items")
    .upsert({ name: req.body.name });
  res.send(data);
});
app.patch("/api/update", async (req, res) => {
    
    const { data, error } = await supabase
    .from('items')
    .update({ name: req.body.name })
    .eq('id', req.body.id)
    res.send(data);
});
app.delete("/api/delete", async (req, res) => {
    const { data, error } = await supabase
    .from('items')
    .delete()
    .eq('id', req.body.id)
    res.send(data);
});
app.listen(port);
