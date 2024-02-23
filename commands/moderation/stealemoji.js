const { Util, MessageEmbed } = require("discord.js");

module.exports = {
    name: "addemoji",
    category: "moderation",
    description: "Steal emojis from other servers",
    userpermissions: ["MANAGE_EMOJIS_AND_STICKERS"],
    botpermissions: ["MANAGE_EMOJIS_AND_STICKERS"],
    usage: "addemoji <name>",
    aliases: ["stealemoji"],
    run: async (client, message, args) => {
        // Get the replied message
        const repliedMessage = message.reference && message.channel.messages.cache.get(message.reference.messageID);
        if (!repliedMessage) {
            return message.channel.send("You need to reply to a message containing the emoji you want to steal.");
        }

        // Check if the replied message contains an emoji
        const emojiRegex = /<a?:.+?:\d+>/g;
        const emojis = repliedMessage.content.match(emojiRegex);
        if (!emojis || emojis.length === 0) {
            return message.channel.send("The replied message does not contain a valid custom emoji.");
        }

        // Parse the first emoji found in the replied message
        const custom = Util.parseEmoji(emojis[0]);
        if (!custom.id) {
            return message.channel.send("Could not parse the emoji from the replied message.");
        }

        // Process the name argument
        const name = args[0] ? args[0].replace(/[^a-z0-9]/gi, "") : null;
        if (!name) {
            return message.channel.send("Please provide a name to set.");
        }
        if (name.length < 2 || name.length > 32) {
            return message.channel.send("Emoji name length should be between 2 and 32.");
        }

        const URL = `https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`;

        try {
            const createdEmoji = await message.guild.emojis.create(URL, name);
            const successEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Emoji ${createdEmoji} was successfully added.`)
                .addField("Emoji Name", createdEmoji.name);

            message.channel.send({ embeds: [successEmbed] });
        } catch (error) {
            console.error(error);
            const errorEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription("An error occurred. Please join our community server and report this issue.");

            message.channel.send({ embeds: [errorEmbed] });
        }
    }
};
