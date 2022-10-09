let fs = require("fs");
let axios = require("axios");

let hints = ['hints'];
let ipfsArray = [];
let api_key = "tUp42h4uw8tuvJ7byvdV8SDRv6DeGBurULfZ638o4gRGgj9eZVtwa5ixK8taeVVb"

for (let i = 0; i < hints.length; i++) {
  ipfsArray.push({
    path: `metadata/${i}.json`,
    content: {
      "treasure_info": `https://ipfs.moralis.io:2053/ipfs/QmfM3NgxweEhWe7Fj3M8mxwnoxRMd6F3NJTtWro7zqWrcE/media/0`, //xxx = hash
      "user_id": "hamza.lens",
      "treasure_id": 1,
      "timestamp": "2022-10-08T20:55:17.324Z"
    },
  });
}


axios.post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
    headers: {
      "X-API-KEY":
        "i4pU5kxcVgboosPCxCDEigbmNCUGfS5dhbT4D0LUwuWMYBk43Fc93RG9C9QrfAmH",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });