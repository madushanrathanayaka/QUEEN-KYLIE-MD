const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
const voice = {
    menu: 'media/AUD-20240904-WA0426.mp3'
}

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = ` *👋 Hello ${pushname}*

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗤𝗨𝗘𝗘𝗡-𝗞𝗬𝗟𝗜𝗘-𝗠𝗗! ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : ꜱᴀʜᴀꜱ ɴᴇᴛʜꜱᴀʀᴀ(ꜱᴀʜᴀꜱ ᴛᴇᴄʜ
│◈ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ : 94718913389
╰──────────●●►
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*
`

await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: `https://imgtr.ee/images/2024/09/13/83ac01c405f9d78df8dacb96400ac5c2.jpeg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`Error`)
}
})
