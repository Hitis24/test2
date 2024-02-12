const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
  pagination: async (options) => {
    const { channel, embeds } = options;

    let currentPage = 0;

    const createButton = (id, emoji, style, disabled) => {
      return new MessageButton()
        .setCustomId(id)
        .setEmoji(emoji)
        .setStyle(style)
        .setDisabled(disabled);
    };

    const row = new MessageActionRow()
      .addComponents([
        createButton('previous', '911282989676257361', 'PRIMARY', false),
        createButton('next', '911283076506714112', 'PRIMARY', false),
      ]);

    const sentMsg = await channel.send({ embeds: [embeds[currentPage]], components: [row] });

    const collector = sentMsg.createMessageComponentCollector({
      filter: (i) => i.isButton(),
      time: 300000,
    });

    collector.on('collect', async (interaction) => {
      if (interaction.customId === 'next') {
        currentPage = Math.min(currentPage + 1, embeds.length - 1);
      } else if (interaction.customId === 'previous') {
        currentPage = Math.max(currentPage - 1, 0);
      }

      await interaction.update({ embeds: [embeds[currentPage]], components: [row] });
    });

    collector.on('end', () => {
      sentMsg.edit({ components: [row] }).catch(console.error);
    });
  },
};
