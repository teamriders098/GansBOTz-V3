let handler = async (m, {conn}) => {
let anu = '\nHallo!\n'
m.reply(anu)  
}
handler.customPrefix = /^hallo|hai$/i // ketik (tanpa prefix)
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
