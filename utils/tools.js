module.exports.download = async function (url, path){
const axios = require("axios");
const fs = require("fs");
  
const getfile = (await axios.get(url, {
   responseType: "arraybuffer"
 })).data;
  fs.writeFileSync(path, Buffer.from(getfile, "utf-8"));
}
