/**
* create by hyzer official
* g usah di hapus anjg, gw cape sumpah
* sc free, bayar pake subs aja udh good
* jika ada bug/mau request fitur
* chat me on wa https://wa.me/6287892711054
* follow my instagram @zexyds_
**/

//━━━━━━━━[ DEFAULT SETTINGS ]━━━━━━━━//
let { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let fs = require('fs')
const util = require('util')
const os = require('os')
let path = require('path')
let { createHash} = require('crypto')
let fetch = require('node-fetch')
let { perfomance } = require('perf_hooks')
let moment = require('moment-timezone')
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;

//━━━━━━━━[ DEFAULT MENU ]━━━━━━━━//
const defaultMenu = {
  before:`
𝙷𝚊𝚕𝚕𝚘 %name %ucapan

`.trimStart(), 
  header: '╭─────➣❲ %category ❳',
  body: '│✗ %cmd %islimit %isPremium',
  footer: '╰──────────────◩',
  after: `Created By GansBOTz`,
}

//━━━━━━━━[ CATEGORY ]━━━━━━━━//
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'absen', 'rpg', 'anime', 'downloader', 'game', 'fun', 'xp', 'github', 'group', 'image', 'quotes', 'admin', 'info', 'internet', 'islam', 'kerang', 'maker', 'owner', 'suara', 'premium', 'quotes', 'info', 'stalk', 'shortlink', 'sticker', 'tools', 'text', 'nsfw', 'asupan', 'random', 'textpro', 'photooxy']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'MENU UTAMA',
  'advanced': 'ADVANCED',
  'absen': 'MENU ABSEN',
  'anime': 'MENU ANIME',
  'sticker': 'MENU CONVERT',
  'downloader': 'MENU DOWNLOADER',
  'xp': 'MENU EXP',
  'fun': 'MENU FUN',
  'game': 'MENU GAME',
  'github': 'MENU GITHUB',
  'group': 'MENU GROUP',
  'image': 'MENU IMAGE',
  'info': 'MENU INFO',
  'internet': 'INTERNET',
  'islam' : 'MENU ISLAMI',
  'kerang': 'MENU KERANG',
  'maker': 'MENU MAKER',
  'owner': 'MENU OWNER',
  'Pengubah Suara': 'PENGUBAH SUARA',
  'premium': 'PREMIUM MENU',
  'quotes' : 'MENU QUOTES',
  'rpg': 'MENU RPG',
  'stalk': 'MENU STALK',
  'shortlink': 'SHORT LINK',
  'tools': 'MENU TOOLS',
  'vote': 'MENU VOTING',
  'nsfw': 'NSFW MENU', 
  'asupan': 'ASUPAN MENU', 
  'random': 'RANDOM MENU', 
  'textpro': 'TEXT PRO MENU', 
  'photooxy': 'PHOTO OXY MENU', 
  }
  if (teks == 'absen') tags = {
    'absen': '𝙈𝙀𝙉𝙐 𝘼𝘽𝙎𝙀𝙉',
    'vote': '𝙈𝙀𝙉𝙐 𝙑𝙊𝙏𝙄𝙉𝙂',
  }
  if (teks == 'anime') tags = {
  'anime': '𝙈𝙀𝙉𝙐 𝘼𝙉𝙄𝙈𝙀',
  }
  if (teks == 'sticker') tags = {
  'sticker': '𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏',
  }
  if (teks == 'downloader') tags = {
  'downloader': '𝙈𝙀𝙉𝙐 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍',
  }
  if (teks == 'xp') tags = {
  'xp': '𝙈𝙀𝙉𝙐 𝙀𝙓𝙋',
  }
  if (teks == 'fun') tags = {
  'fun': '𝙈𝙀𝙉𝙐 𝙁𝙐𝙉',
  }
  if (teks == 'game') tags = {
  'game': '𝙈𝙀𝙉𝙐 𝙂𝘼𝙈𝙀',
  }
  if (teks == 'github') tags = {
  'github': '𝙈𝙀𝙉𝙐 𝙂𝙄𝙏𝙃𝙐𝘽',
  }
  if (teks == 'group') tags = {
  'group': '𝙈𝙀𝙉𝙐 𝙂𝙍𝙊𝙐𝙋',
  }
  if (teks == 'image') tags = {
  'image': '𝙈𝙀𝙉𝙐 𝙄𝙈𝘼𝙂𝙀',
  }
  if (teks == 'info') tags = {
  'info': '𝙈𝙀𝙉𝙐 𝙄𝙉𝙁𝙊',
  }
  if (teks == 'internet') tags = {
  'internet': '𝙄𝙉𝙏𝙀𝙍𝙉𝙀𝙏',
  }
  if (teks == 'islam') tags = {
  'islam' : '𝙈𝙀𝙉𝙐 𝙄𝙎𝙇𝘼𝙈𝙄',
  }
  if (teks == 'kerang') tags = {
  'kerang': '𝙈𝙀𝙉𝙐 𝙆𝙀𝙍𝘼𝙉𝙂',
  }
  if (teks == 'maker') tags = {
  'maker': '𝙈𝙀𝙉𝙐 𝙈𝘼𝙆𝙀𝙍',
  }
  if (teks == 'owner') tags = {
    'owner': '𝙊𝙒𝙉𝙀𝙍',
    'host': '𝙃𝙊𝙎𝙏',
    'advanced': '𝘼𝘿𝙑𝘼𝙉𝘾𝙀𝘿'
  }
  if (teks == 'suara') tags = {
  'Pengubah Suara': '𝙋𝙀𝙉𝙂𝙐𝘽𝘼𝙃 𝙎𝙐𝘼𝙍𝘼',
  }
  if (teks == 'text') tags = {
  'text': '𝙈𝘼𝙆𝙀𝙍 𝙏𝙀𝙓𝙏',
  }
  if (teks == 'premium') tags = {
  'premium': '𝙋𝙍𝙀𝙈𝙄𝙐𝙈 𝙈𝙀𝙉𝙐',
  }
  if (teks == 'quotes') tags = {
  'quotes' : '𝙈𝙀𝙉𝙐 𝙌𝙐𝙊𝙏𝙀𝙎',
  }
  if (teks == 'rpg') tags = {
  'rpg': '𝙈𝙀𝙉𝙐 𝙍𝙋𝙂',
  }
  if (teks == 'stalk') tags = {
  'stalk': '𝙈𝙀𝙉𝙐 𝙎𝙏𝘼𝙇𝙆',
  }
  if (teks == 'shortlink') tags = {
  'shortlink': '𝙎𝙃𝙊𝙍𝙏 𝙇𝙄𝙉𝙆',
  }
  if (teks == 'tools') tags = {
  'tools': '𝙈𝙀𝙉𝙐 𝙏𝙊𝙊𝙇𝙎',
  }
  if (teks == 'nsfw') tags = {
  'nsfw': '𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐', 
  }
  if (teks == 'asupan') tags = {
  'asupan': '𝘼𝙎𝙐𝙋𝘼𝙉 𝙈𝙀𝙉𝙐', 
  }
  if (teks == 'random') tags = {
  'random': '𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐', 
  }
  if (teks == 'textpro') tags = {
  'textpro': '𝙏𝙀𝙓𝙏 𝙋𝙍𝙊 𝙈𝙀𝙉𝙐', 
  }
  if (teks == 'photooxy') tags = {
  'photooxy': '𝙋𝙃𝙊𝙏𝙊 𝙊𝙓𝙔 𝙈𝙀𝙉𝙐', 
  }

//━━━━━━━━[ DATABASE USER ]━━━━━━━━//
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender 
    let name = conn.getName(m.sender)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let premium = global.db.data.users[m.sender].premium
    let user = global.db.data.users[who]
    let { exp, limit, level, money, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let tag = `wa.me/${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}

//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
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
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')

//━━━━━━━━[ SETTING HELP ]━━━━━━━━//
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  })

//━━━━━━━━[ FAKE REPLY ]━━━━━━━━//
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Hai Kak ${name}!`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
const fdoc = {
   key : {
   remoteJid: 'status@broadcast',
   participant : '0@s.whatsapp.net'
   },
   message: {
   documentMessage: {
   title: wm, 
   }
   }
   }

//━━━━━━━━[ BAGIAN MENU ]━━━━━━━━//
if (teks == '404') {
let menuu = `╭───❏ *❲* INFO BOT *❳*
├◩𝙊𝙬𝙣𝙚𝙧 : ${global.ownername}
├◩𝘽𝙊𝙏 : ${global.namabot}
├◩𝙐𝙥𝙩𝙞𝙢𝙚 : ${uptime}
├◩𝘼𝙡𝙡 𝙁𝙞𝙩𝙪𝙧 : *${totalf}*
├◩𝘿𝙖𝙩𝙖𝙗𝙖𝙨𝙚 : ${rtotalreg}
╰─────◩
╭───❏ *❲* INFO USER *❳*
├◩𝙽𝚊𝚖𝚊 : ${name}
├◩𝙻𝚒𝚖𝚒𝚝 : ${limit}
├◩𝙻𝚎𝚟𝚎𝚕 : ${level}
├◩𝙴𝚡𝚙 : ${exp}
├◩𝚁𝚘𝚕𝚎 : ${role}
╰─────◩
╭───❏ *❲* INFO TIME *❳*
├◩ᎻᎯᏒᎨ : *${week}*
├◩ᎿᎶᏝ  : *${date}*
├◩ᏯᎯᏦᎿᏬ : *${waktuwib}*
╰─────◩︎`
const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        listMessage: {
            title: `${ucapan()} ${name}`,
            description: menuu,
            buttonText: '⌜ᴘɪʟɪʜ ᴍᴇɴᴜ⌟',
            listType: 1,
            footerText: "𝚂𝙸𝙻𝙰𝙷𝙺𝙰𝙽 𝙿𝙸𝙻𝙸𝙷 𝙼𝙴𝙽𝚄 𝙳𝙸 𝙱𝙰𝚆𝙰𝙷",
            mtype: 'listMessage',
            sections: [
              {
                "rows": [{
                  "title": ` «👤» 𝐎𝐖𝐍𝐄𝐑 𝐁𝐎𝐓`,
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙾𝚠𝚗𝚎𝚛 𝙱𝚘𝚝",
                  "rowId": `.owner`
                },{
                  "title": "«⚠️» 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎",
                  "description": "𝐌𝐞𝐧𝐚𝐦𝐩𝐢𝐥𝐤𝐚𝐧 𝐢𝐧𝐟𝐨 𝐁𝐎𝐓",
                  "rowId": `${_p}? info`
                }],
                "title": "INFORMASI BOT"
              }, {
                "rows": [{
                  "title": `⌠ 💬 ⌡ ᴀʟʟ ᴍᴇɴᴜ`,
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝚂𝚎𝚖𝚞𝚊 𝙼𝚎𝚗𝚞 𝙱𝙾𝚃",
                  "rowId": '.? all'
                  }, {
                  "title": "⌠ 🚦 ⌡ ᴀʙsᴇɴ & ᴠᴏᴛɪɴɢ",
                  "description": "𝙰𝚋𝚜𝚎𝚗 𝚍𝚊𝚗 𝚅𝚘𝚝𝚒𝚗𝚐 𝙼𝚎𝚗𝚞",
                  "rowId": `${_p}? absen`
                }, {
                  "title": "⌠ 🇯🇵 ⌡ ᴀɴɪᴍᴇ ᴍᴇɴᴜ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙰𝚗𝚒𝚖𝚎",
                  "rowId": `${_p}? anime`
                }, {
                  "title": "⌠ 🎨 ⌡ sᴛɪᴄᴋᴇʀ & ᴄᴏɴᴠᴇʀᴛᴇʀ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 𝙲𝚘𝚗𝚟𝚎𝚛𝚝",
                  "rowId": `${_p}? sticker`
                }, {
                  "title": "⌠ 🔰 ⌡ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙵𝚒𝚝𝚞𝚛 𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛",
                  "rowId": `${_p}? downloader`
                }, {
                  "title": "⌠ 📊 ⌡ ᴇxᴘ ᴅᴀɴ ʟɪᴍɪᴛ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙴𝚡𝚙 𝚍𝚊𝚗 𝙻𝚒𝚖𝚒𝚝",
                  "rowId": `${_p}? xp`
                }, {
                  "title": "⌠ 🤺 ⌡ ғᴜɴ ᴍᴇɴᴜ",
                  "description": "𝚖𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙱𝚞𝚊𝚝 𝚜𝚎𝚛𝚞-𝚜𝚎𝚛𝚞𝚊𝚗",
                  "rowId": `${_p}? fun`
                }, {
                  "title": "⌠ 🎮 ⌡ ɢᴀᴍᴇ ᴍᴇɴᴜ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚐𝚊𝚖𝚎",
                  "rowId": `${_p}? game`
                }, {
                  "title": "⌠ 🧰 ⌡  ɢɪᴛʜᴜʙ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙲𝚛𝚎𝚊𝚝𝚘𝚛 𝚐𝚒𝚝𝚑𝚞𝚋",
                  "rowId": `${_p}? github`
                }, {
                  "title": "⌠  🏢 ⌡   ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚋𝚞𝚊𝚝 𝚐𝚛𝚞𝚙",
                  "rowId": `${_p}? group`
                }, {
                  "title": "│🖼│IMAGE",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙸𝚖𝚊𝚐𝚎",
                  "rowId": `${_p}? image`
                }, {
                  "title": "│📡│INTERNET",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙸𝚗𝚝𝚎𝚛𝚗𝚎𝚝",
                  "rowId": `${_p}? internet`
                }, {
                  "title": "│🕋│ISLAMIC",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙸𝚜𝚕𝚊𝚖𝚒",
                  "rowId": `${_p}? islam`
                }, {
                  "title": "│🐚│KERANG",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙺𝚎𝚛𝚊𝚗𝚐",
                  "rowId": `${_p}? kerang`
                }, {
                  "title": "│✒️│MAKER",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙼𝚊𝚔𝚎𝚛",
                  "rowId": `${_p}? maker`
                }, {
                  "title": "│👨‍💻│OWNER",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙾𝚠𝚗𝚎𝚛",
                  "rowId": `${_p}? owner`
                }, {
                  "title": "│🎙│PENGUBAH SUARA",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚅𝚘𝚒𝚌𝚎 𝙲𝚑𝚊𝚗𝚐𝚎𝚛",
                  "rowId": `${_p}? suara`
                }, {
                  "title": "│🔝│PREMIUM",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙿𝚛𝚎𝚖𝚒𝚞𝚖",
                  "rowId": `${_p}? premium`
                }, {
                  "title": "│📑│QUOTES",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚀𝚞𝚘𝚝𝚎𝚜",
                  "rowId": `${_p}? quotes`
                }, {
                  "title": "│🌱│RPG",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚀𝚞𝚘𝚝𝚎𝚜",
                  "rowId": `${_p}? rpg`
                }, {
                  "title": "│🐾│STALKER",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚂𝚝𝚊𝚕𝚔𝚎𝚛",
                  "rowId": `${_p}? stalk`
                }, {
                  "title": "│🔗│SHORT LINK",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚂𝚑𝚘𝚛𝚝 𝙻𝚒𝚗𝚔",
                  "rowId": `${_p}? shortlink`
                }, {
                  "title": "│🛠│TOOLS MENU",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚃𝚘𝚘𝚕𝚜",
                  "rowId": `${_p}? tools`
                }, {
                  "title": "│📃│TEXT MAKER",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚃𝚎𝚡𝚝 𝙼𝚊𝚔𝚎𝚛",
                  "rowId": `${_p}? text`
                }, {
                  "title": "│🧼│NSFW",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙷𝚎𝚗𝚝𝚊𝚒",
                  "rowId": `${_p}? nsfw`
                }, {
                  "title": "│🌚│RANDOM",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝚁𝚊𝚗𝚍𝚘𝚖",
                  "rowId": `${_p}? random`
                }, {
                  "title": "│⛄│TEXT PRO",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝚃𝚎𝚡𝚙𝚛𝚘 𝙼𝚎𝚗𝚞",
                  "rowId": `${_p}? textpro`
                }, {
                  "title": "│💨│PHOTO OXY",
                  "description": "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 𝙼𝚎𝚗𝚞 𝙿𝚑𝚘𝚝𝚘 𝙾𝚡𝚢",
                  "rowId": `${_p}? textpro`
                }
                  ],
                "title": "LIST MENU"
              }
            ], "contextInfo": {
              "stanzaId": m.key.id,
              "participant": m.sender,
              "quotedMessage": m.message
            }
    }}), { userJid: m.participant || m.key.remoteJid, quoted: fkontak });
    return await conn.relayMessage(
        m.key.remoteJid,
        template.message,
        { messageId: template.key.id }
    )
    }
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
        before,
        ...Object.keys(tags).map(tag => {
          return header.replace(/%category/g, tags[tag]) + '\n' + [
            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
              return menu.help.map(help => {
                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                  .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                  .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                  .trim()
              }).join('\n')
            }),
            footer
          ].join('\n')
        }),
        after
      ].join('\n')
      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
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
      name,
      ucapan: ucapan(),
      level, limit, money, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    
//━━━━━━━━[ SETTINGS MENU ]━━━━━━━━//
let ʏᴛɢᴡ = `${global.ytlu}`
let ɪɢɢᴡ = `${global.instalu}`
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage, 
            hydratedContentText: text, 
            hydratedFooterText: wm2, 
            hydratedButtons: [{
            urlButton: {
               displayText: 'Yᴏᴜᴛᴜʙᴇ',
               url: ʏᴛɢᴡ
             }

           },
             {
             urlButton: {
               displayText: 'Iɴsᴛᴀɢʀᴀᴍ', 
               url: ɪɢɢᴡ
             }

           },
               {
             quickReplyButton: {
               displayText: 'Oᴡɴᴇʀ',
               id: '.owner',
             }

           },
               {
             quickReplyButton: {
               displayText: 'Dᴏɴᴀsɪ',
               id: '.donasi',
             }

           },
           {
             quickReplyButton: {
               displayText: 'Cʀᴇᴅɪᴛ',
               id: '.tqto',
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
handler.help = ['listmenu', 'command', '?']
handler.tags = ['main']
handler.command = /^(listmenu|command|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

//━━━━━━━━[  JANGAN DI UBAH  ]━━━━━━━━//
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}
