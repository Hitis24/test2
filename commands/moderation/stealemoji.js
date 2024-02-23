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
        // Check if the message is a reply
        if (!message.reference || !message.reference.messageID) {
            return message.channel.send("You need to reply to a message containing the emoji you want to steal.");
        }

        // Get the replied message
        const repliedMessage = await message.channel.messages.fetch(message.reference.messageID);
        if (!repliedMessage) {
            return message.channel.send("Could not fetch the replied message. Make sure you're replying to a valid message containing the emoji.");
        }

        // Check if the replied message contains an emoji
        if (!repliedMessage.content.match(/<:.+?:\d+>/)) {
            return message.channel.send("The replied message does not contain a valid custom emoji.");
        }

        // Parse the emoji from the replied message
        const emoji = repliedMessage.content.match(/<:.+?:\d+>/)[0];
        const custom = Util.parseEmoji(emoji);
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
