
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
        .setTitle(`DAWN IS HERE!`)
        .setDescription(`**HEY ${message.author.username},** I WAS MADE BY Gotokuji 
>  BOT PREFIX: \`${config.prefix}\` 
>  FORGOT MY PREFIX? DONT WORRY YOU CAN ALWAYS MENTION ME TO CHECK MY PREFIX`)
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#87CEEB")
        .setFooter(`THANKS FOR USING ME`)
   
      message.channel.send({embeds: [embed], components: []})
    
      }

      })
