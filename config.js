const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="edisonsarpong1@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "0553010638" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0553010638";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_56_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDM0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRPTXhaWWpsWWNETDdjNFN3Q0s4a3kxZU1ZdlBGanlsNDdhZ0ZWalJmN009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjMzNTUzMDEwNjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNTY0RjA5RUREQjZGMTY2QjgyNTYwRjIwOUEyNUUwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY5Mjk4MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzM1NTMwMTA2MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDMzhGMjk0RDQ4MTY2RUUwQUNGMDFDMkY2MzgwMTI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjkyOTgxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEMWRucnMwdlFnYWxiWFNPYmt4UUJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiZDNjMTdmLThiM2EtNDc2MS1hNjNhLWE5N2NlYjUyNzBhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDE2NCxcbiAgICAgIDExLFxuICAgICAgOTksXG4gICAgICAxNDgsXG4gICAgICAxMjgsXG4gICAgICA2MSxcbiAgICAgIDExOCxcbiAgICAgIDMxLFxuICAgICAgMTQ3LFxuICAgICAgMjA1LFxuICAgICAgMTAyLFxuICAgICAgMTUwLFxuICAgICAgMTYsXG4gICAgICA4MyxcbiAgICAgIDE0MixcbiAgICAgIDIzNSxcbiAgICAgIDE3MCxcbiAgICAgIDUwLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTc3LFxuICAgICAgMTk4LFxuICAgICAgMTcsXG4gICAgICA0MixcbiAgICAgIDE0NCxcbiAgICAgIDE0NCxcbiAgICAgIDEyMSxcbiAgICAgIDE3NyxcbiAgICAgIDE5LFxuICAgICAgMjksXG4gICAgICA2LFxuICAgICAgNDgsXG4gICAgICAyNDcsXG4gICAgICAxNTAsXG4gICAgICA3NSxcbiAgICAgIDM2LFxuICAgICAgNzMsXG4gICAgICAyNCxcbiAgICAgIDI0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0NjIyQko2QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzNTUzMDEwNjM4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg1NTIxODI1MDEzOTcyOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRWRpc29uXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdHaU1jQ0VJaUsyYklHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxWGdOUjl2YUpsTHNUVnpvQndvc3FTNXFlcGt1aityNzI0S2NVRFJPZ20wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndHMi9xYi94VVBWQWxQQk1DV3JRUE9lYWRFYlRUVTBaV0R5TUZoSVJleWRyWEJ5MTBZVFNHMjRmelAyVDdzak9uQXRyWFdFUnJzWlJHSlJtZlJSZURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpRdGJzMHorUmNJaTFoVm85cTNNT0NMc1FtR01zbEtBRVY0aVVoa0NNSm5hMEZWTGdjdHZvOWF1ZnlqTnRVN0o2Qk5NRHV2OVR1ekpIbXl3d3preWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU1MzAxMDYzODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTI5ODA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBSUFBQlovXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFJQUFCWi8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Edison",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
