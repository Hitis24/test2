const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'slap',
  description: 'Roleplay giving a slap to another user',
  run: async (client, message, args) => {
    const userToSlap = message.mentions.users.first();

    if (userToSlap) {
      const slapMessages = [
        `${message.author} gives a resounding slap to ${userToSlap}! 😡`,
        `${message.author} slaps ${userToSlap} across the face. Ouch! 👋`,
        `Sending virtual slaps to ${userToSlap}! 😠 ${message.author} isn't happy!`,
      ];

      const selectedSlapMessage = slapMessages[Math.floor(Math.random() * slapMessages.length)];

      const slapEmbed = new MessageEmbed()
        .setDescription(selectedSlapMessage)
        .setImage('https://cdn.discordapp.com/attachments/1182245769164628011/1203032486880485386/slaap.gif?ex=65cf9e50&is=65bd2950&hm=3a1311b50ec084bdf09186e410e0d807d2589bc9af6344f6dfc1599f9c1aa6f6&'); // Add the URL of a slap image or gif here

      return message.channel.send({ embeds: [slapEmbed] });
    } else {
      return message.reply('you need to mention a user to give them a slap!');
    }
  },
};
