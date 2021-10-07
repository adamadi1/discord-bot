const {
    Client,
    Attachment
} = require('discord.js');
const bot = new Client();

const token = 'ODk1NzgxMDMzNjU4NzEyMTI0.YV9jGQ.prs3O1wWYUHiWa55-z0m1CG2wzE';

const PREFIX = '!';

var version = '1.2';





bot.on('gotowy', () => {
    console.log('Bot gotowy panie' + version);

})




bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).splt(" ");

    switch (args[0]) {
        case 'graj':
            if(!args[1]){
                message.channel.send("wpisz coś bo z pizdy ci nie wyczaruje muzyki kasztanie");
                return;
            }

            if(!message.member.voicechannel){
                message.channel.send("bądz na kanale pierw cepie")
                return;
            }



        break;
    }


});

bot.login(token);