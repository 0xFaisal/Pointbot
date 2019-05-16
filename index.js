var discord = require('discord.js');
var client = new discord.Client();
fs = require('fs')

// some data 
commands = { };

// Load functions
require('./functions/load.js')(client);


// load commands and events
setTimeout( function ( ) {
 
loadCommands();
loadEvents();
})



