const weather = require('weather-js');

const Discord = require('discord.js');


module.exports = {
    name: "weather",
    description: "Checks the weather from a location",

    async execute(message, args, cmd, client, Discord){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('Please tell me a location')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setColor('#3498DB')
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x111111)
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('Temperature', `${current.temperature}°`, true)
        .addField('Wind', current.winddisplay, true)
        .addField('Feels like', `${current.feelslike}°`, true)
        


        message.channel.send(weatherinfo)
        })        
    }
}