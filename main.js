require("./index");
const l = require("node-ainzfb-new");
const getFBInfo = require("@xaviabot/fb-downloader");
const ytdl = require('ytdl-core');
const axios = require("axios"),
  fs = require("fs"),
  fbvid = "./cache/fbvid.mp4",
  pathaudio = "./cache/audio.mp3",
  tiktok = "./cache/tiktok.mp4",
  tiktoks = "tiktok.mp3",
  path = "./cache/video.mp4";
const config = JSON.parse(fs.readFileSync("./setting.json"));
const link = "\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0061\u0070\u0069\u002e\u0074\u0069\u006b\u006c\u0079\u0064\u006f\u0077\u006e\u002e\u006c\u0069\u006e\u006b\u002f\u0061\u0070\u0069\u002f\u0064\u006f\u0077\u006e\u006c\u006f\u0061\u0064";
let option = config.setOpt;
let prefix = config.PREFIX;
global.setting = new Object({
  prefix: prefix,
  api: config.API
})
const tools = require("./utils/tools");
global.tools = new Object({
  download: tools.download
})

// auto restart
setInterval(() => {
  process.exit();
}, 30 * 60 * 1000);
//Start.

l({
  appState: JSON.parse(fs.readFileSync('./kira.json'))
}, (err, api) => {
  if (err) return console.log(err)
  
api.setOptions(option)
  
api.listenMqtt(async function(err, event) {

  //🍜
process.on("unhandledRejection", (error) => console.error(error));

      if (err) console.log(err)
      if (event.body != null){
        let txt = event.body;
        const _0x3b8c3b=_0x987d;(function(_0x691628,_0x51e173){const _0x3a0c95=_0x987d,_0x1a789a=_0x691628();while(!![]){try{const _0x251fc8=parseInt(_0x3a0c95(0xa5))/0x1+-parseInt(_0x3a0c95(0xa3))/0x2*(-parseInt(_0x3a0c95(0xa9))/0x3)+-parseInt(_0x3a0c95(0xaa))/0x4+-parseInt(_0x3a0c95(0xa4))/0x5*(parseInt(_0x3a0c95(0xab))/0x6)+parseInt(_0x3a0c95(0xa2))/0x7+parseInt(_0x3a0c95(0xa7))/0x8*(parseInt(_0x3a0c95(0xa1))/0x9)+-parseInt(_0x3a0c95(0xa6))/0xa*(parseInt(_0x3a0c95(0xac))/0xb);if(_0x251fc8===_0x51e173)break;else _0x1a789a['push'](_0x1a789a['shift']());}catch(_0x580aab){_0x1a789a['push'](_0x1a789a['shift']());}}}(_0xd886,0x69a6d));const react=async function react(_0x154065){const _0x523d0c=_0x987d;api['setMessageReaction'](_0x154065,event[_0x523d0c(0x9f)],_0x3f86db=>{},!![]);},reply=async function replyy(_0x25ea4e){const _0x5d0eb7=_0x987d;api['sendMessage'](_0x25ea4e,event[_0x5d0eb7(0xa8)],event[_0x5d0eb7(0x9f)]);},text=txt['split']('\x20');function _0x987d(_0x22b062,_0x32e9ab){const _0xd88608=_0xd886();return _0x987d=function(_0x987d91,_0x1f28a8){_0x987d91=_0x987d91-0x9f;let _0x53dc9c=_0xd88608[_0x987d91];return _0x53dc9c;},_0x987d(_0x22b062,_0x32e9ab);}text[_0x3b8c3b(0xae)]();function _0xd886(){const _0x278f6c=['body','539379iwpWuE','3594409krXadI','192rQHJsV','5385WIJatB','551238iCiEvZ','2850170tNRQZy','40QHDLky','threadID','22521FaDHnJ','263876icXTYE','4074qzCRwD','33EFvqqj','split','shift','messageID'];_0xd886=function(){return _0x278f6c;};return _0xd886();}const com=event[_0x3b8c3b(0xa0)][_0x3b8c3b(0xad)]('\x20'),comm=com[_0x3b8c3b(0xae)]()['toLowerCase']();let obj={'args':text,'api':api,'event':event,'reply':reply,'react':react};
        
//example ng module exports

if (comm == "ai"){
  require("./command/ai.js")(obj)
        }
if (comm == prefix+"help"){
  require("./command/help.js")(obj)
        }
/*if (comm == "dl"){
  require("./command/dl.js")(obj)
}*/
//end
        if (txt == "prefix" || txt == "Prefix"){
return reply("Bot prefix: "+prefix)
        }
        if(txt == config.BOTNAME || txt == prefix || txt.startsWith("bot")){
          reply("Hi, I'm a Bot and my name is Ainz. I can download Facebook videos, Tiktok, and YouTube.")
        }
        
    //FEATURE STARTS HERE.

        //REGEX
const regexyt = /(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/(watch\?v=|v\/)?[a-zA-Z0-9_-]{11}/
const matchh = txt.match(regexyt)
const urlyt = matchh ? matchh[0] : null;
const regexfb = /https:\/\/www\.facebook\.com\/\S+/;
const matches = txt.match(regexfb);
const url = matches ? matches[0] : null;
const regexTt = /https:\/\/vt\.tiktok\.com\/[A-Za-z0-9]+\/?/;
const regexTt1 = /https:\/\/www\.tiktok\.com\//;
const matchTt = txt.match(regexTt);
const matchTt1 = txt.match(regexTt);
        
const matchTt2 = txt.match(regexTt1);
const urlTt = matchTt ? matchTt[0] : null;
        const urlTt1 = matchTt1 ? matchTt1[0] : null;
  const urlTt2 = matchTt2 ? matchTt2[0] : null;
function _0x1de4(){const _0x212ec1=['writeFileSync','244911fDNJFt','sendMessage','385RzQBti','18636WanwCC','data','messageID','5912888BnUVfo','4SFLyLE','3047416YrdEXv','.png','createReadStream','images','push','utf-8','9xYoVNs','4406010bRczAZ','includes','arraybuffer','length','threadID','https://www.tiktok.com/','5939860lioUAm','get','374873PNxUXm'];_0x1de4=function(){return _0x212ec1;};return _0x1de4();}function _0x2667(_0x14f87f,_0x50a60d){const _0x1de44e=_0x1de4();return _0x2667=function(_0x26676e,_0x11b5cf){_0x26676e=_0x26676e-0x9a;let _0x3374fc=_0x1de44e[_0x26676e];return _0x3374fc;},_0x2667(_0x14f87f,_0x50a60d);}const _0x3f994a=_0x2667;(function(_0x2a9b8e,_0x1652f0){const _0x3906f0=_0x2667,_0x4b3dfc=_0x2a9b8e();while(!![]){try{const _0x132103=parseInt(_0x3906f0(0xad))/0x1+parseInt(_0x3906f0(0x9d))/0x2*(-parseInt(_0x3906f0(0xaf))/0x3)+-parseInt(_0x3906f0(0x9c))/0x4+parseInt(_0x3906f0(0xa5))/0x5+-parseInt(_0x3906f0(0xb2))/0x6*(-parseInt(_0x3906f0(0xb1))/0x7)+parseInt(_0x3906f0(0x9e))/0x8*(parseInt(_0x3906f0(0xa4))/0x9)+parseInt(_0x3906f0(0xab))/0xa;if(_0x132103===_0x1652f0)break;else _0x4b3dfc['push'](_0x4b3dfc['shift']());}catch(_0x46726f){_0x4b3dfc['push'](_0x4b3dfc['shift']());}}}(_0x1de4,0xb9a02));if(matchTt1||txt[_0x3f994a(0xa6)](_0x3f994a(0xaa))||matchTt2){api['setMessageReaction']('⬇️',event['messageID'],_0x3c12f0=>{},!![]);try{const ttt=await axios[_0x3f994a(0xac)](link,{'params':{'url':urlTt1||encodeURI(urlTt2)}});var img=[];for(let i=0x0;i<ttt['data'][_0x3f994a(0xa1)][_0x3f994a(0xa8)];i++){let imgPath=__dirname+('/cache/'+i+_0x3f994a(0x9f)),getimg=(await axios[_0x3f994a(0xac)](ttt[_0x3f994a(0x9a)][_0x3f994a(0xa1)][i]['url'],{'responseType':_0x3f994a(0xa7)}))[_0x3f994a(0x9a)];fs[_0x3f994a(0xae)](imgPath,Buffer['from'](getimg,_0x3f994a(0xa3))),img[_0x3f994a(0xa2)](fs[_0x3f994a(0xa0)](imgPath));}api[_0x3f994a(0xb0)]({'attachment':img},event[_0x3f994a(0xa9)],event[_0x3f994a(0x9b)]);}catch(_0x31fe37){console['log'](_0x31fe37['message']);}}


        const _0x4a4996=_0x59a4;function _0x506a(){const _0x38000f=['Title:\x20','22799RTsZwQ','images','get','241943YEBkAr','video','5dlLerA','includes','title','noWatermark','threadID','createReadStream','950766vslban','log','from','writeFileSync','128456hjIprs','https://www.tiktok.com/','426bukZlX','1454382MNMYQL','\x0a\x0aLikes:\x20','messageID','692324xvzBCt','likeCount','sendMessage','utf-8','unlinkSync','data','82LpthHE'];_0x506a=function(){return _0x38000f;};return _0x506a();}function _0x59a4(_0x1921bd,_0x5b2fe8){const _0x506ae4=_0x506a();return _0x59a4=function(_0x59a436,_0x596694){_0x59a436=_0x59a436-0x15f;let _0x10b859=_0x506ae4[_0x59a436];return _0x10b859;},_0x59a4(_0x1921bd,_0x5b2fe8);}(function(_0x30c810,_0x559358){const _0x30e49c=_0x59a4,_0x213c8e=_0x30c810();while(!![]){try{const _0x1022f3=parseInt(_0x30e49c(0x175))/0x1+-parseInt(_0x30e49c(0x170))/0x2+-parseInt(_0x30e49c(0x160))/0x3+parseInt(_0x30e49c(0x16a))/0x4*(parseInt(_0x30e49c(0x177))/0x5)+-parseInt(_0x30e49c(0x166))/0x6*(-parseInt(_0x30e49c(0x172))/0x7)+parseInt(_0x30e49c(0x164))/0x8+-parseInt(_0x30e49c(0x167))/0x9;if(_0x1022f3===_0x559358)break;else _0x213c8e['push'](_0x213c8e['shift']());}catch(_0x2cdcb7){_0x213c8e['push'](_0x213c8e['shift']());}}}(_0x506a,0x2cdd7));if(matchTt1||txt[_0x4a4996(0x178)](_0x4a4996(0x165))||matchTt2){api['setMessageReaction']('⬇️',event['messageID'],_0xc94ccb=>{},!![]);try{const tt=await axios[_0x4a4996(0x174)](link,{'params':{'url':urlTt||encodeURI(urlTt2)}});if(!tt[_0x4a4996(0x16f)][_0x4a4996(0x173)]){const title=tt['data'][_0x4a4996(0x179)],ca=tt[_0x4a4996(0x16f)]['created_at'],lc=tt[_0x4a4996(0x16f)]['stats'][_0x4a4996(0x16b)];let vid=encodeURI(tt[_0x4a4996(0x16f)][_0x4a4996(0x176)][_0x4a4996(0x17a)]);const tvid=(await axios['get'](vid,{'responseType':'arraybuffer'}))[_0x4a4996(0x16f)];fs[_0x4a4996(0x163)](tiktok,Buffer[_0x4a4996(0x162)](tvid,_0x4a4996(0x16d))),api[_0x4a4996(0x16c)]({'attachment':fs[_0x4a4996(0x15f)](tiktok),'body':_0x4a4996(0x171)+title+'\x0a\x0a\x20\x20\x0a\x0aCreated\x20at:\x20'+ca+_0x4a4996(0x168)+lc},event[_0x4a4996(0x17b)],()=>fs[_0x4a4996(0x16e)](tiktok),event[_0x4a4996(0x169)]);}}catch(_0x1b84de){console[_0x4a4996(0x161)](_0x1b84de['message']);}}
      
//FACEBOOK DOWNLOADER
if (matches){
const results = await getFBInfo(url);
  let vid = (await axios.get(encodeURI(results.sd),{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(fbvid, Buffer.from(vid, "utf-8"));
  return api.sendMessage({attachment: fs.createReadStream(fbvid)}, event.threadID, () => fs.unlinkSync(fbvid), event.messageID)
}
//YOUTUBE AUTO DOWBLOAD (mp3)
        function _0x2e4d(_0x1b70eb,_0x5566d9){const _0x20a9e6=_0x20a9();return _0x2e4d=function(_0x2e4da0,_0x47c8bb){_0x2e4da0=_0x2e4da0-0x13b;let _0xc52c3b=_0x20a9e6[_0x2e4da0];return _0xc52c3b;},_0x2e4d(_0x1b70eb,_0x5566d9);}const _0x165ebb=_0x2e4d;(function(_0x21c856,_0x2a4396){const _0x23b576=_0x2e4d,_0x493ea3=_0x21c856();while(!![]){try{const _0xf5d1c1=parseInt(_0x23b576(0x144))/0x1+parseInt(_0x23b576(0x148))/0x2*(parseInt(_0x23b576(0x13f))/0x3)+parseInt(_0x23b576(0x14a))/0x4+parseInt(_0x23b576(0x141))/0x5+-parseInt(_0x23b576(0x13e))/0x6*(-parseInt(_0x23b576(0x149))/0x7)+parseInt(_0x23b576(0x14b))/0x8*(-parseInt(_0x23b576(0x13c))/0x9)+parseInt(_0x23b576(0x146))/0xa*(-parseInt(_0x23b576(0x13d))/0xb);if(_0xf5d1c1===_0x2a4396)break;else _0x493ea3['push'](_0x493ea3['shift']());}catch(_0xbf68ad){_0x493ea3['push'](_0x493ea3['shift']());}}}(_0x20a9,0x2b4fb));if(!matchh)return;const streams=ytdl(urlyt,{'filter':'audioonly'});streams['pipe'](fs[_0x165ebb(0x145)](pathaudio))['on'](_0x165ebb(0x143),()=>{const _0x3732bc=_0x165ebb;api[_0x3732bc(0x14c)]({'attachment':fs[_0x3732bc(0x142)](pathaudio)},event[_0x3732bc(0x147)],()=>fs[_0x3732bc(0x13b)](pathaudio),event[_0x3732bc(0x140)]);});function _0x20a9(){const _0x3f2b12=['32TYmckn','sendMessage','unlinkSync','101349sBthlL','33lysMXz','1899822PjvQLi','644019oZZpLN','messageID','143310baFsFY','createReadStream','finish','109528FVosyr','createWriteStream','2608600ZHwSck','threadID','2gmrWJc','7wKjzmu','1342108sDRDcy'];_0x20a9=function(){return _0x3f2b12;};return _0x20a9();}

//YOUTUBE AUTO DOWNLOAD (mp4)
  const _0x216dac=_0x6c46;(function(_0x2ea9f8,_0x4a885c){const _0x17f3ac=_0x6c46,_0x1ecacc=_0x2ea9f8();while(!![]){try{const _0x1ed579=-parseInt(_0x17f3ac(0x1cc))/0x1*(parseInt(_0x17f3ac(0x1cd))/0x2)+parseInt(_0x17f3ac(0x1c6))/0x3*(parseInt(_0x17f3ac(0x1bc))/0x4)+-parseInt(_0x17f3ac(0x1bd))/0x5+parseInt(_0x17f3ac(0x1be))/0x6*(-parseInt(_0x17f3ac(0x1ce))/0x7)+-parseInt(_0x17f3ac(0x1bf))/0x8+-parseInt(_0x17f3ac(0x1c3))/0x9*(parseInt(_0x17f3ac(0x1c5))/0xa)+-parseInt(_0x17f3ac(0x1c2))/0xb*(-parseInt(_0x17f3ac(0x1bb))/0xc);if(_0x1ed579===_0x4a885c)break;else _0x1ecacc['push'](_0x1ecacc['shift']());}catch(_0x237341){_0x1ecacc['push'](_0x1ecacc['shift']());}}}(_0x322b,0xad672));if(!matchh)return;const stream=ytdl(urlyt,{'filter':_0x216dac(0x1c9),'quality':_0x216dac(0x1c8),'format':_0x216dac(0x1c7)});function _0x6c46(_0x956a93,_0x3d2527){const _0x322bc3=_0x322b();return _0x6c46=function(_0x6c4658,_0x541dff){_0x6c4658=_0x6c4658-0x1bb;let _0xfb1c41=_0x322bc3[_0x6c4658];return _0xfb1c41;},_0x6c46(_0x956a93,_0x3d2527);}function _0x322b(){const _0x494dde=['createWriteStream','finish','66514327bSeZfu','3685122pFoRqR','unlinkSync','30RdVtxo','3RuqLMS','mp4','highestvideo','audioandvideo','sendMessage','createReadStream','1990HspRio','850BhqfqG','1449sVNWgC','12hXzZkQ','969676UHVOhr','5610545ZitMMY','31830yKSVba','10276400LqoEab'];_0x322b=function(){return _0x494dde;};return _0x322b();}stream['pipe'](fs[_0x216dac(0x1c0)](path))['on'](_0x216dac(0x1c1),()=>{const _0xa55905=_0x216dac;api[_0xa55905(0x1ca)]({'attachment':fs[_0xa55905(0x1cb)](path)},event['threadID'],()=>fs[_0xa55905(0x1c4)](path),event['messageID']);});
//END

      }
  //DITO PWEDE NA ISINGIT JOIN NOTI OR LEAVE NOTI
  
  const botID = api.getCurrentUserID();

  //subscribe (joinnoti)
  if (event.logMessageType == "log:subscribe"){
    let {threadName, participantIDs} = await api.getThreadInfo(event.threadID);
    if (event.logMessageData.addedParticipants.some(ok => ok.userFbId == botID)){
api.sendMessage("Hi I'm Ainz bot.\nThanks for adding me to this group.\nYou can just send the link to this group and I can automatically download it.", event.threadID)
      return api.changeNickname(`${config.BOTNAME} • [ ${prefix} ] 🤖`, event.threadID, botID);
    }
    else {
      try {
let addedParticipants1 = event.logMessageData.addedParticipants;
                    for (let newParticipant of addedParticipants1) {
     let userID = newParticipant.userFbId
         const name = (await api.getUserInfoV2(userID)).name
let paths = __dirname+"/cache/welcome.png";
if (userID !== api.getCurrentUserID()) {
                                
let avt = ["https://i.imgur.com/WL4XGO1.png", "https://i.imgur.com/6h8kc9s.png", "https://i.imgur.com/k15A102.png", "https://i.imgur.com/AaDPx0e.png"]
   var avt1 = avt[Math.floor(Math.random() * avt.length)];
        let im = (
    await axios.get(`https://free-api.ainz-sama101.repl.co/canvas/welcome?uid=${userID}&name=${name}&bg=${avt1}&namegc=${threadName || "This Group"}&member=${participantIDs.length}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(paths, Buffer.from(im, "utf-8"));
  return api.sendMessage({ body: `Hello ${name} welcome to ${threadName || "this Group"}\nYou're the ${participantIDs.length}th member on this group, enjoy!`, attachment: fs.createReadStream(paths)},event.threadID, () => fs.unlinkSync(paths))  
}
                        
                    }
                } catch (err) {
                     console.log("ERROR: " + err.message);
                       }
    }
  }
  //end ng joinnoti

}
              )
})
//SIMPLE BOT MADE BY DEKU (JOSH)
//YOU CAN MAKE THIS A REFERENCE OR USE THIS TEMPLATE TO MAKE A FACEBOOK BOT.
/*CONTACT ME HERE: http://facebook.com/joshg101*/
