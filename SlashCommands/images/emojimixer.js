const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js'); // Changed from EmbedBuilder to MessageEmbed
const superagent = require('superagent');
const { onlyEmoji } = require('emoji-aware');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emojimixer')
        .setDescription('Combine two different emojis')
        .addStringOption(option =>
            option.setName('emojis')
                .setDescription('The emojis to combine')
                .setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const { options } = interaction;
        const eString = options.getString('emojis');
        const input = onlyEmoji(eString);

        if (input.length !== 2) {
            const response = 'Please provide exactly two emojis.';
            return await interaction.editReply({ content: response });
        }

        const response = `One or both of these emojis (\`${input}\`) are not supported. Keep in mind that gestures (i.e., thumbsup) and custom server emojis are not supported.`;

        const output = await superagent.get('https://tenor.googleapis.com/v2/featured').query({
            key: 'AIzaSyBEUenxJYn75oZ7X9gVpqK-IkfUVCGy18w', // Replace 'YOUR_TENOR_API_KEY' with your actual Tenor API key
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

        const embed = new MessageEmbed().setColor('BLURPLE').setImage(output.body.results[0].url); // Changed from EmbedBuilder to MessageEmbed

        await interaction.editReply({ embeds: [embed] });
    }
};
