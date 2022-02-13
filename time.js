module.exports = {
    name: 'time',
    description: 'This displays the current time!',
    async execute(message, args, cmd, client, Discord){
        let date = new Date();
            
        let content = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            message.channel.send(content)
    }
}