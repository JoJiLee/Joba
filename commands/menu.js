"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
exports.default = {
    category: 'Testing',
    description: 'send embed',
    callback: function (_a) {
        var message = _a.message, text = _a.text;
        var menuEmbed = new discord_js_1.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Joba Menu")
            .setThumbnail("https://rb.gy/qiotl2")
            .addFields({ name: "Milk Tea", value: "Black Milk Tea \nGreen Milk Tea \nOolong Milk Tea \nMatcha Milk Tea \nThai Milk Tea", inline: true }, { name: "Fruit Tea", value: "Mango Green Tea \nGuava Green Tea \nPeach Green Tea \nPassion Fruit Green Tea \nWintermelon Green Tea", inline: true }, { name: "\u200B", value: "\u200B" }, { name: "Sugar", value: "none, 25%, 50%, 75%, 100%", inline: true }, { name: "Ice", value: "none, less, regular, more", inline: true })
            .addField("Toppings", "Pearls, Pudding, Grass Jelly")
            .setTimestamp()
            .setFooter("Joba");
        message.channel.send({ embeds: [menuEmbed] });
    }
};
