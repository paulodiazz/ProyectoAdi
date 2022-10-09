let fs = require("fs");
let axios = require("axios");

let media = ['treasure.json'];
let ipfsArray = [];
let promises = [];

let api_key = "tUp42h4uw8tuvJ7byvdV8SDRv6DeGBurULfZ638o4gRGgj9eZVtwa5ixK8taeVVb"

let path = require("path");

for (let i = 0; i < media.length; i++) {
    
  promises.push(
    new Promise((res, rej) => {
      fs.readFile( path.join(__dirname,"../../model/")+`${media[i]}`, (err, data) => {
        if (err) rej();
        console.log(data);
        ipfsArray.push({
          path: `media/${i}`,
          content: data.toString("base64"),
        });
        res();
      });
    })
  );
}

Promise.all(promises).then(() => {
  axios
    .post("https://deep-index.moralis.io/api/v2/ipfs/uploadFolder", ipfsArray, {
      headers: {
        "X-API-KEY":
          api_key,
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
});
