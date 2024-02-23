const { Util, MessageEmbed } = require("discord.js");

module.exports = {
    name: "addemoji",
    category: "moderation",
    description: "Steal emojis from other server",
    userpermissions: ["MANAGE_EMOJIS_AND_STICKERS"],
    botpermissions: ["MANAGE_EMOJIS_AND_STICKERS"],
    usage: "addemoji <emoji> <name>",
    aliases: ["stealemoji"],
    run: async (client, message, args) => {
        const emoji = args[0];
        if (!emoji) return message.channel.send("Please provide an emoji to add.\n\n**Usage:** `addemoji <emoji> <name>`");

        const custom = Util.parseEmoji(emoji);
        if (!custom.id) return message.channel.send("Please provide a valid custom emoji.");

        const name = args[1] ? args[1].replace(/[^a-z0-9]/gi, "") : null;
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
