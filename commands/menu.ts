import { channel } from "diagnostics_channel";
import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'send embed',

    callback: ({ message, text }) => {
        const menuEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Joba Menu")
        .setThumbnail("https://rb.gy/qiotl2")
        .addFields(
            { name: "Milk Tea", value: "Black Milk Tea \nGreen Milk Tea \nOolong Milk Tea \nMatcha Milk Tea \nThai Milk Tea", inline: true },
            { name: "Fruit Tea", value: "Mango Green Tea \nGuava Green Tea \nPeach Green Tea \nPassion Fruit Green Tea \nWintermelon Green Tea", inline: true},
            { name: "\u200B", value: "\u200B" },
            { name: "Sugar", value: "none, 25%, 50%, 75%, 100%", inline: true },
            { name: "Ice", value: "none, less, regular, more", inline: true }
          )
        .addField("Toppings", "Pearls, Pudding, Grass Jelly")
        .setTimestamp()
        .setFooter("Joba");

        message.channel.send({embeds: [menuEmbed]})
    }
} as ICommand