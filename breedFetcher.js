const request = require('request');
const args = process.argv.slice(2);

request("https://api.thecataplllli.com/v1/breeds/search?q=" + args[0], (error, response, body) => {
  if (error !== undefined) {
    console.log("An error has occured.");
    return;
  }
  
  const data = JSON.parse(body);

  if (error !== undefined) {
    console.log("An error has occured.");
  }
  if (data.includes(args[0])) {
    console.log(data);
  }
  console.log("Sorry, cat breed note found.");
  
});