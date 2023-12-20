const a = require("express")();
a.get("/", async function (req, res){
  res.send("Bot is running.");
})
const port = Math.floor(Math.random() * 65535) + 1;
a.listen(
  port,
  () => console.log("Server is running on port "+ port)
)
console.log("Bot downloader is running.")
console.log("Contact me here: https://facebook.com/johsg101")