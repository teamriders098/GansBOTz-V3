let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '6289509960601@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/057b8dff2f6ba7d4553ae.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `
⳹⍣ 𝐎𝐩𝐞𝐧 𝐉𝐚𝐬𝐚 𝐒𝐞𝐰𝐚 𝐁𝐎𝐓 ⍣⳼
  
${namabot}

┌─❖
│「 Hi 👋 」
└┬❖ 「 Bang 」
┬└────────────┈ ⳹
│
╭──「 *SEWABOT* 」
├  1 BULAN : IDR 10.000 (10k)
╰────❖
│
╭─ [ KELEBIHAN BOT ]
├  ＯＮ 24 ＪＡＭ
├  FITUR BANYAK
╰────❖
│
╭─[ KEUNTUNGAN ]
├  ANTI LINK ( AUTO KICK )
├  WELCOME ( On/Off )
├  DAN RATUSAN FITUR LAINYA
╰────❖
│
╭─[ *MINAT CHAT* ]
├  🪀 wa.me/6289509960601?text=Assalamualaikum%20Mau%20sewabot%20bang
╰────❖
│
╭─[ *ALL PAYMENT* ]─
└┬────────────┈ ⳹
   │✑  Jangan Lupa Donasinya ya kak
   └─────────────┈ ⳹



*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'7487741964584083'}]}],
  headerImage: { productId: '7487741964584083',
  jpegThumbnail: baper },
  businessOwnerJid: `6289509960601@s.whatsapp.net`
  },
  footerText: '',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
