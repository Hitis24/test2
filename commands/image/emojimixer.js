const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'emojimixer',
  aliases: ['mixemoji'], // Add the alias here
  description: 'Combine two different emojis',
  run: async (client, message, args) => {
    await message.deferReply({ ephemeral: true });

    const eString = args[0];
    const input = onlyEmoji(eString);

    if (input.length !== 2) {
      const response = 'Please provide exactly two emojis.';
      return await message.editReply({ content: response });
    }

    const response = `One or both of these emojis (\`${input}\`) are not supported. Keep in mind that gestures (i.e., thumbsup) and custom server emojis are not supported.`;

    const output = await superagent.get('https://tenor.googleapis.com/v2/featured').query({
      key: 'AIzaSyBEUenxJYn75oZ7X9gVpqK-IkfUVCGy18w',
      contentfilter: 'high',
      media_filter: 'png_transparent',
      component: 'proactive',
      collection: 'emoji_kitchen_v5',
      q: input.join('')
    }).catch(err => {});

    if (!output || !output.body.results[0]) {
      return await message.editReply({ content: response });
    } else if (eString.startsWith('<') || eString.endsWith('>')) {
      return await message.editReply({ content: response });
    }

    const embed = new MessageEmbed().setColor('BLURPLE').setImage(output.body.results[0].url);

    await message.editReply({ embeds: [embed] });
  }
};
