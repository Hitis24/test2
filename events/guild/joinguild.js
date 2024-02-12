const config = require("../../botconfig/main") 

const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js") 
const client = require("../../index") 
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('#87CEEB')
 .setTitle('<:emoji_5:1183803431740243968> **__CONNECTED TO NEW SERVER__**')
 .setURL('https://discord.com/invite/KT6ucs983j')
 .setDescription(`> <a:point_blue:1183809873893412976>  THANKS YOU FOR INVITING ME. MY PREFIX IS w!`)
 
 .addFields(
 { name: '<:emoji_7:1183803466552967249> **__CREATORS__**', value: '> <a:point_blue:1183809873893412976> 𝗔𝘀𝗵.𝗱𝗲' }
 )

 .setImage('https://media.discordapp.net/attachments/1183814508888739850/1183814805526696046/standard.gif?ex=6589b473&is=65773f73&hm=68df0191bd6e2fb0c24231eaa0f277707ce355f823d07ac6d6078299b616fe2e&')
 .setTimestamp()
 .setFooter('Weiden', 'https://dsc.gg/weiden');
channel.send({embeds : [embed]});
}) 
