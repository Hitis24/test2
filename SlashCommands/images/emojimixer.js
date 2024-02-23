const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const { onlyEmoji } = require('emoji-aware');

module.exports = {
  data: {
    name: 'emojimixer',
    description: 'Combine two different emojis',
    options: [
      {
        name: 'emojis',
        description: 'Two emojis to combine',
        type: 'STRING',
        required: true
      }
    ]
  },

  async execute(interaction) {
    try {
      const eString = interaction.options.getString('emojis');
      const input = onlyEmoji(eString);

      if (input.length !== 2) {
        const response = 'Please provide exactly two emojis.';
        return await interaction.reply({ content: response, ephemeral: true });
      }

      const response = `One or both of these emojis (\`${input}\`) are not supported. Keep in mind that gestures (i.e., thumbsup) and custom server emojis are not supported.`;

      const output = await superagent.get('https://tenor.googleapis.com/v2/featured').query({
        key: 'AIzaSyBEUenxJYn75oZ7X9gVpqK-IkfUVCGy18w',
        contentfilter: 'high',
        media_filter: 'png_transparent',
        component: 'proactive',
        collection: 'emoji_kitchen_v5',
        q: input.join('')
      });

      if (!output || !output.body.results[0] || eString.startsWith('<') || eString.endsWith('>')) {
        return await interaction.reply({ content: response, ephemeral: true });
      }

      const embed = new MessageEmbed().setColor('BLURPLE').setImage(output.body.results[0].url);
      await interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (error) {
      console.error('Error handling interaction:', error);
      await interaction.reply('An error occurred while processing your request.', { ephemeral: true });
    }
  }
};
