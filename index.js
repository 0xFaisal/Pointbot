var discord = require('discord.js');
var client = new discord.Client();
fs = require('fs')
config = require('./config.json');
chalk = require('chalk')
path = require('path');

// some data 
commands = { };
help = {};

// Load functions
require('./functions/load.js')(client, __dirname);

// login to bot
login(config.token);
