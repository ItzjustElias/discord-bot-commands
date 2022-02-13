module.exports = {
    name: 'date',
    description: 'This displays the current date!',
    async execute(message, args, cmd, client, Discord){
        let date = new Date();
            
            let content = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
            message.channel.send(content)
    }
}