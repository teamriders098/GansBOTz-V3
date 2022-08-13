const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let own = `https://wa.me/${noowner}`
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let PhoneNumber = require('awesome-phonenumber')
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, money, name, weton, week, date, dateIslamic, time, role,
      readmore: readMore
    }
    let username = conn.getName(who)
    let { pasangan, age, premiumDate, premium, registered } = global.db.data.users[who]
    let my = `© GansBOTz`
   let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let now = new Date() * 1
   // let buffer = await getBuffer(pp)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let jodoh = `Berpacaran Dengan @${pasangan.split`@`[0]}`
    const menu2nih = `
╭───❑ 「 BALANCE 」 ❑────
├─ 📇 *Name*: ${username}
├─ 📓 ${about ? '*About*: ' + about : ''}
├─ 🆔 *Nomor* : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
├─ 👫 *Status*: ${pasangan ? jodoh : 'Jomblo' }
├─ 🎨 ${registered ? '*Age*: ' + age : ''}
├─ 🎫 *Limit*: ${limit}
├─ 💹 *Money*: ${money}
├─ 📍 *Role*: *${role}*
├─ 📊 *Level*: ${level}
├─ ✨ *Exp*: (${exp - min} / ${xp})
╰─❑ Premium: ${premium ? 'Yes' : 'No'}
`.trim()
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: menu2nih.trim(),
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
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
 
}
handler.help = ['profile', 'my']
handler.tags = ['info']
handler.command = /^(my|profile)$/i
handler.owner = false
handler.mods = false
handler.register = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Malam kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}