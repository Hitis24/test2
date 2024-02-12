const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'kiss',
  description: 'Roleplay giving a kiss to another user',
  run: async (client, message, args) => {
    const userToKiss = message.mentions.users.first();

    if (userToKiss) {
      const kissMessages = [
        `${message.author} gives a sweet kiss to ${userToKiss}! 😘`,
        `${message.author} plants a gentle kiss on ${userToKiss}'s cheek. 💋`,
        `Sending virtual kisses to ${userToKiss}! 😚 ${message.author} appreciates you!`,
      ];

      const selectedKissMessage = kissMessages[Math.floor(Math.random() * kissMessages.length)];

      const kissEmbed = new MessageEmbed()
        .setDescription(selectedKissMessage)
        .setImage('https://cdn.discordapp.com/attachments/1182245769164628011/1203032096214483004/kisss.gif?ex=65cf9df2&is=65bd28f2&hm=34c1686dd483fcc4638da1652ce5cb015068a834dce318fc1d88c8bd2a7d7031&'); // Add the URL of a kiss image or gif here

      return message.channel.send({ embeds: [kissEmbed] });
    } else {
      return message.reply('you need to mention a user to give them a kiss!');
    }
  },
};
