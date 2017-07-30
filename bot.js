var tmi = require("tmi.js");

// var channel = ["#goldensplit"];
var channel = ["#eugenychannel"];

var options = {
    options: {
        clientId: null,
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "nacalyator",
        password: "************************"
    },
    channels: channel
};

var Nac = new tmi.client(options);

Nac.connect();

Nac.on("join", function (channel, username, self) {
    Nac.action(channel, "Взрывается в чате Keepo");
    // Do your stuff.
});


Nac.on("message", function (channel, userstate, message, self) {
    // Don't listen to my own messages..
    if (self) return;
    // if (message == "WanWan") {
    //     Nac.action(channel, "@" + userstate['display-name'] + " VVапVVап Keepo");
    // }
    if ((message.length >= 3) && (message.substring(0, 3) == "!wr")) {
        var targetName = message.substring(3);
        Nac.action(channel, "Команду принял, но ещё функционал не написан");
        
    }
});