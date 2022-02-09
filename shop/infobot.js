const infobot = (status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberr,runtime, kyun) => {
return `╭─❒「 *BOT STATISTIC* 」
├ Owner : @${ownerNumberr.split('@')[0]}
├️ Lib  : Baileys
├️ Type  : NodeJs
├️ Mode : ${status}
├️ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
├ Group Chat : ${giid.length}
├ Personal Chat : ${totalchat.length - giid.length}
├ Total Chat : ${totalchat.length}
├ Speed : ${latensii.toFixed(4)} Seconds
╰❒ Runtime : ${kyun(runtime)}


╭─❒ 「 *PHONE STATISTIC* 」
├ WhatsApp V : ${wa_version}
├ RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ MCC : ${mcc}
├ MNC : ${mnc}
├ OS Version : ${os_version}
├ Merk Hp : ${device_manufacturer}
╰❒ Versi Hp : ${device_model}
`}

exports.infobot = infobot
 