const a = require("axios");
module.exports = ok = async function({reply, args, react}){
if (!args[0]){ 
  react("❌");
  return reply("Missing input!");
             }
  react("🔍");
  const res = await a.get("https://free-api.ainz-sama101.repl.co/others/gpt?prompt="+args.join(" "));
   reply(res.data.result)
  return react("✅")
}