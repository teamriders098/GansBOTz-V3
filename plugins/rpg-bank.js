const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let my = `© GansBOTz`
let iggw = `https://instagram.com/b4c00t.dtz`
let own = `https://wa.me/${global.noowner}`
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    const thumbnail = fs.readFileSync('./media/bank.jpg')
    let user = global.db.data.users[who]
let anu = `
🏦 Bank *${user.name}*
⭐ Role : *${user.role}*\n\n
*${user.exp}* Exp ✨
*${user.limit}* Limit 📊
*${user.money}* Money 💵`
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu.trim(),
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/bank.jpg') },
           hydratedFooterText: my,
           hydratedButtons: [{
            urlButton: {
               displayText: 'c͜͡o͜͡n͜͡t͜͡a͜͡c͜͡t͜͡ o͜͡w͜͡n͜͡e͜͡r͜͡',
               url: own
             }

           },
           {
             quickReplyButton: {
               displayText: 'i͜͡n͜͡v͜͡e͜͡n͜͡t͜͡o͜͡r͜͡y͜͡',
               id: '.inv',
             }
           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
} catch (e) {
    conn.reply(m.chat, 'Maaf, Fitur Sedang Diperbaiki', m)
    throw e
  }
 
}
handler.help = ['bank', 'dompet']
handler.tags = ['xp', 'rpg']
handler.command = /^(bank|dompet)$/i

module.exports = handler