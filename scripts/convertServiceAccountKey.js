const fs = require("fs");

// Zmień 'config/booking-app.json' na ścieżkę do Twojego pliku JSON
let raw = fs.readFileSync("config/booking-app.json");
let key = JSON.stringify(JSON.parse(raw));

console.log(key);
