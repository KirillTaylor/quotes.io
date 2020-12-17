
require('dotenv').config();
const fs = require('fs');

function between(min, max) {  
	return Math.floor(
		Math.random() * (max - min) + min
	)
}

export default function handler(req, res) {
	const dbFile = JSON.parse(fs.readFileSync(process.env.FILE_LOCATION));
	const message = dbFile.messages[between(0, dbFile.messages.length - 1)];
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	const date = new Date();
	date.setMilliseconds(message.date);
	res.send(JSON.stringify({
		text: message.text,
		first_name: message.from.first_name,
		year: date.getFullYear() - 1
	}));
  }