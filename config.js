const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254728928633";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_30_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4MixcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MyxcbiAgICAgICAgNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzeC9KbkJKWVJBZit5a05OeFFaK1RwSi96a3RLV2JOeG1COEtXOGpoRjFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyODkyODYzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjczNjdFMTNBNEU4QTIzQUNGQzJDRkZBRUYyMTkzNEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDM5NDIwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI4OTI4NjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQkJBRkYwRkRBOEY2QUUwNEIyRkQwNjBFMEMyMjc5MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc0Mzk0MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieXExVWJJMkJUdkc5WEcyMkg4NEdiQVwiLFxuICBcInBob25lSWRcIjogXCJkMjg5YTIyMC1iMzQyLTQ0MTItOTI5OC0wZGQ5YjVhNmViNTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTcsXG4gICAgICAyMzcsXG4gICAgICAyNDMsXG4gICAgICAyMjcsXG4gICAgICA1OSxcbiAgICAgIDE3MSxcbiAgICAgIDYwLFxuICAgICAgMjI0LFxuICAgICAgMzQsXG4gICAgICAxOTgsXG4gICAgICAxNTgsXG4gICAgICA4LFxuICAgICAgMjQ5LFxuICAgICAgMTgwLFxuICAgICAgMTA3LFxuICAgICAgMjA5LFxuICAgICAgMjE4LFxuICAgICAgMTIsXG4gICAgICAyMDIsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTkzLFxuICAgICAgOTcsXG4gICAgICAyMTksXG4gICAgICA0MSxcbiAgICAgIDE4MSxcbiAgICAgIDIwNixcbiAgICAgIDIzMixcbiAgICAgIDEwMixcbiAgICAgIDEyNSxcbiAgICAgIDU3LFxuICAgICAgODEsXG4gICAgICAxNzUsXG4gICAgICAxMjQsXG4gICAgICAyNDEsXG4gICAgICAxMDMsXG4gICAgICAxNzIsXG4gICAgICA4MCxcbiAgICAgIDI1LFxuICAgICAgMTQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk3MjZLUFdLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3Mjg5Mjg2MzM6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc4MDM5NTg5Mzc2MTEyOjI1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKcq+KTiO+4juKSvu+4juKTgO+4juKStu+4juKcq1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091R256Z1FzNWY0c2dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWjhjS2FXc00yRFNLT3JMRzRCckNYbzh5REprTDdhWWNCd3VIeXA4cUl4RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRQnAyUmk5UXh0S2RSNXRSQkZML0FlR0I0VzVpZmR4bUxhZ2JoRE04SW81akRZVDRrOXR6ZitUQ0FsTjFpNzlHVTVmbHZHY2RjMzQzbXRzVVIyRi9CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRampkS1BMaUFSTDdteWg5V1FBR2RHZDNOcjRRSFZRWno4SFhxQ1JMbDZDRVAwYlhrWTdJbUJDbDRFbWIzTjlMSk92c3ZHZDQrNCtYNEFFMHAwNEZqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Mjg5Mjg2MzM6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzQzOTQxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUR6MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRHowLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVnN0UVF4aE4zZy9BZEtCakFRUE15ck84aDN4RFZKcjcraHlHUFViY0x3TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTc5NDkyOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMDU3OTI3NTExNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
