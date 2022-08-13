let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    let ayee = 'https://api.zacros.my.id/randomimg/meme'
    conn.sendButtonImg(m.chat, ayee, 'Nih', wm2, 'NEXT', '.meme', m)
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler
