const request = require('request');

const fetchBreedDescription = function(breedName, cb) {

  const url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    if (error) {
      //console.log("An error has occured.");
      cb(error, null);
      return;
    }

    const data = JSON.parse(body);
    console.log(data);
    if (!data[0]) {
      //console.log("An error has occured.");
      cb('breed not found', null);
      return;
    }
   
    cb(null, data[0].description);
    //console.log("Sorry, cat breed note found.");
    
  });

};

module.exports = {
  fetchBreedDescription
};