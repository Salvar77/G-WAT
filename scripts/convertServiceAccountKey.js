const fs = require("fs");

// Zmień 'path_to_your_service_account_file.json' na ścieżkę do Twojego pliku JSON
let raw = fs.readFileSync("config/booking-app.json");
let key = JSON.stringify(raw.toString());

console.log(key);
