//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZjR0xsaERoTUhtMFMyUUdlbXFpZTF1QWdxbHRucFFVdU9KSUhOSWhIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpZZExtazc4VUVKZ2tLd2ZRRmtJTHEzZ2FYRnM1d1hZMS81cExLdDBFdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQlZyWHFJUGpBZXdrZG5IZElGTmJWeEx3SzB1b1Z6SWVqY01lbjZaN0YwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UHFIckdwanJqUXNaTmErL3Z1NVFlc0k2TzZPYU9Nb2YrWFVKOWdKTTBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMcXJFdnVFRU9ScDlEVGFmc3A0Zm5PMFRibjdYWE5KcSs2RjdqZUIwRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFdUl6dm0vMW9SSXNoc0pSVUZtdk5VZExSOGJEMnQzeDRIc2dYU3RyM009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1B3Y3l5RW1DL3dFdUU3Y0NhVjdDQ004cThZSDBTTXZDSHpOM2l1alQyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYit4bWZsVHZXMERzdFdOTXRuT0EzYVozZzQxVDdEY0xCMlREaVdRSHBCTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijk1dEFQaUtYMERjRlIyc2hiUTEvbFkrWlorcjVHcVlvbFlBYmY5dE5wQUVzS05UemVOTi9Fa0JTSDFVSmJkT2dVd3RnMjlFSmhkVkJPeFIzQUhiU0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6Imo2OXBXcDkxb1N0aU9jdnJta1BydVhxWjE0bHlNRi9sWjFvM1VVcVEzTU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTQ0NjA1OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDJFQUQ2MzQyQTFFM0NFNTJCRjg2RTI4NDRBMUU2QkMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM0OTU2OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTQ0NjA1OTVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTExNjM3REYwRTc2MUZFOTU1MkNDN0U1MzQyNUM3OEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM0OTU2OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM0c5R2czZUlUeWVFYnM4SC05MmJUdyIsInBob25lSWQiOiI2YTgwNzkxNi0zODM3LTRkMGMtOGMxZC1hMzgwODRiMDk1NmIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmovdUpnUUdCWDFLUlQ5VSt4cGZvL3VJS1prPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJCZkZpMWo2bktjTVpuNHIrUFpaN2FpZExNcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJCUU5SNDlNWiIsIm1lIjp7ImlkIjoiOTQ3NTQ0NjA1OTU6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGFzaW5kdSBEIENoYW1hcmEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ002cXkrUUZFSzZQejdnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlorOUpzOGxlem9jWXdqUVBWaWZKWGNJWk8wTWY1N0NsbkkzU2dWN3FWbEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZEK1pZelFkSDJta0FkdGlBOEtvS0ZCWjJMY29RVDBjQWMwQWtDOFZ5QXJ5YjlYMXI4dFlTZjNiR1NZM0Vqa29JcS9nWGplODlaa0YrUmcxaDEwUUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6dkltd1BoQ09XdjdCa25xaGFQb1ZnbElGR21YTVh4TU5NL1JDbU5jWEhMNi83SEpJMVZpSVI4bUkvc0o1OWdOK3lZZEppSCtMUXB0RHFJaTZseVZBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU0NDYwNTk1OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldmdlNiUEpYczZIR01JMEQxWW55VjNDR1R0REgrZXdwWnlOMG9GZTZsWlMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkzNDk1NjMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSzlwIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
