const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'This is the ping command!',
    async execute(message, args, cmd, client, Discord){
        message.channel.send('pong!');

        const pingPongImage = new Discord.MessageEmbed()

        .setColor("#3498DB")
        .setTitle("PingPong")
        .setImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fnl.123rf.com%2Fphoto_60582835_ping-pong-pictogram-ping-pongvector-op-witte-achtergrond-wordt-ge%25C3%25AFsoleerd-die-platte-vectorillustratie.html&psig=AOvVaw3oC3x-0swtBeTbPoR39nou&ust=1628880402896000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNivmsKSrPICFQAAAAAdAAAAABAJ')
        message.channel.send(pingPongImage);
    }
}