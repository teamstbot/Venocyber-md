//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFiVUVWc2hKYnZzOVJZK0MydWtoZnMvZFVvSmQwU1NPT05wWTdqZ1gwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlo4UktqOHNjWldLTE1URUc1WTZjQTJySUFSbEhqUmtzWGl5dTlhOFFSMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SU4rOGtvOUFaZHFNbXpaejJ3Zy9oOVlpQW9NTVdHcEdhRmFSWStON1VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cmZyM011ekNPS282WW52RVh4TTlVaFJLcnp6bEpSYTFQaXJwRVVUajM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJdktSUUVIMGN2djNJTllsOU43RnA1S0JwdEdMbko0VGFOcHpVSWI0R2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFWVDkwTWp5Q2Z4MHZMSitwRUlRcVhIVG5JUUdvcHdVYTgvb0k4Uy9wek09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09XUmROSTlyanIzWG1acGRRZ0U2d21TL01DaUN3cDA2clZSQXA1LzFIdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjJTVDZXVVR1SkVSbjhZR1pHWXRxTTMyRDVpakNiT0QxeHpKenpCM3JtWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBrdmoyN0dQZWZESm83bzlpeDVnaHRpV0svVHFrMHpHcEdtbkF5T09uejVaOGV1Q3drUnVQVlpmS2pkanJYU0tsbVkxTEdvSUNKc1duaGVZUU1XRWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MiwiYWR2U2VjcmV0S2V5IjoiZGw2N21iOFFkZUg2eUdnMGRzWDdFaUFteXo5SkMzUGpaNDF3dTZBb3FTaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS0FKM3dUNUlTMi0waHl0a21JdHR5USIsInBob25lSWQiOiI5YjBmNWI4OS00ZjczLTQ2MGItOTJiYy1lMDhhYzMxM2Y1MjciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVJuRGNybDdDV252TUduQTMvK3hKSEVFWk5jPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFkWGxpSWpsRTdiYktxRnpsaVdFRmpEMm5PRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMTDU4UjJQMSIsIm1lIjp7ImlkIjoiOTIzMjM5OTU2NDc2OjM5QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOR0lpdDRDRUxYaHI3UUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzWWpHTmN4YVlSWTUxR0RKQzdyK2ExL1R4UzQ5R2IxeGtEcW1nUFJYRkQ0PSIsImFjY291bnRTaWduYXR1cmUiOiJtUUpaQnoxSmlzV2h2ZEEvcTkzYUgyWGVobVlOdkxua0lOWGx2WC9Eby9wRmt5dUZONmJCZjhtZUMzanlhQ3dzaVBtSHhFRmNsOG1TTGFxR3RIZ3hDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibW9uMytxSllSMHlvSE8vVTRvNTdVTFZ5emRhT00vY24xY1IzLzNodVQwK2srU1NMaDJFMDc3a01ab1Y5MS9wb3hpbkVVTGRSVmlNaDl6ZURHOU1JZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMzk5NTY0NzY6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDJJeGpYTVdtRVdPZFJneVF1Ni9tdGYwOFV1UFJtOWNaQTZwb0QwVnhRKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQ0NzE2OX0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇲‌𝐮𝐝𝐚𝐬𝐢𝐫  ☻︎ 🇸𝐩𝐨𝐫𝐭𝐬™⁹⁵",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
