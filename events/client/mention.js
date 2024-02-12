
const {MessageActionRow, MessageButton, MessageEmbed} = require("discord.js") 
const config = require("../../botconfig/main") 
const client = require("../../index") 
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;


  // mentioned bot
  
   const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {

    let embed = new MessageEmbed()
        .setTitle(`${client.user.username} IS HERE!`)
        .setDescription(`**HEY ${message.author.username},** I WAS MADE BY <@1169542629415993378> 
> <a:point_blue:1183809873893412976> BOT PREFIX: \`${config.prefix}\` 
> <a:point_blue:1183809873893412976> FORGOT MY PREFIX? DONT WORRY YOU CAN ALWAYS MENTION ME TO CHECK MY PREFIX`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#87CEEB")
        .setFooter(`THANKS FOR USING ME`)
    const row2 = new MessageActionRow() 
  .addComponents(
    new MessageButton()
.setLabel("Youtube")

       .setStyle("LINK") 
 .setEmoji("<:emoji_8:1183803536740454420>")
       .setURL("https://www.youtube.com/c/NitrixEXE"),
       new MessageButton()
       .setLabel("Support Server")

       .setStyle("LINK") 
 .setEmoji("<:emoji_3:1183803331911630858>")
       .setURL("https://discord.gg/PnnQcwAG5m"),
       new MessageButton()
       .setLabel("Vote me")

       .setStyle("LINK") 
 .setEmoji("<:emoji_5:1183803399834185738>")
       .setURL("https://discord.gg/PnnQcwAG5m")
  )
      message.channel.send({embeds: [embed], components: [row2]})
    
      }

      })
