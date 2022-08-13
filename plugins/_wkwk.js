const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
    m.reply('Awokwokwok ngaku njirr:v')

}

handler.command = /^(wkwk)$/i

module.exports = handler
