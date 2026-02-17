const fs = require("fs");

let raw = fs.readFileSync("config/booking-app.json");
let key = JSON.stringify(JSON.parse(raw));

console.log(key);
