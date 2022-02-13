module.exports = {
    name: 'kick',
    description: "This command simply kicks a member!",
    async execute(message, args, cmd, client, Discord){

        let role = message.guild.roles.cache.find(r => r.name === "Mod");

        if(message.member.permissions.has("KICK_MEMBERS")){
        const target = message.mentions.users.first();

        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member, you need to mention someone you dummy!`);
        }

        }else{
        message.channel.send('You dont have the permissions to kick members!')
        }
    }
}