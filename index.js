import input from '@inquirer/input';
import qr from 'qr-image';
import fs from 'fs';

async function askForURL() {
  const userURL = await input({
    message: 'Please type a valid URL:',
    validate: (value) => {
      try {
        // If the string typed is not a valid URL, the new URL() throw (error)
        new URL(value);
        return true;
      } catch (error) {
        return 'Wrong type for URL please type something in this format (https://www.example.com)';
      }
    },
  });
  const parsedUrl = new URL(userURL);
  let hostname = parsedUrl.hostname; // It takes the short format of a bigger url i.e "www.google.com from https://www.google.com/webhp?hl=el&sa=X&sqi=2&ved"
  let cleanName = hostname
    .replace('www.', '') // removes "www." if exists
    .split('.')[0];      // it cuts the string to two pieces after the the first "." and it keeps the first part i.e "google from google.com"
    
  console.log(`Success the url you typed is : ${userURL}`);
  var qr_svg = qr.image(userURL, {type: 'png'});
  qr_svg.pipe(fs.createWriteStream(`${cleanName}.png`));
}

askForURL();
