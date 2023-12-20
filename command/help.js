module.exports = ok = async function({reply, react}){
  const fs = require("fs");
global.tools.download("https://i.imgur.com/WL4XGO1.png", process.cwd()+"/cache/help.png")
  var msg = `Bot Prefix: ${global.setting.prefix}
•——[FEATURES]——•
  1. Automatically download music/video from YouTube.
  2. Automatically download video from Facebook.
  3. Automatically download Tiktok videos.
  
•——[COMMANDS]——•
  1. ai <question>`;
  react("🤖")
  return reply({body: msg, attachment: fs.createReadStream(process.cwd()+"/cache/help.png")})
}