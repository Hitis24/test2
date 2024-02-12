const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'hug',
  description: 'Roleplay a hug with another user',
  run: async (client, message, args) => {
    const userToHug = message.mentions.users.first();

    if (userToHug) {
      const hugMessages = [
        `A warm hug from ${message.author} to ${userToHug}! 🤗`,
        `${message.author} wraps their arms around ${userToHug} in a tight hug. 🫂`,
        `Sending virtual hugs to ${userToHug}! 🤗 ${message.author} cares!`,
      ];

      const selectedHugMessage = hugMessages[Math.floor(Math.random() * hugMessages.length)];

      const hugEmbed = new MessageEmbed()
        .setDescription(selectedHugMessage)
        .setImage('https://cdn.discordapp.com/attachments/1182245769164628011/1203030826984538133/hug.gif?ex=65cf9cc4&is=65bd27c4&hm=87d2028c7e58afa8c881978b4334dbc13131c5fb084148e30a9454050d0d6aea&'); // Add the URL of a hug image or gif here

      return message.channel.send({ embeds: [hugEmbed] });
    } else {
      return message.reply('you need to mention a user to hug them!');
    }
  },
};
