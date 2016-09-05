#! /usr/bin/env node

var path = require("path");
var happypass = require(path.join(__dirname, "index.js"));

console.log(happypass.generate());