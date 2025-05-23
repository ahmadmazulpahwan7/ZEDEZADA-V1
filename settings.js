const fs = require('fs')
global.prefa = [''] 
global.botname = "⨭͛͠𝐙𝐄̶͓𝐃̷𝐄͡𝐙͍̽𝐀͡𝐃𝐀̚"
global.version = "1"
global.owner = "6282321593192"
global.title = "© ᴄʀᴇᴀᴛᴏʀ sᴄʀɪᴘᴛ ᴢᴇᴅᴇᴢᴀᴅᴀ"
global.website = "whatsapp.com/channel/0029VakL4GD2phHJckS4Wc24"
global.idch = "120363417139133337@newsletter"
global.chjid = "https://whatsapp.com/channel/0029Vb75QXJ7oQhgxmdf0E0d"
global.wm = ""
//===================================//
global.session = "session"
//=========== [ IMG-URL ] ===========//
global.thumb = "https://files.catbox.moe/cfkh9x.jpg"
global.image = {
Reply: "https://files.catbox.moe/cfkh9x.jpg"
}
//==================================//
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
