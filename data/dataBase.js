let fs = require('fs');
let db = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

module.exports = db