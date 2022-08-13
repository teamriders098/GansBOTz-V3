let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let { registered, age,lastrampok, lastdagang, lastcodereg, lastberkebon, lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]
    let health = global.db.data.users[m.sender].health
    let role = global.db.data.users[m.sender].role
    let pasangan = global.db.data.users[m.sender].pasangan
    let armor = global.db.data.users[m.sender].armor 
    let stamina = global.db.data.users[m.sender].stamina
    let pickaxe = global.db.data.users[m.sender].pickaxe
   // let warn = global.db.data.users[m.sender].warn
   let usrname = global.db.data.users[m.sender].name
    let pet = global.db.data.users[m.sender].pet
    let warn = global.db.data.users[m.sender].warn
     let ikan= global.db.data.users[m.sender].ikan
    let nila= global.db.data.users[m.sender].nila
    let bawal= global.db.data.users[m.sender].bawal
    let lele= global.db.data.users[m.sender].lele
    let udangb= global.db.data.users[m.sender].udang
let psepick = global.db.data.users[m.sender].psepick
    let psenjata = global.db.data.users[m.sender].psenjata
    let apel = global.db.data.users[m.sender].apel
    let ayamg = global.db.data.users[m.sender].ayamg
    let ayamb = global.db.data.users[m.sender].ayamb
    let sapir = global.db.data.users[m.sender].sapir
    let ssapi = global.db.data.users[m.sender].ssapi
    let kayu = global.db.data.users[m.sender].kayu
    let string = global.db.data.users[m.sender].string
    let emas = global.db.data.users[m.sender].emas
    let besi = global.db.data.users[m.sender].iron
    let batu = global.db.data.users[m.sender].batu
    let sapi = global.db.data.users[m.sender].sapi
    let ayam = global.db.data.users[m.sender].ayam
    let babi = global.db.data.users[m.sender].babi
    let banteng = global.db.data.users[m.sender].banteng
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let serigala = global.db.data.users[m.sender].serigala
    let _serigala = global.db.data.users[m.sender].anakserigala
    let phonix = global.db.data.users[m.sender].phonix
    let _phonix = global.db.data.users[m.sender].anakphonix
    let griffin = global.db.data.users[m.sender].griffin
    let _griffin = global.db.data.users[m.sender].anakgriffin
    let kyubi = global.db.data.users[m.sender].kyubi
    let _kyubi = global.db.data.users[m.sender].anakkyubi
    let centaur = global.db.data.users[m.sender].centaur
    let _centaur = global.db.data.users[m.sender].anakcentaur
    let naga = global.db.data.users[m.sender].naga
    let _naga = global.db.data.users[m.sender].anaknaga
    let kambing = global.db.data.users[m.sender].kambing
    let kerbau = global.db.data.users[m.sender].kerbau
    let harimau = global.db.data.users[m.sender].harimau
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let panda = global.db.data.users[m.sender].panda
    let gajah = global.db.data.users[m.sender].gajah
    let buaya = global.db.data.users[m.sender].buaya
    
    let paus = global.db.data.users[m.sender].paus
    let kepiting = global.db.data.users[m.sender].kepiting
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let lumba = global.db.data.users[m.sender].lumba
    let lobster = global.db.data.users[m.sender].lobster
    let hiu = global.db.data.users[m.sender].hiu
    let udang = global.db.data.users[m.sender].udang
    let orca = global.db.data.users[m.sender].orca
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let ramuan = global.db.data.users[m.sender].ramuan
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let makanannaga = global.db.data.users[m.sender].makanannaga
    let makananphonix = global.db.data.users[m.sender].makananphonix
    let makanangriffin = global.db.data.users[m.sender].makanangriffin
    let makanankyubi = global.db.data.users[m.sender].makanankyubi
    let makanancentaur = global.db.data.users[m.sender].makanancentaur
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let premium = global.db.data.users[m.sender].premium
    let tprem = global.db.data.users[m.sender].tprem
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let mangga = global.db.data.users[m.sender].mangga
    let pisang = global.db.data.users[m.sender].pisang
    let bibitanggur = global.db.data.users[m.sender].bibitanggur
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga
    let bibitpisang = global.db.data.users[m.sender].bibitpisang 
    let gardenboxs = global.db.data.users[m.sender].gardenboxs
    let nabung = global.db.data.users[m.sender].nabung
    let bank = global.db.data.users[m.sender].bank
    let limit = global.db.data.users[m.sender].limit
    let arlok = global.db.data.users[m.sender].arlok
    let cupon = global.db.data.users[m.sender].cupon
    let tiketcoin = global.db.data.users[m.sender].tiketcoin
    let tiketm = global.db.data.users[m.sender].healtmonster
    let aqua = global.db.data.users[m.sender].aqua
    let expg = global.db.data.users[m.sender].expg
    let boxs = global.db.data.users[m.sender].boxs
    let botol = global.db.data.users[m.sender].botol
    let iron = global.db.data.users[m.sender].iron
    let sword = global.db.data.users[m.sender].sword
    let kaleng = global.db.data.users[m.sender].kaleng
    let kardus = global.db.data.users[m.sender].kardus
    let berlian = global.db.data.users[m.sender].berlian
    let emaspro = global.db.data.users[m.sender].emasbatang
    let hero = global.db.data.users[m.sender].hero
    let exphero = global.db.data.users[m.sender].exphero
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let sdurability = global.db.data.users[m.sender].sworddurability
    let pdurability = global.db.data.users[m.sender].pickaxedurability
let pancing = global.db.data.users[m.sender].pancing
let namapsng = conn.getName(pasangan)
    let fdurability = global.db.data.users[m.sender].fishingroddurability
   // let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let name = m.sender
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
   const buttons = [
           {buttonId: '.menu', buttonText: {displayText: 'Back To Menu'}, type: 1}
       ]
    let str = `
Inventory *${await conn.getName(name)}*

╭─────━• *STATUS* •━─────┐
│📡 *Status:* ${premium ? "Premium": "Free"} User
│📇 *Name:* ${usrname} 
│💌 *Pasangan:* ${ pasangan ? namapsng : 'Tidak Punya'}
│❗ *Warn:* ${warn}
│⛔ *Banned:* No
│
│❤️️ *Health:* ${health}
│⚡ *Stamina:* ${stamina}
│💹 *Money:* $${money}
│💳 *Bank:* $${bank}
│📊 *Level:* ${level}
│✨ *Exp:* ${exp}
│🎟 *️Cupon:* ${cupon}
│🏅 *Expg:* ${expg}
│🎫 *Tiketm:* ${tiketm}
│🎟️ *Tiketcoin:* ${tiketcoin}
│📍 *Role:* ${role}
│🎫 *Limit:* ${limit}
│${registered ? '🎨 *Age:* ' + age : ''}
╰──────────━⃝┅⃝━────────┘

╭──────━• *TOOLS* •━──────┐
│🥋 *Armor:* *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*
│⚔️ *Sword:* ${sword}
│╰ *Durability:* ${sdurability}
│⛏️ *Pickaxe:* ${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'stone pickaxe' : '' || pickaxe == 3 ? 'Iron pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}
│╰ *Durability:* ${pdurability}
│🎣 *Fishingrod:* ${pancing == 0 ? 'Tidak Punya' : '' || pancing == 1 ? 'Wooden Fishingrod' : '' || pancing == 2 ? 'Iron Fishingrod' : '' || pancing == 1 ? 'Diamond Fishingrod' : '' || pancing == 1 ? 'Netherite Fishingrod' : '' }
│╰ *Durability:* ${fdurability}
│🏹 *Bow:* Cooming Soon!
╰──────────━⃝┅⃝━────────┘
╭────━• *KANDANG* •━────┐
│🐔 *Ayam:* ${ayam}    
│🐐 *Kambing:* ${kambing}
│🐄 *Sapi:* ${sapi} 
│🐃 *Kerbau:* ${kerbau}
│🐖 *Babi:* ${babi}    
│🐅 *Harimau:* ${harimau}
│🐂 *Banteng:* ${banteng} 
│🐒 *Monyet:* ${monyet}
│🐗 *Babi Hutan:* ${babihutan}
│🐼 *Panda:* ${panda}
│🐘 *Gajah:* ${gajah}
│🐊 *Buaya:* ${buaya}
│
│💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan
╰──────────━⃝┅⃝━────────┘

╭──────━• *KOLAM* •━──────┐
│🐋 *Orca:* ${orca}
│🐳 *Paus:* ${paus}
│🐬 *Lumba:* ${lumba}
│🦈 *Hiu:* ${hiu}
│🐟 *Ikan:* ${ikan}
│🐟 *Lele:* ${lele}
│🐡 *Bawal:* ${bawal}
│🐠 *Nila:* ${nila}
│🦀 *Kepiting:* ${kepiting}
│🦞 *Lobster:* ${lobster}
│🐙 *Gurita:* ${gurita}
│🦑 *Cumi:* ${cumi}
│🦐 *Udang:* ${udang}
│
│💬 *Total Ikan:* ${orca + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus + nila + bawal + ikan + lele + psepick + psenjata }
╰──────────━⃝┅⃝━────────┘

╭────━• *INVENTORY* •━────┐
│💎 *Diamond:* ${diamond}
│🧪 *Ramuan:* ${ramuan}
│🥛 *Aqua:* ${aqua}
│🥤 *Potion:* ${potion}
│🗑️ *Sampah:* ${sampah}
│🥫 *Kaleng:* ${kaleng}
│📦 *Kardus:* ${kardus}
│🧂 *Botol:* ${botol}
│🪵  *Kayu:* ${kayu}
│🕸️ *String:* ${string}
│🪙  *Gold:* ${emas}
│⛓  *Iron:* ${besi}
│🪨  *Batu:* ${batu}
│🧭 *Arloji:* ${arlok}
╰──────────━⃝┅⃝━────────┘

╭────━• *FOOD PET* •━────┐
│🥩 *Makanan Pet:* *${makananpet}*
│🐦 *Makanan Phonix:* *${makananphonix}*
│🐉 *Makanan Naga:* *${makanannaga}*
│🦅 *Makanan Griffin:* *${makanangriffin}*
│🦊 *Makanan Kyubi:* *${makanankyubi}*
│🐴 *Makanan Centaur:* *${makanancentaur}*
│🌎 *Total inv:* *${diamond + potion + ramuan + sampah + kayu + sword + iron + string + makananpet + makananphonix + makanannaga + makanangriffin + makanankyubi + makanancentaur}* item
╰──────────━⃝┅⃝━────────┘

╭──────━• *CRATE* •━──────┐
│📮 *Box:* ${boxs}
│📦 *Common:* ${common}
│🛍️ *Uncommon:* ${uncommon}
│🎁 *Mythic:* ${mythic}
│🧰 *Legendary:* ${legendary}
│📫 *Pet:* ${pet}
╰──────────━⃝┅⃝━────────┘

╭────━• *FRUIT & SEED* •━───┐
│🥭 *Mangga:* ${mangga}
│🍇 *Anggur:* ${anggur}
│🍌 *Pisang:* ${pisang}
│🍊 *Jeruk:* ${jeruk}
│🍎 *Apel:* ${apel}
│
│🌾 *Bibit Mangga:* ${bibitmangga}
│🌾 *Bibit Anggur:* ${bibitanggur} 
│🌾 *Bibit Pisang:* ${bibitpisang}
│🌾 *Bibit Jeruk:* ${bibitjeruk}
│🌾 *Bibit Apel:* ${bibitapel}
╰────────━⃝┅⃝━──────┘

╭──────━• *HERO* •━──────┐
│🦸‍♂️My Hero: *${hero == 0 ? 'Tidak Punya' : '' || hero == 1 ? 'Level 1' : '' || hero == 2 ? 'Level 2' : '' || hero == 3 ? 'Level 3' : '' || hero == 4 ? 'Level 4' : '' || hero == 5 ? 'Level 5' : '' || hero == 6 ? 'Level 6' : '' || hero == 7 ? 'Level 7' : '' || hero == 8 ? 'Level 8' : '' || hero == 9 ? 'Level 9' : '' || hero == 10 ? 'Level 10' : '' || hero == 11 ? 'Level 11' : '' || hero == 12 ? 'Level 12' : '' || hero == 13 ? 'Level 13' : '' || hero == 14 ? 'Level 14' : '' || hero == 15 ? 'Level 15' : '' || hero == 16 ? 'Level 16' : '' || hero == 17 ? 'Level 17' : '' || hero == 18 ? 'Level 18' : '' || hero == 19 ? 'Level 19' : '' || hero == 20 ? 'Level 20' : '' || hero == 21 ? 'Level 21' : '' || hero == 22 ? 'Level 22' : '' || hero == 23 ? 'Level 23' : '' || hero == 24 ? 'Level 24' : '' || hero == 25 ? 'Level 25' : '' || hero == 26 ? 'Level 26' : '' || hero == 27 ? 'Level 27' : '' || hero == 28 ? 'Level 28' : '' || hero == 29 ? 'Level 29' : '' || hero == 30 ? 'Level 30' : '' || hero == 31 ? 'Level 31' : '' || hero == 32 ? 'Level 32' : '' || hero == 33 ? 'Level 33' : '' || hero == 34 ? 'Level 34' : '' || hero == 35 ? 'Level 35' : '' || hero == 36 ? 'Level 36' : '' || hero == 37 ? 'Level 37'  : '' || hero == 38 ? 'Level 38' : '' || hero == 39 ? 'Level 39' : '' || hero == 40 ? 'Level MAX' : ''}*
╰──────────━⃝┅⃝━────────┘

╭──────━• *PET* •━──────┐
│🐴 *Kuda:* ${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}
│🦊 *Rubah:* ${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}
│🐱 *Kucing:* ${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}
│🦊Kyubi: *${kyubi == 0 ? 'Tidak Punya' : '' || kyubi == 1 ? 'Level 1' : '' || kyubi == 2 ? 'Level 2' : '' || kyubi == 3 ? 'Level 3' : '' || kyubi == 4 ? 'Level 4' : '' || kyubi == 5 ? 'Level 5' : '' || kyubi == 6 ? 'Level 6' : '' || kyubi == 7 ? 'Level 7' : '' || kyubi == 8 ? 'Level 8' : '' || kyubi == 9 ? 'Level 9' : '' || kyubi == 10 ? 'Level 10' : '' || kyubi == 11 ? 'Level 11' : '' || kyubi == 12 ? 'Level 12' : '' || kyubi == 13 ? 'Level 13' : '' || kyubi == 14 ? 'Level 14' : '' || kyubi == 15 ? 'Level 15' : '' || kyubi == 16 ? 'Level 16' : '' || kyubi == 17 ? 'Level 17' : '' || kyubi == 18 ? 'Level 18' : '' || kyubi == 19 ? 'Level 19' : '' || kyubi == 20 ? 'Level MAX' : ''}*
│🐉 *Naga:* ${naga == 0 ? 'Tidak Punya' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level MAX' : ''}
│🦜 *Phonix:* ${phonix == 0 ? 'Tidak Punya' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level MAX' : ''}
│🐎 *Centaur:* ${centaur == 0 ? 'Tidak Punya' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level MAX' : ''}
│🦅 *Griffin:* ${griffin == 0 ? 'Tidak Punya' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level MAX' : ''}
│🐺 *Serigala:* ${serigala == 0 ? 'Tidak Punya' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level MAX' : ''}
╰──────────━⃝┅⃝━────────┘
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
│
│Hero ${hero == 0 ? 'Tidak Punya' : '' || hero > 0 && hero < 40 ? `Level *${hero}* To level *${hero + 1}*\n│Exp *${exphero}* -> *${hero *500}*` : '' || hero == 40 ? '*Max Level*' : ''}
╰────────────────

*Achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}
`.trim()
    const buttonMessage = {
            text: str,
            footer: wm2,
            buttons: buttons,
            headerType: 1
        }
        conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['inv']
handler.tags = ['rpg']
handler.command = /^(inv|inventory)$/i
handler.limit = true
handler.group = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
