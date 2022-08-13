/*
 * ngelarang lu biar g diubah kyknya emg susah ya anjg
 * jadi kalau lu g bsa ngehargain orang
 * setidaknya buat sc ori by gw, trs buat sc lu hasil copas tuh
 * better bgtu dripada nma gw dihapus smua
 * najis 👎🗿
*/
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

let handler = async (m, { conn }) => {
let name = m.sender
let ye = `${await conn.getName(name)}`
const buttons = [
           {buttonId: 'Thanks', buttonText: {displayText: 'Thanks'}, type: 1}
       ]
        
        let lmao = `Hai ${ye} Lagi Nyari Sc Ya? \n\n\n_*https://wa.me/6289509960601?text=Assalamualaikum%20Bagi%20sc%20nya%20bg?*_`
        const buttonMessage = {
            text: lmao,
            footer: wm2,
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, { quoted: fdoc })
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
