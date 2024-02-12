const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require("discord.js");
const { version: discordjsVersion } = require("discord.js");
const config = require("../../botconfig/main");

module.exports = {
  name: "help",
   aliases: ["h"],  
  run: async (client, message, args) => {
    // Create the dropdown menu
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Weiden Menu')
        .addOptions([
          // Options for the dropdown menu
          {
            label: 'Main Menu',
            description: 'Shows the main menu',
            emoji: "<:emoji_11:1183805043091189780>",
            value: '0',
          },
          {
            label: 'Config Commands',
            description: 'Shows all the config commands',
            emoji: "<:emoji_12:1183805079304818728>",
            value: '1',
          },
          {
            label: 'Fun Commands',
            description: 'Shows all the fun commands',
            emoji: "<:emoji_12:1183805113425465434>",
            value: '3',
          },
          {
            label: 'Games Commands',
            description: 'Shows all the game commands',
            emoji: "<:emoji_13:1183805142940786698>",
            value: '4',
          },
          {
            label: 'Information Commands',
            description: 'Shows all the information commands',
            emoji: "<:emoji_14:1183805166584086538>",
            value: '5',
          },
          {
            label: 'Moderation Commands',
            description: 'Shows all the moderation commands',
            emoji: "<:emoji_15:1183805193331150889>",
            value: '6',
          },
          
            
          {
            label: 'Utility Commands',
            description: 'Shows all the utility commands',
            emoji: " <:emoji_17:1183805223031025694>",
            value: '7',
          },
          {
            label: 'Image Commands',
            description: 'Shows all the image commands',
            emoji: "<:emoji_17:1183805248532381787>",
            value: '8',
          },
          {
            label: 'Economy Commands',
            description: 'Shows all the economy commands',
            emoji: "<:emoji_18:1183805274868432907>",
            value: '9',
          },
        ]),
    );

    // Main help menu embed
    const embed = new MessageEmbed()
      .setTitle("**HELP MENU**")
      .setDescription(`__**BOT INFO**__
> Prefix: \`d!\`
> Owner: \`Gotokuji\`

__**BOT'S COMMANDS**__
> Config Commands
> Fun Commands
> Games Commands
> Moderation Commands
> Information Commands
> Utility Commands
> Image Commands
> Economy Commands

__**BOT'S STATUS**__
> Current Ping: ${client.ws.ping}ms
> Discord.js Version: ${discordjsVersion}
> Running on Node ${process.version} on ${process.platform} ${process.arch}
> Made By Gotokuji`)
      .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("#87CEEB");

    // Define help menu pages
    const pages = {
      "1": {
        content: new MessageEmbed()
          .setColor('#87CEEB')
          .setTitle('**HELP MENU**')
          .addFields(
            { name: "**CONFIG COMMANDS**", value: "`set-countingchannel`, `setwelcomechannel`, `setleavechannel`" }
          )
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB")
          .setFooter('Page 1'),
      },
      "3": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#87CEEB')
          .addFields(
            { name: "**FUN COMMANDS**", value: "`8ball`, `activity`, `say`, `meme` `kiss` `slap` `hug`" }
          )
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setFooter('Page 3'),
      },
      "4": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#87CEEB')
          .addFields(
            { name: "**GAMES COMMANDS**", value: "`c4`, `tictactoe`,  `roadrace`, `snake`,  `quickclick` `trivia`" }
          )
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB")
          .setFooter('Page 4'),
      },
      "5": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#87CEEB')
          .addFields(
            { name: "**INFO COMMANDS**", value: "`help`, `cmdhelp`, `botinfo`, `ping`,`embed`" }
          )
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB")
          .setFooter('Page 5'),
      },
      "6": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#87CEEB')
          .addFields(
            { name: "**MOD COMMANDS**", value: "`ban`, `addroleall`, `removeroleall`, `softban`, `purge`, `mute`, `kick`, `tempmute`, `nuke` `stealemoji` `addrole` `removerole` `lock` `unlock` `hide` `unhide`" }
          )
          .setFooter('Page 6')
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB"),
      },
      "7": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#87CEEB')
          .addFields({ name: "**UTILITY COMMANDS**", value: "`addtag`, `edittag`, `removetag`, `afk`, `rolelist`, `snipe`, `timer`, `calculator`, `avatar`, `serverinfo`, `ss`, `dump`" })
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB")
          .setFooter('Page 7')
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&"),
      },
      "8": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#FFFFFF')
          .addFields({ name: "**Image**", value: "`anime`, `art`, `banner`, `cat`, `color`, `dog`, `gif`, `ss`" })
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB")
          .setFooter('Page 8'),
      },
      "9": {
        content: new MessageEmbed()
          .setTitle('**Help Menu**')
          .setColor('#87CEEB')
          .addFields({ name: "**ECONOMY COMMANDS**", value: "`balance`, `deposit`, `withdraw`, `search`, `shop`, `inv`, `pet`, `adopt`, `buy`, `sell`, `use`, `gamble`, `multi`, `beg`, `daily`, `fish`, `hunt`, `rob`, `rich` `postmeme`" })
          .setImage("https://media.discordapp.net/attachments/1182245769164628011/1201489473888858293/aesethdawn.gif?ex=65ca0145&is=65b78c45&hm=a56b8b36a7b0274a458b7c8ec0cf183535e7a3e793a4ce880a7ae525eb3cbee8&")
          .setColor("#87CEEB")
          .setFooter('Page 9'),
      },
      // ... Add other pages similarly
    };

    // Message component collector
    const collector = message.channel.createMessageComponentCollector({
      filter: i => i.user.id === message.author.id,
      time: 40000000,
      componentType: "SELECT_MENU",
    });

    // Handle collected interactions
    collector.on("collect", async (collected) => {
      const value = collected.values[0];
      const page = pages[value];

      if (page) {
        collected.update({ embeds: [page.content], components: [row] });
      }
    });

    // Send initial help menu
    message.channel.send({ embeds: [embed], components: [row] });
  },
};
