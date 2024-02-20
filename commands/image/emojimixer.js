const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'emojimixer',
  aliases: ['mixemojis'], // Add the alias here
  description: 'Combine two different emojis',
  run: async (client, interaction, args) => {
    await interaction.deferReply({ ephemeral: true });

    const eString = args[0];
    const input = onlyEmoji(eString);

    if (input.length !== 2) {
      const response = 'Please provide exactly two emojis.';
      return await interaction.editReply({ content: response });
    }

    const response = `One or both of these emojis (\`${input}\`) are not supported. Keep in mind that gestures (i.e., thumbsup) and custom server emojis are not supported.`;

    const output = await superagent.get('https://tenor.googleapis.com/v2/featured').query({
      key: '',
      contentfilter: 'high',
      media_filter: 'png_transparent',
      component: 'proactive',
      collection: 'emoji_kitchen_v5',
      q: input.join('')
    }).catch(err => {});

    if (!output || !output.body.results[0]) {
      return await interaction.editReply({ content: response });
    } else if (eString.startsWith('<') || eString.endsWith('>')) {
      return await interaction.editReply({ content: response });
    }

    const embed = new MessageEmbed().setColor('BLURPLE').setImage(output.body.results[0].url);

    await interaction.editReply({ embeds: [embed] });
  }
};
