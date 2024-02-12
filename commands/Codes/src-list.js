const { MessageActionRow, MessageButton , MessageSelectMenu, MessageEmbed} = require("discord.js") 

module.exports = {
  name: "src-list",
  run: async(client,message,args) => {

const row = new MessageActionRow() 
    .addComponents(
      new MessageButton()
      .setLabel("Invite me")

      .setStyle("LINK") 
.setEmoji("1175647567409852496")
      .setURL("https://dsc.gg/moonlight05"),
      new MessageButton()
      .setLabel("Support Server")

      .setStyle("LINK") 
.setEmoji("1175647559943979068")
      .setURL("https://dsc.gg/lunarteam"),
      new MessageButton()
      .setLabel("Vote me")

      .setStyle("LINK") 
.setEmoji("1175647562951303199")
      .setURL("https://top.gg/bot/903922960354672671/vote")
    )

let embed = new MessageEmbed()
    .setDescription(`**<a:blue:1173593209499308174> : List of Discord Bot Source [Normal]**
> <a:arrow_arrow:1176819112446529536>  Milrato Clan Bot - \`a!cllan-src\`
> <a:arrow_arrow:1176819112446529536>  Music Bot - \`a!music-v14\`
> <a:arrow_arrow:1176819112446529536>  Uptimer Bot - \`a!uo-uptimer\` (Soon)
> <a:arrow_arrow:1176819112446529536>  Flansic Bot - \`a!flansic-py\` (Soon)
> <a:arrow_arrow:1176819112446529536>  Dank Memer - \`a!dank-memer\` (Soon)
> <a:arrow_arrow:1176819112446529536>  Backup Bot - \`a!backup-bot\` (Soon)
> <a:arrow_arrow:1176819112446529536>  Ticket Bot -  \`a!ticket bot\` (soon)
> <a:arrow_arrow:1176819112446529536>  Milanio Bot - \`a!milanio-js\` (soon)
> <a:arrow_arrow:1176819112446529536>  Levelup Bot - \`a!levelup-bot\` (soon)
> <a:arrow_arrow:1176819112446529536>  ChatGPT bot - \`a1chatgpt-bot\` (soon)

**<a:blue:1173593209499308174> : List of Discord Bot Source [Special]**
> <a:arrow_arrow:1176819112446529536> Milrato Bot Manager
> <a:arrow_arrow:1176819112446529536> Azury Bot Manager with DB
> <a:arrow_arrow:1176819112446529536> Cloudux Source
> <a:arrow_arrow:1176819112446529536> Advanced Discord bot with DB

**<a:blue:1173593209499308174>  Steps to get Normal Src for Free**
> <a:arrow_arrow:1176819112446529536> \`step-1\`  The source commands requires Administration 
> Thats why have to add the bot to your server
> <a:arrow_arrow:1176819112446529536> \`step-2\` After adding u can access the given commands`)
    .setFooter(client.user.tag, client.user.displayAvatarURL({dynamic:true}))
      .setColor("#87CEEB")
    .setTimestamp()



    message.channel.send({embeds: [embed], components: [row]})
}
}