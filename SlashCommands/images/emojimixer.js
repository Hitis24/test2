const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
const { onlyEmoji } = require('emoji-aware');

module.exports = {
    name: 'emojimixer',
    description: 'Combine two different emojis',
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const eString = interaction.options.getString('emojis');
        const input = onlyEmoji(eString);

        if (input.length !== 2) {
            const response = 'Please provide exactly two emojis.';
            return await interaction.editReply({ content: response });
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

        if (!output || !output.body.results[0] || eString.startsWith('<') || eString.endsWith('>')) {
            return await interaction.editReply({ content: response });
        }

        const embed = new MessageEmbed().setColor('BLURPLE').setImage(output.body.results[0].url);

        await interaction.editReply({ embeds: [embed] });
    }
};
